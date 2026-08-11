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
    const { name, email, phone, message } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Format lead data
    const leadData = formatLeadData(
      { name, email, phone, message },
      'Website Info Request'
    )

    // Parallel execution of integrations
    const results = await Promise.allSettled([
      // 1. Create lead in Follow Up Boss
      createFollowUpBossLead(leadData),

      // 2. Send to Zapier webhook
      sendToZapier(process.env.ZAPIER_LEAD_WEBHOOK_URL, {
        ...leadData,
        formType: 'info-request',
      }),

      // 3. Send email notification
      sendEmailNotification(
        process.env.AGENT_EMAIL || 'janet.duffy@bhhsnv.com',
        `📧 New Info Request - ${leadData.firstName} ${leadData.lastName}`,
        generateLeadEmailHTML(leadData, 'Information Request')
      ),
    ])

    console.log('Info request processed:', {
      leadData,
      results: results.map((r, i) => ({
        integration: ['FUB', 'Zapier', 'Email'][i],
        status: r.status,
        success: r.status === 'fulfilled' ? r.value.success : false,
      })),
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Request received',
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
    console.error('Error processing request info:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}

