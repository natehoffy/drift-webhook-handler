const TOKEN = process.env.AUTH_TOKEN // only necessary if you're sending data back to the APIs
const queue = require('../queue/queue');

const appRouter = function (app) {

    app.get('/api', function (req, res) {
        return res.send("Welcome to the Drift Webhook Handler, Node.js Version")
    })

    // POST request to our /api endpoint (to signal we got the webhook)

    app.post('/webhook', (req, res) => {

        var payload = JSON.stringify(req.body)

        if (!payload) {
            return res.status(200).send('success');
        } else {

            // add to queue
            queue.addToQueue(payload);
            console.log('Conversation added to queue.');
            return res.status(200).send('success')

        }

    })

};
module.exports = appRouter;