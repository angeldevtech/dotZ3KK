const Discord = require('discord.js');
const {AudioManager} = require('discordaudio');

const client = new Discord.Client({intents: [discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES, discord.Intents.FLAGS.GUILD_VOICE_STATES]});

const PREFIX = '!';

const connections = new Map();

const audioManager = new AudioManager();

client.once('ready', () => {
    console.log('dotZ3KK is online!');
});

client.on("messageCreate", message => {

    if (!message.content.startsWith(PREFIX)) return;

    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const maki = client.users.cache.get('630468869365956608');

    const zimages = [
        "https://i.imgur.com/Dczwgqf.png",
        "https://i.imgur.com/3Kyzog2.png",
        "https://i.imgur.com/nKMeKhR.png",
        "https://i.imgur.com/NQtQibx.png",
        "https://i.imgur.com/ey8fcNe.jpg",
        "https://i.imgur.com/XRowHgc.png"];
    const volandoImages = [
        "https://media.giphy.com/media/msriR5ybSpQgo/giphy.gif",
        "https://media.giphy.com/media/1L5YuA6wpKkNO/giphy.gif",
        "https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"];

    const vc = connections.get(message.guild.me.voice.channel?.id);

    switch(command){
        case 'cpp':
            if( args[0] != null ){
                var userMention = message.mentions.users.first();
                message.channel.send(`¿${userMention} qué fue loco?¿Por qué eres un CPP?`);
            }else{
                message.reply("¿Qué fue loco?¿Por qué eres un CPP?");
            }
            break;
        case 'bingo':
            message.reply(`Nos invita a ver BingoHot \n https://pbs.twimg.com/media/Efpgv02XoAIxUTH.jpg`);
            break;
        case 'pelado':
            message.channel.send(`¿Qué fuentes pelado?`);
            break;
        case 'mariano':
            message.channel.send(`el come-platanos salvaje \n https://i.imgur.com/QAZPHRY.png`);
            break;
        case 'mariana':
            message.channel.send(`https://i.imgur.com/duEEVjD.jpg`);
            break;
        case '._.':
            message.channel.send(`https://i.imgur.com/GVXb4QM.jpg`);
            break;
        case 'zzz':
            var c = Math.floor(Math.random()*zimages.length);
            message.channel.send('zZz zZz \n'+ zimages[c]);
            break;
        case 'info':
            if( args[0] === 'version' ){
                message.channel.send("Esta es la version 1.0.1, NiceTry");
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
        case 'volando':
            var v = Math.floor(Math.random()*volandoImages.length);
            if( args[0] != null ){
                message.channel.send("¡Mi causa "+args[0]+" está volando! \n"+volandoImages[v]);
            }else{
                message.channel.send(volandoImages[v]);
            }
            break;
        case 'avengers':
            message.channel.send("https://i.imgur.com/1fYWHwv.gif");
            break;
        case '420':
            message.channel.send("https://hips.hearstapps.com/esq.h-cdn.co/assets/cm/15/06/54d415b549709_-_weed3.gif");
            break;
        case 'comediante':
            message.channel.send("Uy! Un comediante \n https://i.imgur.com/8k37Zt9.jpg");
            break;
        case 'fzazo':
            if( args[0] != null ){
                message.channel.send("F por "+args[0]+"\n https://k62.kn3.net/taringa/E/6/8/D/6/7/FernandoTedesco/550x366_AC6.jpg");
            }else{
                message.channel.send("https://k62.kn3.net/taringa/E/6/8/D/6/7/FernandoTedesco/550x366_AC6.jpg");
            }
            break;
        case 'then':
            const textThen = message.content.slice(6);
            message.channel.send("https://textoverimage.moesif.com/image?image_url=https%3A%2F%2Fi.imgur.com%2FZdiRBOg.png&text=text&"+textThen+"_size=128&y_align=bottom&x_align=center")    
    }

});

client.login(process.env.token);