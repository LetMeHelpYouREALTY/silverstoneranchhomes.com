# CRM Automation Documentation

Complete guide to automated lead management and CRM integration for Silverstone Ranch Homes.

## 🔄 Overview

Every website form submission automatically:
1. ✅ Creates a lead in Follow Up Boss CRM
2. ✅ Sends email notification to agent
3. ✅ Triggers Zapier webhooks for additional automation
4. ✅ Tags and categorizes leads by source

All integrations run in parallel with graceful fallbacks - if one service fails, others continue.

## 📋 Form Types & Automation

### Contact Form (`/api/contact`)
**Source:** `Website Contact Form`  
**Priority:** Normal  
**Automation:**
- Creates FUB lead with "Website Lead" tag
- Sends standard email notification
- Triggers Zapier for follow-up sequences

### Tour Request (`/api/book-tour`)
**Source:** `Website Tour Request`  
**Priority:** HIGH  
**Automation:**
- Creates FUB lead with "Tour Request" tag
- Sends URGENT email to agent
- Triggers Zapier tour webhook (can auto-create calendar event)
- Includes preferred date/time in lead notes

### Home Valuation (`/api/valuation`)
**Source:** `Website Home Valuation (Seller Lead)`  
**Priority:** HOT  
**Automation:**
- Creates FUB lead with "Seller Lead" tag
- Sends HOT LEAD email to agent
- Triggers Zapier valuation webhook (can auto-generate CMA)
- Includes property address in lead data

### Info Request (`/api/request-info`)
**Source:** `Website Info Request`  
**Priority:** Normal  
**Automation:**
- Creates FUB lead with standard tags
- Sends info request email
- Triggers Zapier for nurture sequences

## 🔧 Setup Guide

### 1. Follow Up Boss Integration

**Get API Key:**
1. Log in to Follow Up Boss
2. Go to Admin → Integrations → API
3. Copy your API key

**Configure:**
```env
FOLLOW_UP_BOSS_API_KEY=your_api_key_here
```

**Test:**
```bash
# Development mode shows integration status
NODE_ENV=development npm run dev
# Submit a form and check console for debug output
```

### 2. Email Notifications (Resend)

**Get API Key:**
1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Verify your sending domain

**Configure:**
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
AGENT_EMAIL=janet.duffy@bhhsnv.com
AGENT_NAME=Dr. Jan Duffy
```

**Email Features:**
- Beautiful HTML templates
- Mobile-responsive design
- Click-to-call phone numbers
- Click-to-email addresses
- Priority flagging (URGENT, HOT LEAD)

### 3. Zapier Webhooks (Optional)

**Create Webhooks:**
1. Create a Zap for each form type
2. Trigger: Webhook (Catch Hook)
3. Copy the webhook URL

**Configure:**
```env
ZAPIER_LEAD_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/xxxxx/xxxxx
ZAPIER_TOUR_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/xxxxx/xxxxx
ZAPIER_VALUATION_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/xxxxx/xxxxx
```

**Zapier Use Cases:**
- Auto-create Google Calendar events for tours
- Send follow-up emails after 2 days
- Add leads to email marketing lists
- Generate CMAs for valuation requests
- Post to Slack channel for team visibility
- Create tasks in project management tools

### 4. Cloze Integration (Optional)

For sphere-of-influence tracking:

```env
CLOZE_API_KEY=your_cloze_api_key
CLOZE_USER_EMAIL=janet.duffy@bhhsnv.com
```

## 📊 Lead Data Flow

```
Website Form Submission
         ↓
    API Route Handler
         ↓
    ├─── Follow Up Boss (creates lead)
    ├─── Email Notification (to agent)
    └─── Zapier Webhook (additional automation)
         ↓
    Success Response to User
```

## 🎯 Lead Tagging Strategy

### Automatic Tags
- `Website Lead` - All web submissions
- `Tour Request` - Tour bookings
- `Seller Lead` - Valuation requests
- `Info Request` - General inquiries
- `Contact Form` - Contact submissions

### Manual Tags (FUB)
Add these tags in Follow Up Boss:
- `Hot` - Immediate follow-up needed
- `Warm` - Interested, nurture
- `Cold` - Long-term follow-up
- `Qualified` - Pre-qualified buyers
- `Investor` - Investment property interest

## 📈 Analytics & Tracking

### Development Mode Debug
Set `NODE_ENV=development` to see integration status:

```json
{
  "success": true,
  "debug": {
    "fub": true,
    "zapier": true,
    "email": true
  }
}
```

### Production Logs
Monitor Vercel logs for:
- Form submissions
- Integration successes/failures
- API errors

### Recommended Dashboards
1. **FUB Dashboard**: Lead source analysis
2. **Zapier Task History**: Automation status
3. **Resend Dashboard**: Email delivery rates
4. **Vercel Analytics**: Form conversion rates

## 🔒 Security

### API Key Storage
- Never commit API keys to Git
- Use Vercel environment variables
- Rotate keys quarterly
- Use different keys for dev/prod

### Webhook Security
- Use webhook secrets for verification
- Validate request origins
- Rate limit API endpoints

## 🚨 Troubleshooting

### Lead Not Appearing in FUB
1. Check API key is correct
2. Verify FUB account is active
3. Check Vercel logs for errors
4. Test with development mode debug

### Email Not Received
1. Verify Resend API key
2. Check domain verification
3. Check spam folder
4. Verify agent email in env vars

### Zapier Not Triggering
1. Test webhook URL with curl
2. Check Zap is enabled
3. Verify webhook URL is correct
4. Check Zapier task history

## 📚 Resources

- [Follow Up Boss API Docs](https://api.followupboss.com/)
- [Resend Documentation](https://resend.com/docs)
- [Zapier Webhooks Guide](https://zapier.com/help/create/code-webhooks/trigger-zaps-from-webhooks)

## 🔄 Maintenance

### Weekly
- Review lead quality in FUB
- Check Zapier task success rate
- Monitor email delivery rates

### Monthly
- Review and optimize Zaps
- Update email templates
- Analyze conversion funnels

### Quarterly
- Rotate API keys
- Review automation ROI
- Optimize lead tagging strategy
