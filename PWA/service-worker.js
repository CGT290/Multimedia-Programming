const cacheName = 'animal-learning-v1';
const staticAssets = [
    'index.html',
    'style.css',
    'script.js',
    'data.json',
    'Images/cheetah.jpg',
    'audio/cheetah.mp3',
    "Images/elephant.jpg",
    "audio/elephant.mp3",
    "Images/gorilla.jpg",
    "audio/gorilla.mp3",
    "Images/wolf.jpg",
    "audio/wolf.mp3",
    "Images/bear.jpg",
    "audio/grizzly.mp3",
    "Images/tiger.jpg",
    "audio/Tiger.mp3",
    "Images/beigePyton.jpg",
    "audio/tigerPytonHissing.mp3",
    "Images/sea_turtle.jpg",
    "audio/turtle-breathing-sound.mp3",
    "Images/rhino.jpg",
    "audio/rhinoRunning.mp3",
    "Images/great_white_shark.jpg",
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