import * as fs from 'fs';
import { context } from '@actions/github';
import { getInput, setOutput, setFailed, startGroup, info, endGroup } from '@actions/core';
import { parse, ParseOptions } from 'dree';

function convertToNumber(str: string): number {
  const num = +str;
  return isNaN(num) ? 5 : num;
}

;(async () => {
  const folderPath = getInput('path', { required: false }) || ".";
  const exclude = getInput('exclude', { required: false });
  const config = getInput('config', { required: false }) || undefined;
  const depth: number = convertToNumber(getInput('depth') || "5");
  const {owner, repo} = context.repo

  let dtreeOptions: ParseOptions = { depth };

  try {
    if (exclude) {
      dtreeOptions.exclude = new RegExp(exclude);
    }
    if (config && fs.existsSync(config)) {
      let conf = JSON.parse(fs.readFileSync(config, 'utf-8'));
      dtreeOptions = { ...dtreeOptions, ...conf };
    }
    const dreeResult = parse(folderPath, dtreeOptions);
    startGroup(`\x1b[32;1m ${owner}/${repo} \x1b[0m tree: `);
    info(`${dreeResult}`);
    endGroup();
    setOutput('content', dreeResult);
  } catch (error) {
    setFailed(error as Error);
  }
})();