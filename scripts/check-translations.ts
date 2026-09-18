import { technicalTipsData } from '../src/data/technicalTipsData';
import fs from 'fs';
import path from 'path';

console.log('=== 1. TECHNICAL TIPS AUDIT ===');
console.log('Total tips:', technicalTipsData.length);

const tipIssues: any[] = [];
for (const tip of technicalTipsData) {
  if (tip.titleIt === tip.titleEn) {
    tipIssues.push({ slug: tip.slug, field: 'title', it: tip.titleIt, en: tip.titleEn });
  }
  if (tip.summaryIt === tip.summaryEn) {
    tipIssues.push({ slug: tip.slug, field: 'summary', it: tip.summaryIt, en: tip.summaryEn });
  }
  if (tip.cautionIt && tip.cautionEn && tip.cautionIt === tip.cautionEn) {
    tipIssues.push({ slug: tip.slug, field: 'caution', it: tip.cautionIt, en: tip.cautionEn });
  }
  tip.sections?.forEach((s, idx) => {
    if (s.headingIt && s.headingEn && s.headingIt === s.headingEn && s.headingIt.length > 5) {
      tipIssues.push({ slug: tip.slug, field: `section[${idx}].heading`, it: s.headingIt, en: s.headingEn });
    }
    // Check if bodyIt has length differences or identical strings
    if (s.bodyIt && s.bodyEn) {
      if (s.bodyIt.length !== s.bodyEn.length) {
        tipIssues.push({ slug: tip.slug, field: `section[${idx}].bodyLengthMismatch`, itLen: s.bodyIt.length, enLen: s.bodyEn.length });
      }
      s.bodyIt.forEach((pIt, pIdx) => {
        const pEn = s.bodyEn[pIdx];
        if (pIt === pEn && pIt.length > 15) {
          tipIssues.push({ slug: tip.slug, field: `section[${idx}].p[${pIdx}] identical`, it: pIt.substring(0, 60) });
        }
      });
    }
  });
  tip.images?.forEach((img, idx) => {
    if (img.captionIt && img.captionEn && img.captionIt === img.captionEn && img.captionIt.length > 8) {
      tipIssues.push({ slug: tip.slug, field: `image[${idx}].caption`, it: img.captionIt });
    }
  });
}

console.log('Tip issues count:', tipIssues.length);
if (tipIssues.length > 0) {
  console.log(JSON.stringify(tipIssues, null, 2));
}

console.log('\n=== 2. ASTRO PAGES AUDIT (Missing lang-it / lang-en pairs) ===');
function findAstroFiles(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(findAstroFiles(fullPath));
    } else if (file.endsWith('.astro')) {
      results.push(fullPath);
    }
  });
  return results;
}

const astroFiles = findAstroFiles('src');
for (const file of astroFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relFile = path.relative(process.cwd(), file);
  
  // Count matches of class="...lang-it..." vs class="...lang-en..."
  const itMatches = (content.match(/class="[^"]*lang-it[^"]*"/g) || []).length;
  const enMatches = (content.match(/class="[^"]*lang-en[^"]*"/g) || []).length;

  if (itMatches !== enMatches) {
    console.log(`[MISMATCH] ${relFile}: lang-it (${itMatches}) vs lang-en (${enMatches})`);
  }
}
