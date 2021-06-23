addEventListener("fetch", (event) => {
  event.respondWith(new Response("This is pure JS"));
});