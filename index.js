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
            if( args[1] != null ){
                var userMention = message.mentions.users.first();
                message.channel.send(`¿${userMention} qué fue loco?¿Por qué eres un CPP?`);
            }else{
                message.reply("¿ qué fue loco?¿Por qué eres un CPP?");
            }
            break;
        case 'pelado':
            const maki = client.users.cache.get('630468869365956608');
            message.channel.send(`¿Qué fue ${user}?`);
            break;
        case 'info':
            if( args[1] === 'version' ){
                message.channel.send("Esta es la version 1.0.0, ojalá me mejoren UwU");
            } else
            if( args[1] === 'autor' ){
                const user = client.users.cache.get('513487188759937025');
                message.channel.send(`Es ${user}`);
            } else {
                message.reply('Ups! Necesitas decirme que info deseas. ¡Lápiz!');
            }
            break;
        case 'clear':
            if( !args[1] ) return message.reply('Ups! Necesitas decirme cuantos mensajes debo eliminar. ¡Lápiz!');
            var bulkDelete = parseInt(args[1])+1;
            message.channel.bulkDelete(bulkDelete);
            break;
    }

});

client.login(process.env.token);