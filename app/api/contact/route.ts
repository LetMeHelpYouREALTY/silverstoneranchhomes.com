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

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Format lead data
    const leadData = formatLeadData(
      { name, email, phone, message },
      'Website Contact Form'
    )

    // Parallel execution of integrations
    const results = await Promise.allSettled([
      // 1. Create lead in Follow Up Boss
      createFollowUpBossLead(leadData),

      // 2. Send to Zapier webhook (if configured)
      sendToZapier(process.env.ZAPIER_LEAD_WEBHOOK_URL, {
        ...leadData,
        formType: 'contact',
      }),

      // 3. Send email notification to agent
      sendEmailNotification(
        process.env.AGENT_EMAIL || 'janet.duffy@bhhsnv.com',
        `🏡 New Contact Form Lead - ${leadData.firstName} ${leadData.lastName}`,
        generateLeadEmailHTML(leadData, 'Contact Form')
      ),
    ])

    // Log results for debugging
    console.log('Contact form submission processed:', {
      leadData,
      fubResult:
        results[0].status === 'fulfilled' ? results[0].value : 'failed',
      zapierResult:
        results[1].status === 'fulfilled' ? results[1].value : 'failed',
      emailResult:
        results[2].status === 'fulfilled' ? results[2].value : 'failed',
    })

    // Check if at least one integration succeeded
    const anySuccess = results.some(
      (result) => result.status === 'fulfilled' && result.value.success
    )

    if (!anySuccess) {
      console.error('All integrations failed:', results)
      // Still return success to user, but log internally
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully',
        // Include integration status in dev mode
        ...(process.env.NODE_ENV === 'development' && {
          debug: {
            fub:
              results[0].status === 'fulfilled'
                ? results[0].value.success
                : false,
            zapier:
              results[1].status === 'fulfilled'
                ? results[1].value.success
                : false,
            email:
              results[2].status === 'fulfilled'
                ? results[2].value.success
                : false,
          },
        }),
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}

