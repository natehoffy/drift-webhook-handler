const async = require('async')
const bodyParser = require('body-parser')
const moment = require('moment');
const config = require('../conf'); // constants file
const database = require('../db/db.js'); // database operations

/**
 * Manages a conversation queue and executes a single async thread to process
 * the queue whenever a conversation is added to the queue
 */

// Creating a queue with concurrency of 1
const q = async.queue((task, callback) => {
    processTask(task);
    callback();
}, 1);

function addToQueue(payload) {
    q.push(payload);
}

// Process the queue task
// 1. Retrieve the conversationId from the payload
// 2. Queries the database to get the last convo performed time and auth keys for the convoId
// 3. Performs CDC for all the subscribed entities using the lastCDCTime retrieved in step 2
// 4.  Updates the database record with the last CDC performed time for the realmId - time when step 3 was performed

function processTask(task) {

    console.log('Processing a task in the queue.')

    const data = JSON.parse(task);

    console.log(data);
}