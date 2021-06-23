import format from "https://deno.land/x/date_fns@v2.22.1/format/index.js";
addEventListener("fetch", (event: any) => {
	const d = format(new Date(), "yyyy-MM-dd", null);
	event.respondWith(new Response(`current Date is ${d}`));
});
