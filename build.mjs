// Vercel 배포 때 실행: index.html을 public/으로 복사하면서
// Web Analytics 고유 스크립트 경로(VERCEL_OBSERVABILITY_BASEPATH)를 끼워 넣는다.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const base = process.env.VERCEL_OBSERVABILITY_BASEPATH || '/_vercel';
const html = readFileSync('index.html', 'utf8')
  .replaceAll('/_vercel/insights/script.js', `${base}/insights/script.js`);

mkdirSync('public', { recursive: true });
writeFileSync('public/index.html', html);
console.log('analytics script path:', `${base}/insights/script.js`);
