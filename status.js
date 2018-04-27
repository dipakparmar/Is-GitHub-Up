var request = require('request');

var url = 'https://status.github.com/api/status.json';


request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        
			if(body.status=='good'){
			console.log("Everything operating normally.");
			console.log("Last Updated: "+body.last_updated);
			}
			
			else if(body.status=='minor'){
				console.log("Some minor issues, effecting the server.");
				console.log("Last Updated: "+body.last_updated);
			}
			else{
			console.log("Server is Down.");
			console.log("Last Updated: "+body.last_updated);
			}
    }
});


