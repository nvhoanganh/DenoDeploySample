addEventListener("fetch", (event: any) => {
  event.respondWith(new Response("This direct typescript file"));
});