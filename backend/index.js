const express = require('express')
const http = require('http');
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send('Hello from Express!')
})

app.get('/payment', (request, response) => {

  // An object of options to indicate where to post to
    var post_options = {
        host: 'localhost',
        port: '9001',
        path: '/payment/api/process',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // Set up the request
    var post_req = http.request(post_options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            response.send(chunk)
        });
    });

    // post the data
    post_req.write("hello");
    post_req.end();

})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})