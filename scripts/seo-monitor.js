#!/usr/bin/env node
/**
 * SEO Health Monitor - Automated checks for production site
 * Run this periodically to monitor SEO/GEO/AEO compliance
 */

const https = require('https');
const http = require('http');

const SITE_URL = process.env.SITE_URL || 'https://www.silverstoneranchhomes.com';
const PAGES_TO_CHECK = [
  '/',
  '/homes-for-sale',
  '/agent',
  '/amenities',
  '/silverstone-ranch',
  '/buy-with-agent',
  '/sell-with-agent',
];

async function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, html: data, headers: res.headers }));
    }).on('error', reject);
  });
}

async function checkPage(path) {
  const url = `${SITE_URL}${path}`;
  console.log(`\n🔍 Checking: ${url}`);

  try {
    const { status, html, headers } = await fetchPage(url);

    const checks = {
      httpStatus: status === 200,
      hasTitle: /<title>([^<]+)<\/title>/.test(html),
      hasMetaDescription: /<meta\s+name=["']description["']/.test(html),
      hasOgImage: /<meta\s+property=["']og:image["']/.test(html),
      hasSchema: /<script\s+type=["']application\/ld\+json["']/.test(html),
      hasFAQ: /"@type"\s*:\s*"FAQPage"/.test(html),
      hasCanonical: /<link\s+rel=["']canonical["']/.test(html),
      hasRobots: /<meta\s+name=["']robots["']/.test(html),
      hasViewport: /<meta\s+name=["']viewport["']/.test(html),
    };

    // Extract structured data
    const schemaMatches = html.match(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/g) || [];
    const schemas = schemaMatches.map(match => {
      try {
        const json = match.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
        const parsed = JSON.parse(json);
        return parsed['@type'] || 'Unknown';
      } catch (e) {
        return 'Invalid JSON';
      }
    });

    console.log('  Status:', checks.httpStatus ? '✅' : '❌', status);
    console.log('  Title:', checks.hasTitle ? '✅' : '❌');
    console.log('  Meta Description:', checks.hasMetaDescription ? '✅' : '❌');
    console.log('  OG Image:', checks.hasOgImage ? '✅' : '❌');
    console.log('  Schema Markup:', checks.hasSchema ? '✅' : '❌');
    if (schemas.length > 0) {
      console.log('    Types:', schemas.join(', '));
    }
    console.log('  FAQ Schema:', checks.hasFAQ ? '✅' : '⚠️');
    console.log('  Canonical:', checks.hasCanonical ? '✅' : '❌');
    console.log('  Viewport:', checks.hasViewport ? '✅' : '❌');

    // Check for AEO properties in schemas
    const hasPotentialAction = /"potentialAction"/.test(html);
    const hasSpeakable = /"speakable"/.test(html);
    const hasKnowsAbout = /"knowsAbout"/.test(html);

    console.log('\n  🎙️ AEO Properties:');
    console.log('    potentialAction:', hasPotentialAction ? '✅' : '⚠️');
    console.log('    speakable:', hasSpeakable ? '✅' : '⚠️');
    console.log('    knowsAbout:', hasKnowsAbout ? '✅' : '⚠️');

    // Check for GEO properties
    const hasGeo = /"geo"/.test(html);
    const hasAreaServed = /"areaServed"/.test(html);

    console.log('\n  🌍 GEO Properties:');
    console.log('    geo:', hasGeo ? '✅' : '⚠️');
    console.log('    areaServed:', hasAreaServed ? '✅' : '⚠️');

    return {
      path,
      url,
      ...checks,
      schemas,
      aeo: { hasPotentialAction, hasSpeakable, hasKnowsAbout },
      geo: { hasGeo, hasAreaServed },
    };
  } catch (error) {
    console.log('  ❌ Error:', error.message);
    return {
      path,
      url,
      error: error.message,
    };
  }
}

async function checkRobotsTxt() {
  console.log('\n🤖 Checking robots.txt...');
  try {
    const { status, html } = await fetchPage(`${SITE_URL}/robots.txt`);
    console.log('  Status:', status === 200 ? '✅' : '❌', status);

    // Check for AI crawler directives
    const allowsGPTBot = /User-agent:\s*GPTBot/i.test(html);
    const allowsClaudeBot = /User-agent:\s*(anthropic-ai|Claude-Web)/i.test(html);
    const allowsPerplexity = /User-agent:\s*PerplexityBot/i.test(html);
    const hasSitemap = /Sitemap:/i.test(html);

    console.log('  AI Crawlers (GEO):');
    console.log('    GPTBot:', allowsGPTBot ? '✅ Allowed' : '⚠️ Not configured');
    console.log('    Claude:', allowsClaudeBot ? '✅ Allowed' : '⚠️ Not configured');
    console.log('    Perplexity:', allowsPerplexity ? '✅ Allowed' : '⚠️ Not configured');
    console.log('  Sitemap:', hasSitemap ? '✅' : '⚠️');
  } catch (error) {
    console.log('  ❌ Error:', error.message);
  }
}

async function checkSitemap() {
  console.log('\n🗺️  Checking sitemap.xml...');
  try {
    const { status, html } = await fetchPage(`${SITE_URL}/sitemap.xml`);
    console.log('  Status:', status === 200 ? '✅' : '❌', status);

    const urlMatches = html.match(/<url>/g) || [];
    console.log('  URLs:', urlMatches.length, urlMatches.length > 0 ? '✅' : '⚠️');

    // Check for change frequency and priority
    const hasChangeFreq = /<changefreq>/i.test(html);
    const hasPriority = /<priority>/i.test(html);
    const hasLastMod = /<lastmod>/i.test(html);

    console.log('  Change Frequency:', hasChangeFreq ? '✅' : '⚠️');
    console.log('  Priority:', hasPriority ? '✅' : '⚠️');
    console.log('  Last Modified:', hasLastMod ? '✅' : '⚠️');
  } catch (error) {
    console.log('  ❌ Error:', error.message);
  }
}

async function main() {
  console.log('🚀 SEO Health Monitor - 2026 Best Practices');
  console.log('Site:', SITE_URL);
  console.log('═'.repeat(60));

  const results = [];
  for (const path of PAGES_TO_CHECK) {
    const result = await checkPage(path);
    results.push(result);
  }

  await checkRobotsTxt();
  await checkSitemap();

  // Summary
  console.log('\n📊 Summary');
  console.log('═'.repeat(60));
  const allPassed = results.every(r => r.httpStatus && r.hasTitle && r.hasMetaDescription && r.hasSchema);
  console.log('Overall Status:', allPassed ? '✅ HEALTHY' : '⚠️ NEEDS ATTENTION');

  const errors = results.filter(r => r.error || !r.httpStatus);
  if (errors.length > 0) {
    console.log('\n❌ Errors:');
    errors.forEach(e => console.log('  -', e.path, e.error || 'HTTP ' + e.httpStatus));
  }

  // Save results
  const timestamp = new Date().toISOString();
  const report = {
    timestamp,
    site: SITE_URL,
    results,
    summary: {
      total: PAGES_TO_CHECK.length,
      passed: results.filter(r => r.httpStatus).length,
      errors: errors.length,
      allPassed,
    },
  };

  require('fs').writeFileSync('seo-monitor-results.json', JSON.stringify(report, null, 2));
  console.log('\n✅ Report saved to seo-monitor-results.json');

  process.exit(allPassed ? 0 : 1);
}

main().catch(err => {
  console.error('❌ Monitor error:', err);
  process.exit(1);
});
