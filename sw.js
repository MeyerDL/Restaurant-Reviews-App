console.log("Service worked registered");

 // list of cached files

 const cachedFiles = [ // array of file path strings that our app uses/requests
   '/',
   '/index.html',
   '/restaurant.html',
   '/css/styles.css',
   '/js/main.js',
   '/js/restaurant_info.js',
   '/js/dbhelper.js',
   '/data/restaurants.json',
   '/img/1.jpg',
   '/img/2.jpg',
   '/img/3.jpg',
   '/img/4.jpg',
   '/img/5.jpg',
   '/img/6.jpg',
   '/img/7.jpg',
   '/img/8.jpg',
   '/img/9.jpg',
   '/img/10.jpg'
 ];

 // Listening for install event
 // We can listen for this event using a normal event listener on the service worker itself, using “self”
 self.addEventListener('install', function(event) { // When our service worker is registered, an installation event is fired
   event.waitUntil( // add “cacheFiles” to the cache // Use the waitUntil method to wait until the installation event is complete
     caches.open('cache-v1').then(function(cache) { // Open the caches object matching a cache name
       return cache.addAll(cachedFiles); // returns a promise which we can chain with a function that returns the adding of our cacheFiles
     })
   );
 });

 //listening for fetch event
 self.addEventListener('fetch', function(event) { // Use the respondWith method to prevent the default fetch event and provide it a promise
   event.respondWith(
     caches.match(event.request).then(function(response) { // Use the match method to determine if the event request url already exists within the cache we loaded back in the installation. 
       if (response) { // chain the then method to receive a promise // if and else statements - whether or not the cache match was successful
         console.log('Found ', event.request, ' in cache'); // If true, the request already exist within the cache and return it
         return response; // Here we’re checking if we get back a response from the match query
       } else {
         console.log('Could not find ', event.request, ' in cache, fetching!'); // If false, the request doesn’t exist within the cache, so we fetch the item like normal
         return fetch(event.request)
           .then(function(response) { // not only fetch the request, but also add it to the cache for later
             const clonedResponse = response.clone(); // chaining the then method which takes the response from the fetch
             caches.open('cache-v1').then(function(cache) {
               cache.put(event.request, clonedResponse); // open our cache and use the put method to pair the request with a response
             })
             return response; // return the response back to the fetch
           })
           .catch(function(error) {
             console.log(error); // add a catch method to log any potential errors
           });
       }
     })
   );
 });