import { technicalTipsData } from '../src/data/technicalTipsData';

// Common English words that shouldn't typically appear in Italian text if it's supposed to be Italian
const englishIndicators = [
  ' the ', ' this ', ' with ', ' from ', ' should ', ' because ', ' which ', ' when ',
  ' your ', ' there ', ' have ', ' been ', ' that ', ' will ', ' also ', ' about '
];

// Common Italian words that shouldn't typically appear in English text
const italianIndicators = [
  ' il ', ' lo ', ' la ', ' i ', ' gli ', ' le ', ' con ', ' per ', ' sono ', ' questo ',
  ' questa ', ' perche ', ' perché ', ' quando ', ' anche ', ' molto ', ' nella ', ' nello '
];

console.log('=== DEEP TECHNICAL TIPS AUDIT ===');
let issuesFound = 0;

technicalTipsData.forEach((tip, tIdx) => {
  // Check title
  englishIndicators.forEach(word => {
    if (tip.titleIt.toLowerCase().includes(word)) {
      console.log(`[Tip ${tip.slug}] Possible English in titleIt: "${tip.titleIt}" (contains "${word.trim()}")`);
      issuesFound++;
    }
  });

  // Check summary
  englishIndicators.forEach(word => {
    if (tip.summaryIt.toLowerCase().includes(word)) {
      console.log(`[Tip ${tip.slug}] Possible English in summaryIt: "${tip.summaryIt}" (contains "${word.trim()}")`);
      issuesFound++;
    }
  });

  // Check caution
  if (tip.cautionIt) {
    englishIndicators.forEach(word => {
      if (tip.cautionIt!.toLowerCase().includes(word)) {
        console.log(`[Tip ${tip.slug}] Possible English in cautionIt: "${tip.cautionIt}" (contains "${word.trim()}")`);
        issuesFound++;
      }
    });
  }

  // Check sections
  tip.sections.forEach((sec, sIdx) => {
    if (sec.headingIt) {
      englishIndicators.forEach(word => {
        if (sec.headingIt!.toLowerCase().includes(word)) {
          console.log(`[Tip ${tip.slug} sec ${sIdx}] Possible English in headingIt: "${sec.headingIt}" (contains "${word.trim()}")`);
          issuesFound++;
        }
      });
    }

    sec.bodyIt.forEach((p, pIdx) => {
      let countEn = 0;
      englishIndicators.forEach(word => {
        if (p.toLowerCase().includes(word)) countEn++;
      });
      if (countEn >= 2) {
        console.log(`[Tip ${tip.slug} sec ${sIdx} p ${pIdx}] Untranslated/English in bodyIt (${countEn} indicators): "${p.substring(0, 80)}..."`);
        issuesFound++;
      }
    });

    sec.bodyEn.forEach((p, pIdx) => {
      let countIt = 0;
      italianIndicators.forEach(word => {
        if (p.toLowerCase().includes(word)) countIt++;
      });
      if (countIt >= 2) {
        console.log(`[Tip ${tip.slug} sec ${sIdx} p ${pIdx}] Untranslated/Italian in bodyEn (${countIt} indicators): "${p.substring(0, 80)}..."`);
        issuesFound++;
      }
    });
  });

  // Check image captions
  tip.images?.forEach((img, iIdx) => {
    if (img.captionIt) {
      let countEn = 0;
      englishIndicators.forEach(word => {
        if (img.captionIt.toLowerCase().includes(word)) countEn++;
      });
      if (countEn >= 2) {
        console.log(`[Tip ${tip.slug} img ${iIdx}] Untranslated/English in captionIt: "${img.captionIt}"`);
        issuesFound++;
      }
    }
    if (img.captionEn) {
      let countIt = 0;
      italianIndicators.forEach(word => {
        if (img.captionEn.toLowerCase().includes(word)) countIt++;
      });
      if (countIt >= 2) {
        console.log(`[Tip ${tip.slug} img ${iIdx}] Untranslated/Italian in captionEn: "${img.captionEn}"`);
        issuesFound++;
      }
    }
  });
});

console.log(`Total tip issues found: ${issuesFound}`);
