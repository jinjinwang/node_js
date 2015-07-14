// app.js
var http = require('http');
http.createServer(function(req, res){
	res.writeHead(200, {'content-type': 'text/html'});
	res.write('<h1>Node.js</h1>');
	res.end('<p>Hello world!</p>');
}).listen(3000);
console.log('Http Server is listening at port 3000.');