const Discord = require('discord.js');

const client = new Discord.Client();

const PREFIX = '!';

client.once('ready', () => {
    console.log('dotZ3KK is online!');
});

client.on("message", message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'cpp':
            message.channel.send("¿Qué fue loco?¿Por qué eres un CPP?");
            break;
        case 'version':
            message.channel.send("Esta es la version 1.0.0, ojalá me mejoren UwU");
            break;
        case 'author':
            message.channel.send("@dotGlass");
            break;
    }

});

client.login(process.env.token);