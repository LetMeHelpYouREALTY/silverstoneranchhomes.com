#!/usr/bin/env node
/**
 * Schema.org validation script for 2026 SEO best practices
 * Validates JSON-LD schema markup in the built Next.js app
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

const REQUIRED_SCHEMAS = [
  'Organization',
  'RealEstateAgent',
  'LocalBusiness',
  'WebSite',
  'Place',
];

const RECOMMENDED_PROPERTIES = {
  Organization: ['@id', 'description', 'logo', 'sameAs', 'address', 'contactPoint'],
  RealEstateAgent: ['@id', 'knowsAbout', 'knowsLanguage', 'areaServed', 'hasCredential'],
  LocalBusiness: ['@id', 'geo', 'areaServed', 'openingHoursSpecification', 'potentialAction'],
  WebSite: ['@id', 'potentialAction', 'inLanguage'],
  Place: ['@id', 'geo', 'amenityFeature', 'containedInPlace'],
  WebPage: ['speakable', 'isPartOf', 'about'],
};

const AEO_PROPERTIES = ['potentialAction', 'speakable', 'knowsAbout'];
const GEO_PROPERTIES = ['geo', 'areaServed', 'geoMidpoint', 'geoRadius'];

async function findSchemaFiles() {
  // Look for TypeScript files with schema definitions
  const schemaFiles = await glob('lib/seo.ts', { cwd: process.cwd() });
  const layoutFiles = await glob('app/**/layout.tsx', { cwd: process.cwd() });
  const pageFiles = await glob('app/**/page.tsx', { cwd: process.cwd() });

  return [...schemaFiles, ...layoutFiles, ...pageFiles];
}

function validateSchema(content, filePath) {
  const issues = [];
  const found = {
    schemas: [],
    aeo: [],
    geo: [],
  };

  // Check for schema types
  REQUIRED_SCHEMAS.forEach(schemaType => {
    const regex = new RegExp(`['"]@type['"]\\s*:\\s*['"]${schemaType}['"]`, 'g');
    if (regex.test(content)) {
      found.schemas.push(schemaType);

      // Check for recommended properties
      const missing = [];
      RECOMMENDED_PROPERTIES[schemaType]?.forEach(prop => {
        const propRegex = new RegExp(`['"]${prop}['"]\\s*:`, 'g');
        if (!propRegex.test(content)) {
          missing.push(prop);
        }
      });

      if (missing.length > 0) {
        issues.push({
          file: filePath,
          type: 'warning',
          message: `${schemaType} missing recommended properties: ${missing.join(', ')}`,
        });
      }
    }
  });

  // Check for AEO properties
  AEO_PROPERTIES.forEach(prop => {
    if (content.includes(`"${prop}"`)) {
      found.aeo.push(prop);
    }
  });

  // Check for GEO properties
  GEO_PROPERTIES.forEach(prop => {
    if (content.includes(`"${prop}"`)) {
      found.geo.push(prop);
    }
  });

  // Check for FAQ schema
  if (content.includes('"@type":"FAQPage"') || content.includes("'@type': 'FAQPage'")) {
    found.schemas.push('FAQPage');
  }

  return { issues, found };
}

async function main() {
  console.log('🔍 Validating Schema.org markup for 2026 SEO/GEO/AEO...\n');

  const files = await findSchemaFiles();
  let allIssues = [];
  let allFound = {
    schemas: new Set(),
    aeo: new Set(),
    geo: new Set(),
  };

  for (const file of files) {
    const filePath = path.join(process.cwd(), file);
    const content = fs.readFileSync(filePath, 'utf8');
    const { issues, found } = validateSchema(content, file);

    allIssues = allIssues.concat(issues);
    found.schemas.forEach(s => allFound.schemas.add(s));
    found.aeo.forEach(a => allFound.aeo.add(a));
    found.geo.forEach(g => allFound.geo.add(g));
  }

  // Generate report
  console.log('📊 Schema Types Found:');
  allFound.schemas.forEach(schema => {
    const hasCheck = REQUIRED_SCHEMAS.includes(schema) ? '✅' : '📝';
    console.log(`  ${hasCheck} ${schema}`);
  });

  console.log('\n🎙️ AEO (Answer Engine Optimization):');
  if (allFound.aeo.size > 0) {
    allFound.aeo.forEach(prop => console.log(`  ✅ ${prop}`));
  } else {
    console.log('  ⚠️  No AEO properties found');
  }

  console.log('\n🌍 GEO (Geographic + Generative Engine):');
  if (allFound.geo.size > 0) {
    allFound.geo.forEach(prop => console.log(`  ✅ ${prop}`));
  } else {
    console.log('  ⚠️  No GEO properties found');
  }

  console.log('\n📋 Issues Found:');
  if (allIssues.length === 0) {
    console.log('  ✅ No critical issues');
  } else {
    allIssues.forEach(issue => {
      const icon = issue.type === 'error' ? '❌' : '⚠️';
      console.log(`  ${icon} ${issue.file}: ${issue.message}`);
    });
  }

  // Check for missing required schemas
  const missingRequired = REQUIRED_SCHEMAS.filter(s => !allFound.schemas.has(s));
  if (missingRequired.length > 0) {
    console.log('\n⚠️  Missing Required Schemas:');
    missingRequired.forEach(schema => console.log(`  - ${schema}`));
  }

  // Save results for CI
  const results = {
    summary: `Found ${allFound.schemas.size} schema types, ${allFound.aeo.size} AEO properties, ${allFound.geo.size} GEO properties`,
    details: allIssues.map(i => `${i.type}: ${i.message}`),
    stats: {
      schemas: Array.from(allFound.schemas),
      aeo: Array.from(allFound.aeo),
      geo: Array.from(allFound.geo),
      missingRequired,
    },
  };

  fs.writeFileSync('schema-validation-results.json', JSON.stringify(results, null, 2));
  console.log('\n✅ Validation complete! Results saved to schema-validation-results.json');

  // Exit with error if critical issues
  const criticalIssues = allIssues.filter(i => i.type === 'error');
  if (criticalIssues.length > 0 || missingRequired.length > 0) {
    console.log('\n❌ Validation failed with critical issues');
    process.exit(1);
  }

  process.exit(0);
}

main().catch(err => {
  console.error('❌ Validation script error:', err);
  process.exit(1);
});
