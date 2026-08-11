/**
 * CRM Integration Test Script
 * Run this to test your CRM integrations locally
 *
 * Usage: npx tsx scripts/test-crm-integration.ts
 */

import {
  createFollowUpBossLead,
  sendToZapier,
  sendEmailNotification,
  formatLeadData,
  generateLeadEmailHTML,
} from '../lib/crm-integration'

async function testIntegrations() {
  console.log('🧪 Testing CRM Integrations...\n')

  // Test lead data
  const testLead = formatLeadData(
    {
      name: 'Test User',
      email: 'test@example.com',
      phone: '702-555-0123',
      message: 'This is a test lead from the integration test script',
    },
    'Test Integration'
  )

  console.log('📋 Test Lead Data:')
  console.log(JSON.stringify(testLead, null, 2))
  console.log('')

  // Test Follow Up Boss
  console.log('1️⃣ Testing Follow Up Boss...')
  const fubResult = await createFollowUpBossLead(testLead)
  console.log(
    `   ${fubResult.success ? '✅' : '❌'} FUB: ${fubResult.success ? 'Success' : fubResult.error}`
  )
  console.log('')

  // Test Zapier
  console.log('2️⃣ Testing Zapier Webhook...')
  const zapierResult = await sendToZapier(
    process.env.ZAPIER_LEAD_WEBHOOK_URL,
    testLead
  )
  console.log(
    `   ${zapierResult.success ? '✅' : '❌'} Zapier: ${zapierResult.success ? 'Success' : zapierResult.error}`
  )
  console.log('')

  // Test Email
  console.log('3️⃣ Testing Email Notification...')
  const emailHTML = generateLeadEmailHTML(testLead, 'Test Integration')
  const emailResult = await sendEmailNotification(
    process.env.AGENT_EMAIL || 'janet.duffy@bhhsnv.com',
    '🧪 Test Lead - Integration Test',
    emailHTML
  )
  console.log(
    `   ${emailResult.success ? '✅' : '❌'} Email: ${emailResult.success ? 'Success' : emailResult.error}`
  )
  console.log('')

  // Summary
  const allSuccess =
    fubResult.success && zapierResult.success && emailResult.success
  console.log('─'.repeat(50))
  console.log(
    allSuccess
      ? '✅ All integrations working!'
      : '⚠️  Some integrations failed - check configuration'
  )
  console.log('')
  console.log('Environment variables:')
  console.log(
    `   FOLLOW_UP_BOSS_API_KEY: ${process.env.FOLLOW_UP_BOSS_API_KEY ? '✅ Set' : '❌ Missing'}`
  )
  console.log(
    `   RESEND_API_KEY: ${process.env.RESEND_API_KEY ? '✅ Set' : '❌ Missing'}`
  )
  console.log(
    `   ZAPIER_LEAD_WEBHOOK_URL: ${process.env.ZAPIER_LEAD_WEBHOOK_URL ? '✅ Set' : '❌ Missing'}`
  )
  console.log(
    `   AGENT_EMAIL: ${process.env.AGENT_EMAIL || 'Using default: janet.duffy@bhhsnv.com'}`
  )
}

// Run tests
testIntegrations().catch((error) => {
  console.error('❌ Test failed:', error)
  process.exit(1)
})
