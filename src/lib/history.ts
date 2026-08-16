import fs from 'fs';
import path from 'path';

import Portfolio from '@/interfaces/portfolio';

import html from 'remark-html';
import { remark } from 'remark';
import matter from 'gray-matter';

import Entry from '@/interfaces/entry';

const _historyFile = path.join(process.cwd(), 'content/history.json');

export function getHistory(): Entry[] {
  const fileContents = fs.readFileSync(_historyFile, 'utf8');
  return JSON.parse(fileContents) as Entry[]
} 
