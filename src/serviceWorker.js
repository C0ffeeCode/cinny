/* eslint-disable no-restricted-globals */
/* eslint-env serviceworker */

console.log('Service Worker file loaded successfully');

self.addEventListener('install', () => {
  console.log('Hello world from the Service worker');
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  console.log('Serive worker now active');
  clients.claim();
});

self.addEventListener('message', (event) => {
  console.log('Service worker received message', event);
});

// self.addEventListener('fetch', (event) => {
//   // console.log('Service worker fetches', event);
//   return fetch(event);
// });
