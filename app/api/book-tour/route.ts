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
    const { name, email, phone, preferredDate, preferredTime, message } = body

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Format lead data with tour details
    const leadData = formatLeadData(
      { name, email, phone, preferredDate, preferredTime, message },
      'Website Tour Request'
    )

    // Parallel execution of integrations
    const results = await Promise.allSettled([
      // 1. Create lead in Follow Up Boss with tour tag
      createFollowUpBossLead({
        ...leadData,
        source: 'Website Tour Request',
      }),

      // 2. Send to Zapier tour webhook (can trigger calendar booking)
      sendToZapier(process.env.ZAPIER_TOUR_WEBHOOK_URL, {
        ...leadData,
        formType: 'tour',
        tourDetails: {
          date: preferredDate,
          time: preferredTime,
        },
      }),

      // 3. Send priority email notification for tour request
      sendEmailNotification(
        process.env.AGENT_EMAIL || 'janet.duffy@bhhsnv.com',
        `🏠 URGENT: Tour Request - ${leadData.firstName} ${leadData.lastName}`,
        generateLeadEmailHTML(leadData, 'Tour Request')
      ),
    ])

    console.log('Tour booking processed:', {
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
        message: 'Tour booking request received',
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
    console.error('Error processing tour booking:', error)
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    )
  }
}

