// import * as cheerio from 'cheerio';

// const url = "https://warehouse-theme-metal.myshopify.com/collections/sales";
// const response = await fetch(url);

// if (response.ok) {
//   const html = await response.text();
//   const $ = cheerio.load(html);
//   console.log($("h1"));
// } else {
//   throw new Error(`HTTP ${response.status}`);
// }

import * as cheerio from 'cheerio';

const url = "https://warehouse-theme-metal.myshopify.com/collections/sales";
const response = await fetch(url);

if (response.ok) {
  const html = await response.text();
  const $ = cheerio.load(html);
  console.log($("h1").text());
} else {
  throw new Error(`HTTP ${response.status}`);
}