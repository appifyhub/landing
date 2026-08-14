import { PurgeCSS } from "purgecss";
import purgeConfig from "../purgecss.config.cjs";

const results = await new PurgeCSS().purge({
  ...purgeConfig,
  rejected: true,
});

let candidateCount = 0;

for (const { file, rejected = [] } of results) {
  candidateCount += rejected.length;
  console.log(`${file}: ${rejected.length} candidate selectors`);

  for (const selector of rejected) {
    console.log(`  ${selector}`);
  }
}

if (candidateCount === 0) {
  console.log("No unused selector candidates found.");
}
