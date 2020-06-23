const Discord = require('discord.js');

const client = new Discord.Client();

const PREFIX = '!';

client.once('ready', () => {
    console.log('dotZ3KK is online!');
});

client.on("message", message => {

    if (!message.content.startsWith(PREFIX)) return;

    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const maki = client.users.cache.get('630468869365956608');

    const zimages = [
        "https://i.imgur.com/Dczwgqf.png",
        "https://i.imgur.com/3Kyzog2.png",
        "https://i.imgur.com/nKMeKhR.png",
        "https://i.imgur.com/NQtQibx.png",
        "https://i.imgur.com/XRowHgc.png"];

    switch(command){
        case 'cpp':
            if( args[0] != null ){
                var userMention = message.mentions.users.first();
                message.channel.send(`¿${userMention} qué fue loco?¿Por qué eres un CPP?`);
            }else{
                message.reply("¿Qué fue loco?¿Por qué eres un CPP?");
            }
            break;
        case 'pelado':
            message.channel.send(`¿Qué fue ${maki}?`);
            break;
        case 'mariano':
            message.channel.send(`${maki} el come-platanos salvaje \n https://i.imgur.com/QAZPHRY.png`);
            break;
        case 'zzz':
            var c = Math.floor(Math.random()*zimages.length);
            message.channel.send('zZz zZz \n'+ zimages[c]);
            break;
        case 'info':
            if( args[0] === 'version' ){
                message.channel.send("Esta es la version 1.0.0, ojalá me mejoren UwU");
            } else
            if( args[0] === 'autor' ){
                const user = client.users.cache.get('513487188759937025');
                message.channel.send(`Es ${user}`);
            } else {
                message.reply('Ups! Necesitas decirme que info deseas. ¡No seas Lápiz!');
            }
            break;
        case 'clearm':
            if( !args[0] ) return message.reply('Ups! Necesitas decirme cuantos mensajes debo eliminar. ¡No seas Lápiz!');
            var bulkDelete = parseInt(args[0])+1;
            message.channel.bulkDelete(bulkDelete);
            break;
        case 'tongo':
            message.channel.send("Le Tonge! \n https://tobienlatele.files.wordpress.com/2017/02/img_4365.png");
            break;
        case 'fsszazo':
            if( args[0] != null ){
                message.channel.send("F por "+args[0]+"\n https://k62.kn3.net/taringa/E/6/8/D/6/7/FernandoTedesco/550x366_AC6.jpg");
            }else{
                message.channel.send("https://k62.kn3.net/taringa/E/6/8/D/6/7/FernandoTedesco/550x366_AC6.jpg");
            }
            break;
            
    }

});

client.login(process.env.token);