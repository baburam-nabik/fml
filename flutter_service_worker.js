'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0a731229578ff83cd447e6e388f3fa6f",
"version.json": "8bb3d0449b0bd3376a3c2ca930f02c17",
"index.html": "f1a0ea09387dec8eb1af161551e552b9",
"/": "f1a0ea09387dec8eb1af161551e552b9",
"vercel.json": "6c6876b1fa886e0d872e0f07dd9afcbc",
"firebase-messaging-sw.js": "789c6db27de6fdac512c0bdab1a51fb4",
"main.dart.js": "74f77fa7ea2fa0b68fa9860f80c04b15",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "011ee1d47d25b5b68aeda9153a9b8103",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5b60432e3d064922cf5a7555f0256638",
"assets/AssetManifest.json": "cc30ab35fe93edec027b9351e24a3fd1",
"assets/NOTICES": "7b69abef8c9dcfaf477620bb3a67f247",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "810d34bd8b653bb6e886a7addab80b7b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "a3e6b8054ae18b19d9d852da861aca5d",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3f86bcbd5000af52c2d3e373e57de8f1",
"assets/fonts/MaterialIcons-Regular.otf": "9317adb70d47008c23a4c0b89394a994",
"assets/assets/images/soups.png": "b41222c93e01d2e0719966768639aae7",
"assets/assets/images/user_profile.png": "5c5e1b05d1b8d11d2f4be15d51f36ce3",
"assets/assets/images/homescreendrink.jpeg": "2444405537984553236d52b823ae5837",
"assets/assets/images/BANNER1%25201.png": "bdb2ff27c6243131ab8a56636f8ff040",
"assets/assets/images/restaurant.svg": "593156c724f867147cfbedf854339580",
"assets/assets/images/glasses_image.png": "d6c071c3a75bc8b50f69c6417bf2db41",
"assets/assets/images/book.png": "827aa06efc97de671c22c68bcde71c4b",
"assets/assets/images/home.svg": "b7b5fc399496346c3e8583226a80c673",
"assets/assets/images/fml%2520icon.png": "9d7e6ae0d95f028a8b5f9b1dcef52b33",
"assets/assets/images/logout.svg": "2d78b9c0c136028e9648958161618447",
"assets/assets/images/food_notification.png": "d6b35523d4b619dc1d5916ce091d5be6",
"assets/assets/images/order_food.jpeg": "4f6176e3f00e4eb3e218cc8dcdd8f8d9",
"assets/assets/images/Notification%2520screen.%2520image.png": "5e2ac319e733b9ae35a1b7cf6c882fdf",
"assets/assets/images/group_add.png": "3df12fc97e5ceb77722661dfa10d372b",
"assets/assets/images/Image%2520Placed.png": "ebd2851da1eab6b989d40fd60c41f867",
"assets/assets/images/banner2.png": "766836895f6b18bcfd6f4d02648897a6",
"assets/assets/images/searchicon.svg": "919bc2bcc4fdcba53202bf72bb44f214",
"assets/assets/images/banner3.png": "722b15e998a5279d96fae748e8a6575b",
"assets/assets/images/map.png": "d49e6e2f32aaee6756a5b200c19ebe20",
"assets/assets/images/BANNER2%25202.png": "94ef88f52621da2baa54364df417cc47",
"assets/assets/images/Download%2520Icon.png": "50ebb2ef75b9ad1b6c9f779f8271fde4",
"assets/assets/images/drniks.png": "c688ee4ca41516fdf36e58abebc377a5",
"assets/assets/images/outlet_banner.png": "a94560e2cd2c87dd9677043372a6b48b",
"assets/assets/images/home.png": "68fda1a4d7a76c660bcfa3ada2225f90",
"assets/assets/images/default_food.png": "670ff5c67600ef852ef08ac25414bbbd",
"assets/assets/images/account_circle.svg": "f62a198f3a076abde56c8d7a26a8c564",
"assets/assets/images/BANNER3%25203.png": "0223f82be4890591bb807910e6707071",
"assets/assets/images/salads.png": "f862b2f1ede8f6bd755d3223e2ea2735",
"assets/assets/images/Bg%25202.png": "c726f5bc7748bce90440f517618cd14a",
"assets/assets/images/invite_friends.png": "fa76516978644ce1ef00118a0b70f271",
"assets/assets/images/SplashScreen.gif": "4f3b86c12c0a50222ec6ca5db84d7088",
"assets/assets/images/qrcode%25201.png": "1e88fd9c8102d844d7a86c6688701ee8",
"assets/assets/images/Bg%25203.png": "da2aae3225e5cf2af2a116412135523e",
"assets/assets/images/bg%25201.png": "55c7556b5426331ae01475aa5e5f5708",
"assets/assets/images/sell.svg": "f1095da2f0ca7ed40224c3f5bf99e799",
"assets/assets/images/profile_pic.png": "7ce5606f5b3907462c2175f4482fe5b1",
"assets/assets/images/fml%2520icomm%25203.png": "f49a9f60d9b530df3dc1f9751ad0d448",
"assets/assets/images/arrow-left.png": "cebd89b3bbd0ec322297322fd8992f17",
"assets/assets/images/Image%2520Ennroute.png": "b6c7b66ea4d60d8758e8fed1dff7a5da",
"assets/assets/images/location_icon.png": "a9a962936136d1264e3ef12cd2d0210e",
"assets/assets/images/Image%2520sent.png": "c8c795c6eae4f6c807dbc984c276ad11",
"assets/assets/images/appicon.png": "86344b0a071b5612e712a1ebe6679c5a",
"assets/assets/images/outletimg.png": "4ba1f44edee22f24bf91040fac19d428",
"assets/assets/images/frame.svg": "a251cf30917f9592561ab52f968b7f78",
"assets/assets/images/delete.svg": "fa90850f319f43af682b7f2334823b20",
"assets/assets/images/largebeer.png": "6909f95428821367027da32f023772a5",
"assets/assets/images/My%2520Order%2520Screen.png": "3a3a767744801033b3d5b622784d5f6b",
"assets/assets/images/location.svg": "95050fc19cdac5ecebb5b299e543bfd6",
"assets/assets/images/Offfer%2520screen%2520Image.png": "c523ca564a3591c178f816cbc64d7746",
"assets/assets/images/jagar.png": "9b65fda2adcb50979b1923029fabaefc",
"assets/assets/images/veg.png": "9778e84eafff2f322a39a3bc101dc49b",
"assets/assets/images/registrationscreenimg.png": "a00704ecf7a198d108934e3214cd0f3a",
"assets/assets/images/food_menu.svg": "91e0e19014d7e2ef44cfd87c94296d02",
"assets/assets/images/loginscreen.png": "057f70c29ca6bc021d1e2db8b589b285",
"assets/assets/images/notifications.svg": "ab29846cac0145d2f4a480c2fd37d123",
"assets/assets/images/notification.png": "a66433ef15c79bddceced28138595777",
"assets/assets/images/SayajirajePark.png": "f90c56ae7d05e73a83ff53e75e22b7ea",
"assets/assets/images/default_drink.png": "616ce0ade1c6c3c6fe9a2ffeb3407e5d",
"assets/assets/images/clipboard-text.svg": "e36c6373c86c33e5e258950732666d18",
"assets/assets/images/fml_splash.gif": "c978947c0a43a259dbff103a67038379",
"assets/assets/logo/logo.png": "de64f260770bcf2bf29947c5eebde27c",
"assets/assets/logo/fml_logo_960_640_WB.png": "e034392473705f9b05bd57ff31b5e90b",
"assets/assets/logo/splash_logo.png": "cf0335631510aaa9a89807b0ec1cb287",
"assets/assets/map_style.json": "dedc67640c6771ad269b5275c0672b78",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
