const Discord = require('discord.js'); 
const client = new Discord.Client();

client.on('ready', () => {
  const statuses = [
  "NITRO GENERATOR",
    "USE :  .nitro",
    "Hiz0x"
    ]; 
    setInterval(() => {
        const status = statuses[Math.floor(Math.random() * statuses.length)]; 
        client.user.setActivity(status, {
  type: "STREAMING",
  url: "https://www.twitch.tv/leakzone"
}); 
    }, 30); 
});

client.login("tkn");

client.on('message', message => { 
    function nitrocode(length, letter) {

var multiplier = '';
if (letter.indexOf('0') > -1) multiplier += '0123456789';
if (letter.indexOf('A') > -1) multiplier += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
if (letter.indexOf('a') > -1) multiplier += 'abcdefghijklmnopqrstuvwxyz';
var results = '';


for (var i = length; i > 0; --i) 
{
results += multiplier[Math.floor(Math.random() * multiplier.length)];

}

return results;

}
if(message.content.startsWith(".nitro")){
    const genEmbed = new Discord.RichEmbed()
        .setColor('#000')
        .setThumbnail(client.user.displayAvatarURL)
        .addField("**Your discord nitro gift** !", "|| https:/"+"/discord.gift/" + nitrocode(16,'0aA') +" ||")
    message.channel.type === ("dm") + message.author.send(genEmbed);
    message.channel.sendMessage("**You Received Your Gift In Dm** :white_check_mark:");
    }
});
