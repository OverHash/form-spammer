const request = require('request');
const googleFormSend = require('google-form-send');

const config = require('./config.json');

async function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

/* create form */
const form = new googleFormSend(`https://docs.google.com/forms/d/e/${config.formId}`)
for (k in config.formData) {
	form.addField(k, config.formData[k])
}

/* verify not over 10/sec */
if (1000/config.amountPerSecond < 100) {
	config.amountPerSecond = 100;
	console.warn('WARN! Automatically reduced amount per second to 10 to avoid google blocking IP')
}

async function sendForm() {
	form.send(true);
	await sleep(1000/config.amountPerSecond);
}

/* send requests */
const forLoop = async _ => {
	for (k = 0; k < config.sendAmount; k++) {
		await sendForm();
		console.log('sent form response ' + (k+1) + '/' + config.sendAmount);
	}
}

forLoop();