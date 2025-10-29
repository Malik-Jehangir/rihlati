
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/rihlati/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-GU5EKQNY.js",
      "chunk-IWSXHBGQ.js"
    ],
    "route": "/rihlati"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KIJ5AERC.js",
      "chunk-IWSXHBGQ.js"
    ],
    "route": "/rihlati/explore-ksa"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X643TEXE.js",
      "chunk-KVYS7YPI.js",
      "chunk-IWSXHBGQ.js"
    ],
    "route": "/rihlati/rooms"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BCYH6WHI.js",
      "chunk-KVYS7YPI.js"
    ],
    "route": "/rihlati/checkout"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MF4JUJD4.js",
      "chunk-KVYS7YPI.js",
      "chunk-IWSXHBGQ.js"
    ],
    "route": "/rihlati/ride"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KOVBKZLA.js",
      "chunk-KVYS7YPI.js",
      "chunk-LR2XQATN.js",
      "chunk-IWSXHBGQ.js"
    ],
    "route": "/rihlati/permit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7KVADC2S.js",
      "chunk-LR2XQATN.js",
      "chunk-IWSXHBGQ.js"
    ],
    "route": "/rihlati/flight-status"
  },
  {
    "renderMode": 2,
    "redirectTo": "/rihlati",
    "route": "/rihlati/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25204, hash: '3ab6c913c981acbeb6e0e2453e7b473a6632a6445d7fa669b00af4a4a272c74c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17630, hash: '22dae15c31035271b30309944160ffba07f05febeed3878714b00217d0d09e2d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'explore-ksa/index.html': {size: 78061, hash: 'd267d2586598a7fc8667cba752c19f462b22f7aa1537bb5187d54dd30a24b155', text: () => import('./assets-chunks/explore-ksa_index_html.mjs').then(m => m.default)},
    'ride/index.html': {size: 103130, hash: '5e7cdc657560d98585e1475fcc24205af9d1c643dbf0b1734bd6786abc6d7686', text: () => import('./assets-chunks/ride_index_html.mjs').then(m => m.default)},
    'rooms/index.html': {size: 73008, hash: '5829ba7254879ceaeb29943918ebbfc5eb8c7c97c435be74cc91316888f9dcbf', text: () => import('./assets-chunks/rooms_index_html.mjs').then(m => m.default)},
    'index.html': {size: 83029, hash: '1c21c847f2a1cd72cbf4923aea4d99bcc29999ec40db7363584ed2f58a30f800', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'flight-status/index.html': {size: 103640, hash: '32449c2ad4dacdb44a061e3f87998d1a795a8c190c18e976daaa2eba22badf23', text: () => import('./assets-chunks/flight-status_index_html.mjs').then(m => m.default)},
    'permit/index.html': {size: 180190, hash: 'c01081626260f5fa50fed2d9c9e7cb875d241a365770e9972d84cbe64895e259', text: () => import('./assets-chunks/permit_index_html.mjs').then(m => m.default)},
    'styles-VSSNPW2X.css': {size: 9200, hash: 'issiSJZX/Wg', text: () => import('./assets-chunks/styles-VSSNPW2X_css.mjs').then(m => m.default)}
  },
};
