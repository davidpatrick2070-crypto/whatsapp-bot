const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', message => {
    if(message.body === 'hi'){
        message.reply('Hello bro 👋');
    }

    if(message.body === 'help'){
        message.reply('Commands: hi, help');
    }
});

client.initialize();
