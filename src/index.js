const core = require('@actions/core');
const github = require('@actions/github');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const template = require('./template.js');

async function run() {
  try {
    const payload = github.context.payload;
    console.log(`The event payload: ${JSON.stringify(payload, undefined, 2)}`);

    const card = template.getJsonCard(payload);
  
    const xhr = new XMLHttpRequest();
    xhr.open("POST", process.env.WEBHOOK_URL);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(card));
  
  } catch (error) {
    core.setFailed(error.message);
  }
}

run()