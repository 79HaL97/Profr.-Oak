const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

let prefix = config.prefix;

client.on("ready", () => {
    console.log("A darle.");
 });

  client.on("message", (message) => {
    if(message.content.startsWith(prefix + "pvp")) {
      message.channel.send("Ahí te va el enlace: https://pokemongohub.net/post/pvp/pvp-move-stats-in-pokemon-go/");
    }else

    if(message.content.startsWith(prefix + "incursiones")){
        message.channel.send("Ahí te va el enlace: https://thesilphroad.com/raid-bosses")
    }else

    if(message.content.startsWith("Y Ale?")){
        message.channel.send("La mordió Einy.")
    }
  
  });
  
  client.login(process.env.BOT_TOKEN);
