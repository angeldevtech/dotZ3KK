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
        case 'pelado':
            message.channel.send("¿Qué fue @Maki?");
            break;
        case 'version':
            message.channel.send("Esta es la version 1.0.0, ojalá me mejoren UwU");
            break;
        case 'author':
            const user = client.users.cache.get('513487188759937025');
            message.channel.send(`Es ${user}`);
            break;
        case 'clear':
            if( !args[1] ) return message.reply('Ups! Necesitas decirme cuantos mensajes debo eliminar. ¡Lápiz!')
            message.channel.bulkDelete(args[1]+1);
            break;
    }

});

client.login(process.env.token);