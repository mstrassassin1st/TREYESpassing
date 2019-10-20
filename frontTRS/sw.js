// importScripts('/workbox');
const staticAssets = [
    '/',
    'stylesheet/bootstrap.min.css',
    'script/index.js',
    'script/jquery-3.4.1.min.js',
    'video/group_walking.mp4'
];

// const wb = new WorkboxSW();
// wb.precache(staticAssets);

self.addEventListener('install', async event => {    //install service worker if there are updates
    const cache = await caches.open('TREYESpassing');
    cache.addAll(staticAssets);
});
