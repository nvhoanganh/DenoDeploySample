addEventListener("fetch", (event) => {
	const data = {
		lightSpeed: [
			{
				Date: "2021-05-01 08:43",
				Type: "CreditCard",
				Amount: "1.00",
				Name: "Antony",
				ID: "2",
			},
		],
		taro: [
			{
				["Date & time"]: "01/05/2021 08:43:40",
				Type: "CreditCard",
				Sale: "1.00",
				["Transaction ref"]: "343430",
			},
			{
				["Date & time"]: "01/05/2021 08:43:20",
				Type: "CreditCard",
				Sale: "1.00",
				["Transaction ref"]: "9999",
			},
			{
				["Date & time"]: "01/05/2021 08:43:00",
				Type: "CreditCard",
				Sale: "1.00",
				["Transaction ref"]: "11111",
			},
		],
  };
  
	event.respondWith(
		new Response(JSON.stringify(data), {
			headers: {
				"content-type": "application/json; charset=UTF-8",
			},
		})
	);
});
