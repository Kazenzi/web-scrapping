// import { CheerioCrawler } from 'crawlee';

// const crawler = new CheerioCrawler({
//     async requestHandler({ $, log }) {
//         const title = $('title').text().trim();
//         log.info(title);
//     },
// });

// await crawler.run(['https://warehouse-theme-metal.myshopify.com/collections/sales']);

import { CheerioCrawler } from 'crawlee';

const crawler = new CheerioCrawler({
    async requestHandler({ $, log, request, enqueueLinks }) {
      if (request.label === 'DETAIL') {
        log.info(request.url);
      } else {
        await enqueueLinks({ label: 'DETAIL', selector: '.product-list a.product-item__title' });
      }
    },
});

await crawler.run(['https://warehouse-theme-metal.myshopify.com/collections/sales']); 