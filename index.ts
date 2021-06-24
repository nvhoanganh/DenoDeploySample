import format from "https://deno.land/x/date_fns@v2.22.1/format/index.js";
addEventListener("fetch", (event: any) => {
	event.respondWith(
		new Response(
			JSON.stringify({
				currentDate: format(new Date(), "yyyy-MM-dd", null),
			}),
			{
				headers: {
					"content-type": "application/json; charset=UTF-8",
				},
			}
		)
	);
});
