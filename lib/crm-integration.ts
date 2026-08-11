/**
 * CRM Integration Layer
 * Connects website leads to Follow Up Boss and other CRM systems
 */

interface LeadData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  source: string
  message?: string
  propertyInterest?: string
  tourDate?: string
  tourTime?: string
}

interface FUBLead {
  person: {
    firstName: string
    lastName: string
    emails: Array<{ value: string }>
    phones?: Array<{ value: string }>
  }
  source: string
  message?: string
  tags?: string[]
}

/**
 * Create a lead in Follow Up Boss
 */
export async function createFollowUpBossLead(
  leadData: LeadData
): Promise<{ success: boolean; leadId?: string; error?: string }> {
  const apiKey = process.env.FOLLOW_UP_BOSS_API_KEY

  if (!apiKey) {
    console.warn('Follow Up Boss API key not configured')
    return { success: false, error: 'FUB_NOT_CONFIGURED' }
  }

  try {
    const [firstName, ...lastNameParts] = leadData.firstName.split(' ')
    const lastName = leadData.lastName || lastNameParts.join(' ') || ''

    const fubLead: FUBLead = {
      person: {
        firstName,
        lastName,
        emails: [{ value: leadData.email }],
        ...(leadData.phone && {
          phones: [{ value: leadData.phone }],
        }),
      },
      source: leadData.source,
      ...(leadData.message && { message: leadData.message }),
      tags: ['Website Lead', leadData.source],
    }

    const response = await fetch('https://api.followupboss.com/v1/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(apiKey + ':').toString('base64')}`,
      },
      body: JSON.stringify(fubLead),
    })

    if (!response.ok) {
      throw new Error(`FUB API error: ${response.statusText}`)
    }

    const result = await response.json()
    return { success: true, leadId: result.id }
  } catch (error) {
    console.error('Error creating FUB lead:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'UNKNOWN_ERROR',
    }
  }
}

/**
 * Send lead to Zapier webhook for additional automation
 */
export async function sendToZapier(
  webhookUrl: string | undefined,
  data: Record<string, any>
): Promise<{ success: boolean; error?: string }> {
  if (!webhookUrl) {
    return { success: false, error: 'WEBHOOK_NOT_CONFIGURED' }
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        source: 'silverstoneranchhomes.com',
      }),
    })

    if (!response.ok) {
      throw new Error(`Zapier webhook error: ${response.statusText}`)
    }

    return { success: true }
  } catch (error) {
    console.error('Error sending to Zapier:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'UNKNOWN_ERROR',
    }
  }
}

/**
 * Send email notification using Resend
 */
export async function sendEmailNotification(
  to: string,
  subject: string,
  htmlContent: string
): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.warn('Resend API key not configured')
    return { success: false, error: 'EMAIL_NOT_CONFIGURED' }
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Silverstone Ranch Homes <noreply@silverstoneranchhomes.com>',
        to,
        subject,
        html: htmlContent,
      }),
    })

    if (!response.ok) {
      throw new Error(`Email API error: ${response.statusText}`)
    }

    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'UNKNOWN_ERROR',
    }
  }
}

/**
 * Format lead data for CRM
 */
export function formatLeadData(formData: any, source: string): LeadData {
  const nameParts = formData.name?.split(' ') || []
  const firstName = nameParts[0] || ''
  const lastName = nameParts.slice(1).join(' ') || ''

  return {
    firstName,
    lastName,
    email: formData.email,
    phone: formData.phone,
    source,
    message: formData.message,
    propertyInterest: formData.propertyAddress,
    tourDate: formData.preferredDate,
    tourTime: formData.preferredTime,
  }
}

/**
 * Generate email HTML template
 */
export function generateLeadEmailHTML(
  leadData: LeadData,
  formType: string
): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Lead from Silverstone Ranch Homes</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1a365d 0%, #2d5a8c 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">🏡 New ${formType} Lead</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Silverstone Ranch Homes</p>
        </div>

        <div style="background: #f7fafc; padding: 30px; border-radius: 0 0 8px 8px;">
          <h2 style="color: #2d3748; margin-top: 0;">Contact Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #4a5568; font-weight: bold;">Name:</td>
              <td style="padding: 8px 0;">${leadData.firstName} ${leadData.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #4a5568; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${leadData.email}" style="color: #3182ce;">${leadData.email}</a></td>
            </tr>
            ${
              leadData.phone
                ? `
            <tr>
              <td style="padding: 8px 0; color: #4a5568; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0;"><a href="tel:${leadData.phone}" style="color: #3182ce;">${leadData.phone}</a></td>
            </tr>
            `
                : ''
            }
            <tr>
              <td style="padding: 8px 0; color: #4a5568; font-weight: bold;">Source:</td>
              <td style="padding: 8px 0;">${leadData.source}</td>
            </tr>
            ${
              leadData.tourDate
                ? `
            <tr>
              <td style="padding: 8px 0; color: #4a5568; font-weight: bold;">Preferred Date:</td>
              <td style="padding: 8px 0;">${leadData.tourDate} at ${leadData.tourTime || 'TBD'}</td>
            </tr>
            `
                : ''
            }
          </table>

          ${
            leadData.message
              ? `
          <div style="margin-top: 20px;">
            <h3 style="color: #2d3748; margin-bottom: 10px;">Message</h3>
            <div style="background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #3182ce;">
              ${leadData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          `
              : ''
          }

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #718096; font-size: 14px;">
            <p>Received on ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PST</p>
            <p style="margin-top: 10px;">
              <a href="https://www.silverstoneranchhomes.com" style="color: #3182ce; text-decoration: none;">www.silverstoneranchhomes.com</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  `
}
