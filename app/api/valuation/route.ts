import { NextRequest, NextResponse } from 'next/server'
import {
  createFollowUpBossLead,
  sendToZapier,
  sendEmailNotification,
  formatLeadData,
  generateLeadEmailHTML,
} from '@/lib/crm-integration'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, address, propertyDetails } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Format lead data with property address
    const leadData = formatLeadData(
      {
        name,
        email,
        phone,
        propertyAddress: address,
        message: `Property Details: ${propertyDetails || 'Not provided'}`,
      },
      'Website Home Valuation'
    )

    // Parallel execution of integrations
    const results = await Promise.allSettled([
      // 1. Create seller lead in Follow Up Boss
      createFollowUpBossLead({
        ...leadData,
        source: 'Website Home Valuation (Seller Lead)',
      }),

      // 2. Send to Zapier valuation webhook (can trigger CMA generation)
      sendToZapier(process.env.ZAPIER_VALUATION_WEBHOOK_URL, {
        ...leadData,
        formType: 'valuation',
        propertyAddress: address,
        propertyDetails,
      }),

      // 3. Send high-priority email for valuation (hot seller lead)
      sendEmailNotification(
        process.env.AGENT_EMAIL || 'janet.duffy@bhhsnv.com',
        `💰 HOT LEAD: Home Valuation - ${leadData.firstName} ${leadData.lastName}`,
        generateLeadEmailHTML(
          {
            ...leadData,
            message: `**Property Address:** ${address || 'Not provided'}\n\n**Details:** ${propertyDetails || 'Not provided'}`,
          },
          'Home Valuation (Seller Lead)'
        )
      ),
    ])

    console.log('Valuation request processed:', {
      leadData,
      propertyAddress: address,
      results: results.map((r, i) => ({
        integration: ['FUB', 'Zapier', 'Email'][i],
        status: r.status,
        success: r.status === 'fulfilled' ? r.value.success : false,
      })),
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Valuation request received',
        ...(process.env.NODE_ENV === 'development' && {
          debug: {
            integrations: results.map((r, i) => ({
              name: ['FUB', 'Zapier', 'Email'][i],
              success: r.status === 'fulfilled' ? r.value.success : false,
            })),
          },
        }),
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing valuation request:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}

