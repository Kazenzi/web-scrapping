import { CheerioCrawler } from 'crawlee';
import { Actor, Dataset } from 'apify';

await Actor.init();

const crawler = new CheerioCrawler({
  async requestHandler({ $, request, log }) {
    log.info(`Scraping ${request.url}`);

    const products = [];

    $('.product-item').each((i, el) => {
      const name = $(el).find('.product-item__title').text().trim();
      const price = $(el).find('.price').text().trim();

      products.push({ name, price });
    });

    await Dataset.pushData(products);
  },
});

await crawler.run([
  'https://warehouse-theme-metal.myshopify.com/collections/sales',
]);

console.log('Exporting dataset...');

// ✅ export to files manually
const dataset = await Dataset.open();

await dataset.exportToJSON('dataset.json');
await dataset.exportToCSV('dataset.csv');

await Actor.exit();