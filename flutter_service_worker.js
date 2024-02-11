'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f2f43598425351e9f8ad38fef569861d",
".git/config": "ed7ea669564f40ae2d5c836fbad6b4de",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "745a5c6d7bf48443eb2de6207c7cd12b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e8ecae349bcf861ec9727eceb3524c5c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5eea5163f54db78b96b5de4cfd447572",
".git/logs/refs/heads/main": "018f99a95f7a8084849fb21d17c30166",
".git/logs/refs/remotes/origin/HEAD": "078fe3fde18ebae7438931eee7291546",
".git/logs/refs/remotes/origin/main": "d172a4cee87fde3143a78e393c2bb016",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/7687f29fcd92a330aa86014ae8393c50d81fcc": "5c4d350020d5639c39627c15f1007df9",
".git/objects/0a/e7c3004d242e444c3ad1fcb92a7bb86ed522c3": "8586e6e643937b7ff7f5701545d52e72",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/12/19f4f4a6fcfb4963553696aa127a66c2b42a84": "9ba11e098fb6bd55c712edde4e666d9c",
".git/objects/12/b324626e9edf91fa953925bc3203bf4db9ca52": "3ddec0599bc8843e4d4875261f5ebba5",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/533ecadad10eb3ab8fe900b6cde7b365276ad8": "9de407abd60031eee8fdd448e92c0758",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2e/3218895f70b0f7ee16ed3b7952b7cca0daa2dc": "1b78ebf9fc478c1d7ba47f92678807cf",
".git/objects/2e/e3b1e31aa86dcad5e116ecdde88ab6ad055c6d": "2a2b21d6df9ee657a028f2cc24895c7c",
".git/objects/30/af74fef94d9aeccae4f0141c39cf4be36b02d8": "f6776d6f82a6562d6afc561b78c8b273",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/958363f08dc71ecefbf0df970c9700f751577b": "4b078870d14732e7627fce971ab0a364",
".git/objects/3d/78134501e478335dd333793c5caaf7cb92fa05": "e08010da00451d0cffe1e57e83d04ed4",
".git/objects/40/1c0ea4f530feaefbc8bee29bd4005d9b11f0dd": "da6bd9a454dc404a16cef6bf4e8e8d26",
".git/objects/43/d2f7ce864e1cc0ccce26b39f7c7c54d9aa6ffd": "fb0844f994e9cdba453eec7dd6014d83",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/599a0f9dbb4fdcbaaf650de1e7339ae16fb61a": "5fee34a48d5a180539140171682a6d6b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/8fa9ed0d2cefad7b9badc50557de9037354ef0": "c7a832f6766ba7ce0ad1128f516837a8",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/4f/f21c9bd0916f8c70dba61ca6b25d633b0281d8": "c45a9c3dfbb6f5cfcea3929d9d5a20bc",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/59/507ab0c65d401efb27d39bbfa8731647ef84fc": "c56e486d36829a6e5b16164e943db102",
".git/objects/59/bfa59bd4d390a5482ff4fcf81f3f30996cfc77": "5fa0e0f148bd702687ee344b32c3fc3c",
".git/objects/64/dd637d5c4d9093996481806e7223cf13009108": "cce09353c88e2a8af6d903cd8c577ae6",
".git/objects/69/9aac6442b7d3e76f1748fd30809a0127235451": "35bb773081b7e7c40efcfe52537f8daa",
".git/objects/69/b9b725456e4addcb7ec2f56415ae709e090ab1": "b9c0e5230c28e35267ad2d63a414f6e1",
".git/objects/6a/3dffe7f90fbcd4e65841c178eed2071111b844": "2411df20e661bee8ccfdcef36fbc5e9e",
".git/objects/6b/9c6e9503702dcb4268ede774135af63e0ee72a": "42c7e4c2e5134c4f2b5d24d64281ffad",
".git/objects/6f/a8b55a680dcb2bcc306b20929d0d9621e30809": "56b8719df15afc9e5af159ff07ac42c1",
".git/objects/70/ac7742a4b5b2b1b689577e3279bab69dcf9345": "f344715dfca0080718a8b08b8b80abf4",
".git/objects/75/367c9f8ab1b922afd0f9d6684a4dbaa5df4350": "ce21e6e3237c9991a317f943d92e158d",
".git/objects/7d/9cf05d060e0c04e38909ab7448c4c16618fde8": "9398b08fe17293c008a99d4d34a4c51c",
".git/objects/83/1e14726195c7923947dc520fa03d4f8f5adce0": "58c69e3e8a1e42f26f229f2063444b42",
".git/objects/88/401091b4714e477b3923d056c8156516cb6087": "3dc3a15acccc214d3725c09afc4a9e0d",
".git/objects/89/8a644888dfa71c55e5d6b2c356b69411994579": "2415c4034cf88ba3b0b10e771b06bfba",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/90/547980c90701d0dd033a25a5249947f4da6dcf": "a59e744e73a14455690d6f8006c935ec",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/97/a1f59cf2f425db098354412bf35ac469ee8010": "e0d093b9c7974e6db1a2d3aef4dc2aac",
".git/objects/9c/78a93b25e9ea78e763d07ad690a7787adb7860": "37957955e6f4a0973d7d116c84bf71f7",
".git/objects/aa/e93718617adfe0e13dce0882dbc881f4165988": "b7b1981e2258ed3ca1720022d1c3fda2",
".git/objects/ac/82bb35966f49c94a7fd09eb963f2a5bbfa88af": "667d1fb485d8cfb534211988a044d3b9",
".git/objects/b1/38e76076a435455013c5e0aa71932a8b8aca85": "5fed3372d3aa970465e6b8dedc3781d1",
".git/objects/b6/ef81a172478065cb2c2a0584dd38e21f79414d": "8a5cc4216e65b856eba9405ca59b9927",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/be/6eb20260e6f880939d560524140d5c98566607": "d54cd38bcb0d689f4bce8be275563e30",
".git/objects/be/ae484fa14373cc8f6606ad213e70518d9c9c7f": "d510ddcf00707ceeb8170e5de8f88f10",
".git/objects/c5/a11b922b75a3f30d86c8d2ee9426f9201ed67d": "6cd66041a8786e63d3fa6e2b0b5cbdb6",
".git/objects/cb/db390571160b77db7ce6899ff4902e3076aacd": "345481d3bf12de58c6f9763356d4ee9d",
".git/objects/d3/ba557638af96d953e7df849e7b89193c95420d": "6bde13ee1bc3f29f482aa04d43c62e1d",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/a200e5f6e6da6d6e08474abb0bea93cebf8ad6": "ebca10c434d40193998637211f3bf635",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e1/83333bdb51512fc8b99d81f7031f80031a4b10": "ba7004bd3b66bb2a32d01fff485487fc",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/c7390c60fa53db0a4cbc195f4e094f3f9badec": "d60dfbfe46509578bcc62bafca22babb",
".git/objects/ef/c43ba9c7b2d7f92a721b957324af33053db2f7": "2eef99f462bacd82d397e48821f7c2f5",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/77bdc8d973c37711305f3cdefc2e606fdf6cf7": "a5ad069312631e3b81e50960e6fca45b",
".git/objects/fe/86b5148f67cdb7dbe29e47ae3e4a63d4a5794b": "7faf02b8b59b9e5571a9fa944a59df1f",
".git/objects/ff/9ddc26dc2b14817d5057abf678add36ac6b5a2": "8d55398a1762de5690987711cc2847d6",
".git/objects/ff/aa7d94b07115995cac1b496042bb3d71a37c66": "9faa9061fc0ded14f329f1fc40bd54ad",
".git/refs/heads/main": "90fcc024cad9118377bdac9e2d152acb",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "90fcc024cad9118377bdac9e2d152acb",
"assets/AssetManifest.bin": "62ad1988410c2ea1cd6aab28fcfe5baf",
"assets/AssetManifest.bin.json": "1a88c60597c2c73a086a3cda610c0171",
"assets/AssetManifest.json": "0f981de6d4767f130dc212bfb3bf2bda",
"assets/assets/after.png": "92723bc2e03296bb3d97627c22b27d5b",
"assets/assets/BackgroundImage.png": "0e06030c752a26cd3b7533c877573a1b",
"assets/assets/before.png": "8caab85f3f5d29b9cd5a43fd68d75f29",
"assets/assets/car_logo.png": "cb8e53435f5aa25fe6a906cba000b0b4",
"assets/assets/ceramic.png": "1b3538af81e16614a82873af106d6a4f",
"assets/assets/contactus_image.png": "377a824d9fe8b8ea62bfd867d050eb9b",
"assets/assets/four.png": "3fa9b14f872e5432352d9165d38133a7",
"assets/assets/headlight.png": "37ca3aed78c7710798e70a4783cd5a42",
"assets/assets/interior.png": "058d55456c8b574294d657731111fbcf",
"assets/assets/logo.png": "375f9ab10d54d2bb02c1f95924464f4b",
"assets/assets/one.png": "6d71cb01376373d4a8ba3287c1908025",
"assets/assets/polimer.png": "bbdf9d691f555aa1db1bb0f1f2be314e",
"assets/assets/ppf.png": "dd10790e995053fe4ccd07a57e72a0e2",
"assets/assets/three.png": "4ad41d482e80533177969281093ee1ba",
"assets/assets/two.png": "cf1d2403b0d148b3950964ff8c05d026",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "7424a5b24ab747e93170e774c5fb5cdf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon-16x16.png": "3d6776358d1349d8300df8fff7bae35d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/android-chrome-192x192.png": "281272a8d9ca63ca5f61996410808b82",
"icons/android-chrome-512x512.png": "0c94b9a0d262460f4db6a6585ab49cc1",
"icons/apple-touch-icon.png": "acd9da60eb146e8ec8cdd5faceb9b345",
"icons/favicon-32x32.png": "83f51292ab9a2382dabbd01330e4299f",
"icons/favicon.ico": "322bf03f76bfd13abc5e4f05bae425a4",
"index.html": "3d9575d2618f06ffe53645decc5a7694",
"/": "3d9575d2618f06ffe53645decc5a7694",
"logo.png": "375f9ab10d54d2bb02c1f95924464f4b",
"main.dart.js": "93f6cd83b54bac742efac820f77ba5d3",
"manifest.json": "0c06f2f9e5c0c9eeb2eec8068ab2aef5",
"README.md": "b8ae89b2cce75d3469d91f11f1cb8a03",
"version.json": "b66d32d8ee29b90bb6f0872bcb95d6f3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
