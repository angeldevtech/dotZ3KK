const Discord = require('discord.js');

const client = new Discord.Client();

const PREFIX = '!';

client.once('ready', () => {
    console.log('dotZ3KK is online!');
});

client.on("message", message => {

    let args = message.content.substring(PREFIX.length).split(" ");
    const maki = client.users.cache.get('630468869365956608');

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
            message.channel.send(`¿Qué fue ${maki}?`);
            break;
        case 'mariano':
            message.channel.send(`${maki} el come-platanos salvaje`);
            break;
        case 'info':
            if( args[1] === 'version' ){
                message.channel.send("Esta es la version 1.0.0, ojalá me mejoren UwU");
            } else
            if( args[1] === 'autor' ){
                const user = client.users.cache.get('513487188759937025');
                message.channel.send(`Es ${user}`);
            } else {
                message.reply('Ups! Necesitas decirme que info deseas. ¡No seas Lápiz!');
            }
            break;
        case 'clearm':
            if( !args[1] ) return message.reply('Ups! Necesitas decirme cuantos mensajes debo eliminar. ¡No seas Lápiz!');
            var bulkDelete = parseInt(args[1])+1;
            message.channel.bulkDelete(bulkDelete);
            break;
        case 'Tongo':
            message.channel.send("Le Tonge! \n https://tobienlatele.files.wordpress.com/2017/02/img_4365.png");
            break;
    }

});

client.login(process.env.token);