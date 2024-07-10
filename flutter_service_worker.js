'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f7be47c67e0c24d94de4194672a5652f",
"assets/AssetManifest.bin.json": "4d3e50a092aebc516056183252e4ce8d",
"assets/AssetManifest.json": "a7f946af09c012a62ff65c28d1931f54",
"assets/assets/icons/about.svg": "9e519ac4f8df56130a08593573dfec3b",
"assets/assets/icons/api.svg": "7673f8dd41d16c0a993467c3713a826e",
"assets/assets/icons/calendar.svg": "f9d40189ce30322ead377d6a4d92912a",
"assets/assets/icons/call.svg": "44b791c6631f7f2259ab5d227a00a1bb",
"assets/assets/icons/contact.svg": "41e1dc018404e117fd90c92e5182650e",
"assets/assets/icons/cross-app.svg": "55b522c33ce2a488b2c22c7af864c276",
"assets/assets/icons/github.png": "b8e8b5a0666a18fa1049f951cf0f32ac",
"assets/assets/icons/github.svg": "26f54b16aa06a3856c7dd85ee9296f81",
"assets/assets/icons/home.svg": "12bb722461bae92fb5e1265648d78df0",
"assets/assets/icons/linkedin.svg": "89acf3bf2dc3566564166c8b9859d617",
"assets/assets/icons/location.svg": "b5bf01359993d228b746c352cbc414fb",
"assets/assets/icons/mail.svg": "11d99d6a10b2e533985a767abb214a8d",
"assets/assets/icons/mobile-app.svg": "ade201cf9d30ea7630d14295434930c8",
"assets/assets/icons/projects.svg": "6732d9adfaf49a78d8f4c00b6c46aeb9",
"assets/assets/icons/services.svg": "ce449da56f2748c63fd683bc78b6bb13",
"assets/assets/icons/twitter.svg": "d1b01474a9804fd37ceaca33ff3832ce",
"assets/assets/icons/ui-design.svg": "228b4cb5946574437d64db889e8b2c2c",
"assets/assets/icons/web-app.svg": "fc39f2b488ca9eab6e783242f0581658",
"assets/assets/icons/website.svg": "17166c986009cf036620754784d65f9f",
"assets/assets/images/3d_view.png": "a959d67792915e26388f932420e5ec25",
"assets/assets/images/atresite.png": "96b060fccd1bd219fc99b3f52bc0f0dc",
"assets/assets/images/folio-img.jpg": "731dc25b25590e11d87b093010fdff94",
"assets/assets/images/logo.png": "eb073eda19f972fbffd9a040274766af",
"assets/assets/images/mob_stick.png": "307cf956a7a2b4e28319f8744d919a54",
"assets/assets/images/my_folio.png": "dd7644f68670ca34ebcaa693d15bd56e",
"assets/assets/images/my_profile.jpg": "162eb0861a94579dd5b2a16dbeef117e",
"assets/assets/images/plantify.png": "45a81108108798a9b67803428fbc0648",
"assets/assets/images/profile.jpg": "95b72c9c8b733f45fc22b3cd0633ee8f",
"assets/assets/images/taskify.png": "bd87448184a301646cad654b553c81a3",
"assets/FontManifest.json": "578fa61108a9a871931214344b9060a7",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "578e5d19d4bc91f86ccce629519d22e2",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "d1d34f98ef972bd7c945f1254b73e28d",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "78dbf142db5fa646d807b62c6a94efff",
"icons/Icon-192.png": "30279ccca92063869884e3b356f94d4a",
"icons/Icon-512.png": "671706048ebf4c4c0310da58cb2d6090",
"icons/Icon-maskable-192.png": "30279ccca92063869884e3b356f94d4a",
"icons/Icon-maskable-512.png": "671706048ebf4c4c0310da58cb2d6090",
"index.html": "3a083be53b9630569f60ddd9dc2fa7ee",
"/": "3a083be53b9630569f60ddd9dc2fa7ee",
"main.dart.js": "3b5f02695a9a0cbdab51fe28b7c64acf",
"manifest.json": "30fd03e9c6b89374400f85bc755af811",
"version.json": "5d9730e01b5806eb5738e286ab10d7a5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
