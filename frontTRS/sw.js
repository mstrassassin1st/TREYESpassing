const staticAssets = [
    '/',
    'stylesheet/bootstrap.min.css',
    'script/index.js',
    'script/jquery-3.4.1.min.js',
    'script/promise-7.0.4.min.js',
    'video/group_walking.mp4'
];

self.addEventListener('install', async event => {   
    const cache = await caches.open('TREYESpassing');
    cache.addAll(staticAssets);
});
