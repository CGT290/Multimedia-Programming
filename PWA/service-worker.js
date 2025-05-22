const cacheName = 'animal-learning-v1';
const staticAssets = [
    'index.html',
    'style.css',
    'script.js',
    'data.json',
    'images/cheetah.jpg',
    'audio/cheetah.mp3',
    "images/elephant.jpg",
    "audio/elephant.mp3",
    "images/gorilla.jpg",
    "audio/gorilla.mp3",
    "images/wolf.jpg",
    "audio/wolf.mp3",
    "images/bear.jpg",
    "audio/grizzly.mp3",
    "images/tiger.jpg",
    "audio/Tiger.mp3",
    "images/beigePyton.jpg",
    "audio/tigerPytonHissing.mp3",
    "images/sea_turtle.jpg",
    "audio/turtle-breathing-sound.mp3",
    "images/rhino.jpg",
    "audio/rhinoRunning.mp3",
    "images/great_white_shark.jpg",
];

self.addEventListener('install', async event => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    event.respondWith(cacheFirst(event.request));
});

async function cacheFirst(request) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || fetch(request);
}