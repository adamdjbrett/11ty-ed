export default {
	projectName: "11ty Ed.",
	description: "an 11ty theme for minimal editions",
	shortName: "11ty Ed",
	domain:
		process.env.ELEVENTY_RUN_MODE == "serve" ? "http://localhost:8080" : "https://ed.000000076.xyz/",
	robots: "index, follow",
	themeColor: "#FFFFFF",
	backgroundColor: "#FFFFFF",
	author: {
		name: "Alex Gil",
		email: "author@email.com",
	},
	identity: [
		{
			rel: "me",
			url: "https://www.elotroalex.com/",
		},
	],
	og: {
		locale: "en_US",
		type: "website",
		image: {
			rel: "/og-default.jpg",
			alt: "Default OG image displayed here",
		},
	},
};
