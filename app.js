const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ngrok = require('ngrok')
const PORT = 4040
const routes = require('./routes/routes.js');

app.use(bodyParser.json());
app.listen(PORT, () => console.log(`Testing app listening on port ${PORT}!`))

// create external connection - I recommend commenting this out and install ngrok globally
// so the endpoint doesn't refresh every time you restart
ngrok.connect(PORT).then(url => console.log(`External Forwarding URL is: ${url}/api`))