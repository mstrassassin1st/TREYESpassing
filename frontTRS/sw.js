// importScripts('/workbox');
const staticAssets = [
    '/',
    'stylesheet/bootstrap.min.css',
    'script/index.js',
    'script/jquery-3.4.1.min.js',
    'script/scripts.js',
    'video/group_walking.mp4'
];

// const wb = new WorkboxSW();
// wb.precache(staticAssets);

self.addEventListener('install', async event => {    //install service worker if there are updates
    const cache = await caches.open('ladang-curhat');
    cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {    //download contents that need to be cached if there are updates
    const req = event.request;
    const url = new URL(req.url);

    if(url.origin === location.origin){
        event.respondWith(cacheFirst(req));
    } else{
        event.respondWith(networkFirst(req));
    }
});

async function cacheFirst(req){          //returns shell
    const cachedresponse = await caches.match(req);
    return cachedresponse || fetch(req);
}

async function networkFirst(req) {       //returns content, and returns a fallback if the content is not located in cache
    const cache = await caches.open('chat-dynamic');
    try {
        const res = await fetch(req);
        cache.put(req, res.clone());
        return res;
    } catch (error) {
        const cachedresponse = await cache.match(req);
        return cachedresponse || await caches.match('./fallback.json')
    }
}