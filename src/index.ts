import { context } from '@actions/github';
import { getInput, setOutput, startGroup, info, endGroup } from '@actions/core';
import * as dree from 'dree';

function convertToNumber(str: string): number {
  const num = +str;
  return isNaN(num) ? 5 : num;
}

;(async () => {
  const folderPath = getInput('path') || ".";
  const depth: number = convertToNumber(getInput('depth') || "5");
  const {owner, repo} = context.repo
  const dreeResult = dree.parse(folderPath, { depth });

  startGroup(`\x1b[32;1m ${owner}/${repo} \x1b[0m tree: `);
  info(`${dreeResult}`);
  endGroup();
  setOutput('content', dreeResult);
})();