var request = require('request');

var url = 'https://status.github.com/api/v2/status.json';

request({
	url: url,
	json: true
}, function (error, response, body) {

	if (!error && response.statusCode === 200) {

		if (body.status.indicator == 'none') {
			console.log("✅ Everything operating normally.");
			console.log("Last Updated: " + body.page.updated_at);
		}

		else {
			console.log("⚙️ Something is wrong!");
			console.log("Last Updated: " + body.page.updated_at);
		}
	}
});


