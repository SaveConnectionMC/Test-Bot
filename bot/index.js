const Discord = require("discord.js");
const config = require("./bot/config.json");
const embed = new Discord.RichEmbed();
const prefix = config.prefix;
const owner = config.owner;
const token = config.token;
const bot = new Discord.Client();

bot.on("ready", () =>{
  console.log("Gestartet");
  console.log("Prefix: " + `${prefix}`);
  
  bot.user.setStatus("dnd");
  
  
  setInterval(function(){
    
    let status = [`Auf ${bot.users.size} User!`, "Auf Github.com"];
    let chosen = status[Math.floor(Math.random() * status.length)];
    
    bot.user.setActivity(chosen, {type: "PLAYING"});
    
  }, 5000);
})

bot.on("message", msg =>{
  
  if(msg.channel.type === "dm") return;
  if(msg.author.bot) return;
  if(!msg.content.startsWith(prefix)) return;
  
  
bot.on('message', (msg) =>{
  if(msg.author.bot) return;
  if(msg.channel.name === "gitchat"){
    var embed = new Discord.RichEmbed()
    embed.setTitle(msg.author.tag)
    embed.setDescription(msg.content)
    embed.setFooter(msg.guild.name, msg.guild.iconURL)
    bot.channels.findALL("name", "gitchat").map(channel=>channel.send(embed))
  }
})
  
  
  let messageArray = msg.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
  
if(command == `${prefix}help`){
  msg.delete();
  msg.channel.send("Keine Hilfe verfügbar!");
};
if(command == `${prefix}helpchat`){
  msg.delete();
  var chatEmb = new Discord.RichEmbed()
  chatEmb.setTitle("Einen Chat namens:")
  chatEmb.setDescription("gitchat erstellen!")
  msg.channel.send(chatEmb);
};
  
if(command == `${prefix}checkperms`){
  msg.delete();
  if(!msg.member.permissions.has("MANAGE_MESSAGES")) return msg.reply("Du hast anscheinend nicht die benötigten Rechte!");
  msg.channel.send("Du hast die benötigten Rechte!");
};
  
if(command === `${prefix}mcserver`){
  var embed = new Discord.RichEmbed()
  pinger.ping(args[0], args[1], (error, result) => {
      if (error){ embed.setTitle("Fehler").setDescription("Server `"+args[0]+"` wurde nicht gefunden oder ist offline."); msg.channel.send(embed); return;}
      embed.setThumbnail("https://minotar.net/cube/Floxiii/150.png");
      embed.setTitle("ServerIP: "+args[0]);
      embed.setDescription(`Hier ist der Server ${args[0]}!`);
      embed.setColor('FF0000');
      embed.addField('ServerVersion:', result.version.name, true)
      embed.addField('Slots:', `${result.players.max}`, true)
      embed.addField('OnlineStats:', `${result.players.online} online\n`+
                                           `${result.players.max - result.players.online} Slots sind frei`);
      msg.channel.send(embed);
    })
}
  
});
bot.login(token);
