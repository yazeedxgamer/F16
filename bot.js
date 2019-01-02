const Discord = require('discord.js');
const { Client, Util } = require('discord.js');
const client = new Discord.Client();
const { PREFIX, GOOGLE_API_KEY } = require('./config');
const prefix = '*'
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube(GOOGLE_API_KEY);
const queue = new Map();
const moment = require('moment');
const fs = require("fs");
const credits = JSON.parse(fs.readFileSync("./creditsCode.json", "utf8"));
const coolDown = new Set();
const db = require('quick.db')
const ms = require('ms')
const bot = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`*help | *inv  `,"https://www.twitch.tv/7alabygamer98")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



client.on('message', message => {
        if (message.content.startsWith(prefix + "uptime")) {
    let ms = client.uptime;
    let cd = 24 * 60 * 60 * 1000; // Calc days
    let ch = 60 * 60 * 1000; // Calc hours
    let cm = 60 * 1000; // Calc minutes
    let cs = 1000; // Calc seconds
    let days = Math.floor(ms / cd);
    let dms = days * cd; // Days, in ms
    let hours = Math.floor((ms - dms) / ch);
    let hms = hours * ch; // Hours, in ms
    let minutes = Math.floor((ms - dms - hms) / cm);
    let mms = minutes * cm; // Minutes, in ms
    let seconds = Math.round((ms - dms - hms - mms) / cs);
    if (seconds === 60) {
        minutes++; // Increase by 1
        seconds = 0;
    }
    if (minutes === 60) {
        hours++; // Inc by 1
        minutes = 0;
    }
    if (hours === 24) {
        days++; // Increase by 1
        hours = 0;
    }
    let dateStrings = [];

    if (days === 1) {
        dateStrings.push('**1** day');
    } else if (days > 1) {
        dateStrings.push('**' + String(days) + '** days');
    }

    if (hours === 1) {
        dateStrings.push('**1** hour');
    } else if (hours > 1) {
        dateStrings.push('**' + String(hours) + '** hours');
    }

    if (minutes === 1) {
        dateStrings.push('**1** minute');
    } else if (minutes > 1) {
        dateStrings.push('**' + String(minutes) + '** minutes');
    }

    if (seconds === 1) {
        dateStrings.push('**1** second');
    } else if (seconds > 1) {
        dateStrings.push('**' + String(seconds) + '** seconds');
    }

    let dateString = '';
    for (let i = 0; i < dateStrings.length - 1; i++) {
        dateString += dateStrings[i];
        dateString += ', ';
    }
    if (dateStrings.length >= 2) {
        dateString = dateString.slice(0, dateString.length - 2) + dateString.slice(dateString.length - 1);
        dateString += 'and ';
    }
    dateString += dateStrings[dateStrings.length - 1];
    message.channel.send(dateString);
}
});


client.on('message', message => {
  
if (message.content.startsWith(prefix + 'perm')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)
                  message.channel.send({embed:zPeRms});

    }
});


client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

	






client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "own") {


 message.author.sendMessage(`
 
 __~~Bot Staff~~__
??
 __Powered By__: ! AK ƦØĊƘĒŦMĀƝ#8193
Server Support : https://discord.gg/b6nQBC2
`);

message.channel.send('**تم الارسال في الخاص**');

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "invite") {


 message.author.sendMessage(`
 
بامكانك دعوة البوت من هنا
***bot invite link:https://discordapp.com/api/oauth2/authorize?client_id=449945015490445325&permissions=8&scope=bot***
Server Support :https://discord.gg/Zk8kGPn

`);

message.channel.send('**تم الارسال في الخاص**');

    }
});



            client.on('message', message => {
                 var prefix = "*";
                if(message.content === prefix + "inv") {
                    let embed = new Discord.RichEmbed ()
                    embed.setTitle("**:arrow_right: Click To Invite Star Bot :arrow_left:**")
                    .setURL("https://discordapp.com/oauth2/authorize?client_id=449945015490445325&permissions=8&scope=bot");
                   message.channel.sendEmbed(embed);
                  }
});






client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });


client.on('message', message => {
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**.bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .addField('** الـسيرفر**', `${message.guild.name}`,true)
                .addField(' **الـمرسل **', `${message.author.username}#${message.author.discriminator}`,true)
                .addField(' **الرسالة** ', args)
                .setThumbnail(message.guild.iconURL)
                .setColor('RANDOM')
                m.send(`${m}`,{embed: bc});
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle('?? | جاري ارسال رسالتك ') 
            .addBlankField(true)
            .addField('?? | عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
            .addField('??| الرسالة ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
});








client.on("message", message => {    
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === "*ser-av"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`صورة ** ${message.guild.name} **`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor('RANDOM')
    .setImage(message.guild.iconURL)

   message.channel.send({embed});
      }
  });


client.on('message', message => {
            if (message.content.startsWith(prefix + "bot")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' السيرفرات🌐',`[${client.guilds.size}]  `)
.addField(' الاعضاء👥 ',` [${client.users.size}] `)
.addField('الرومات📚 ',`[${client.channels.size}]`) 
.addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`) 
.addField('مصمم  + صاحب البوت ',`ROCKETMAN#8511`)
.setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});    
            
	     
client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='*member')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle('??| Members info')
      .addBlankField(true)
      .addField('??| Online',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('??| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('??| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField('??| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('?| Server Members',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
	
    });





client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)
});

client.on('message', message => {
    var prefix = "*"
    if (message.content === prefix + "date") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }
});

  
client.on("message", (message) => {
if (message.content.startsWith("*ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});


client.on("message", (message) => {
if (message.content.startsWith("*cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});

      client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('*ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
                    });

client.on('message', message => {
    if (message.content.startsWith("*avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});





client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`عضو جديد`)
    .setDescription(`اهلا بك في السيرفر`)
    .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter('Star Bot', '')

var channel =member.guild.channels.find('name', 'welcome')
if (!channel) return;
channel.send({embed : embed});
});






client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`خرج عضو`)
    .setDescription(`الى اللقاء...`)
    .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('RED')
    .setFooter(`Star Bot`, '')

var channel =member.guild.channels.find('name', 'welcome')
if (!channel) return;
channel.send({embed : embed});
});



	  client.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find("name","welcome");//اسم الشات الترحيبي
      if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let norelden = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:norelden});


      }
      });





client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Member"));
    }); 






client.on("message", msg => {
  if(msg.content === '*' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField(":trident:|Username", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField(":id:|iD", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':name_badge:|Status', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField(':game_die:|Playing', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField(':medal:|Roles', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField(':name_badge:|Discriminator', `${msg.discriminator}`, true)
          .addField(':date:|Created At', `${msg.createdAt}`,true)
          .addField(':robot:|Bot', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});







  client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})
  



client.on('message' , message => {
     if (message.content === prefix + "servers") {

if(!message.channel.guild) return;
  if(message.content < 1023) return
  const Embed11 = new Discord.RichEmbed()
.setAuthor(client.user.username,client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setDescription(`***مجموع السيرفرات ${client.guilds.size} \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join('\n')}***`)
         message.channel.sendEmbed(Embed11)
    }
});




client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});
  

client.on('message', async message => {
var prefix = "*";
  if(message.content.startsWith(prefix + "اقتراح")) {
  await  message.channel.send(`اكتب اقتراحك الان`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`تم حفظ اقتراحك الرجاء انتضار الرد من قبل الاداره`)
                client.channels.get("471341711369437184").send(`${message.author.username}'s sug => ${text}`)

              })
            }
          })
  
 
  client.on('message', message => {
          

           if (message.content.startsWith(prefix + "user")) {
                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
 .setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)

.setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  
    message.channel.sendEmbed(id);
})
}
    

         
     });




  client.on('message', message => {
    if(message.content.startsWith(prefix + 'move all')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


     }
       });



  client.on('message', msg => {//msg
    if (msg.content === 'السلام عليكم') {
      msg.channel.send({file : "http://buildmylabel.com/wp-content/uploads/2015/11/welcome.jpg"})
    }
  });;

  client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
               let mmmmEmbed = new Discord.RichEmbed()
                         .setAuthor(client.user.username)
                         .setThumbnail(message.author.avatarURL)
 .addField(` لقد قمت بدعوة :`, ` ${inviteCount} `)
           .setFooter(`- Requested By: ${message.author.tag}`);
           message.channel.send(mmmmEmbed)
});
  }
});



  client.on('message', ReBeeL => {
  var prefix = "*";
    if(ReBeeL.author.bot) return;
      if(ReBeeL.content.startsWith(prefix + "bcowner")) {
        let args = ReBeeL.content.split(" ").slice(1);
           if(!args[0]) {
              ReBeeL.channel.send("** -bcowner <message> **")
                return;
                  }      
                   var rebel = new Discord.RichEmbed()
                      .setColor("#000000")
                        .setDescription(`
تم إرسآل لك رسآلة من السيرفر الخاص بك 
${ReBeeL.guild.name}
الرسآلة 
${args}
        `)
        .setFooter(` بوآسطة ${ReBeeL.author.username}#${ReBeeL.author.discriminator}`)
       ReBeeL.guild.owner.send(rebel);
      ReBeeL.channel.send("**تم إرسآل الرسآلة إلى أونر السيرفر**")
     }
    }
  );

client.on('message', message => {
            if (message.content.startsWith(prefix + "news")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     ** كود الجيف اوي*giveawy ** ' ,' *تم اضافة كود ** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});






  client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('*bcall')){
 if (message.author.id !== '448444251504640012') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '448444251504640012') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.on('message', msg => {
    if(msg.author.bot) return;
    
    if(msg.content === '*sr') {
      client.guilds.forEach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(i => msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id} 
        Owner ID : ${g.owner.id}
        **
        `))
  
  
      })
    }
    
  })


client.on('message', message => {
var prefix = "*";
if (message.content.startsWith(prefix + 'فكك')) { 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./fakk/fakk.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const answer = item.answer 
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه لتفكك الكلمه **').then(msg => {
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setFooter("فكك  | ! AK", 'https://cdn.discordapp.com/icons/449162478413152256/9fbcae4ee55b2627019eb0b1433f57fe.jpg')
    .setDescription(`**قم بكتابه الكلمه مفككه : ${item.type}**`)

    msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **الاجابه صحيحه**`); 

        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; 
            points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: **ماحد قال الاجابه الصحيحه**`);
            console.log(`[Typing] ماحد فكك الكلمه `);
          })
        })
    })
}
});



client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => console.log('Yo this ready!'));

// client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

// client.on('reconnecting', () => console.log('I am reconnecting now!'));

client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(PREFIX)) return undefined;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(PREFIX.length)

	if (command === `p`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('أنا آسف ولكن عليك أن تكون في قناة صوتية لتشغيل الموسيقى!');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('لا أستطيع أن أتكلم في هذه القناة الصوتية، تأكد من أن لدي الصلاحيات الازمة !');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('لا أستطيع أن أتكلم في هذه القناة الصوتية، تأكد من أن لدي الصلاحيات الازمة !');
		}
		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**لا يوجد لدي صلاحيات `EMBED LINKS`**")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(` **${playlist.title}** تم اضافة القائمه!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**اختار رقم المقطع** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)
					.setFooter("")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('لم يتم تحديد العدد لتشغيل الاغنيه.');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':X: لم أستطع الحصول على أية نتائج بحث.');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === `s`) {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing that I could skip for you.');
		serverQueue.connection.dispatcher.end('Skip command has been used!');
		return undefined;
	} else if (command === `stop`) {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing that I could stop for you.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		if (!args[1]) return msg.channel.send(`:loud_sound: Current volume is **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: الان يتم تشغيل: **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `q`) {
		
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		let index = 0;
		const embedqu = new Discord.RichEmbed()
	.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pa`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
		}
		return msg.channel.send('There is nothing playing.');
	} else if (command === "r") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
		}
		return msg.channel.send('لا يوجد شيء حالي في العمل.');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	
//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`I could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`بدء تشغيل: **${song.title}**`);
}

   client.on('message', message => {
     if (message.content === "رابط") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(' **https://discord.gg/Zk8kGPn** ')
  message.channel.sendEmbed(embed);
    }
});



client.on('message', message => {
	var prefix = "*"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

client.on('message', message => {
	var prefix = "*"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});





client.on('message', async message =>{
  if (message.author.boss) return;
	var prefix = "*";

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
${message.author.tag} تمت معاقبتك بواسطة
[ ${reason} ] : السبب
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
`)
		.setFooter(`في سيرفر : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});





 client.on('guildCreate', guild => {
         const embed = new Discord.RichEmbed()
     .setColor("RED")
     .setTitle('Click Here To Add Bot .!')
     .setURL('https://discordapp.com/api/oauth2/authorize?client_id=449945015490445325&permissions=8&scope=bot ')
  .setDescription(`**
  New Server Add star Bot ✅
اسم السيرفر: ${guild.name}
صاحب السيرفر: ${guild.owner}**`);
client.channels.get("473124667973173255").sendEmbed(embed)
});
var guilds = {};


client.on('guildDelete', guild => {
         const embed = new Discord.RichEmbed()
     .setColor("GOLD")
     .setTitle('Click Here To Add Bot .!')
     .setURL(' https://discordapp.com/api/oauth2/authorize?client_id=449945015490445325&permissions=8&scope=bot ')
  .setDescription(`**
  Server Kicked star Bot :cry:
اسم السيرفر: ${guild.name}
صاحب السيرفر: ${guild.owner}**`);
client.channels.get("473124667973173255").sendEmbed(embed)
});

    
     
client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) { /// This is The DMS Code Send The Help In DMS // Code By NotGucci
    let pages = [`
***__وصف عن البوت__***
**
:gem:  البوت فيه كثير ميزات حلوة و جميلة
 ا:rocket: البوت يعمل 24 ساعه 

**
        ***__General orders__***
**
『 *news ➾ وش انضاف اليوم』
『 *roll <number> ➾ قرعة』
『 *member ➾ معلومات الاعضاء』
『 *avatar ➾ شعار حسابك』
『 *ser-av ➾ شعار السيرفر』
『 *uptime ➾ مد�� التشغيل 』
『 *id ➾ اي دي』
『 *date ➾ التاريخ』
『 *user ➾ معلوماتك』
『 *own ➾ مسؤول البوت』
『 *ping ➾ عرض سرعه اتصال البوت』
『 *bot ➾ معلومات البوت』
『 *server ➾ معلومات السيرفر』
『 *inv ➾ رابط مباشر』
『 *invites ➾ لمعرفة كم دعوت』
『 *invs ➾ رابط دخول سيرفرك』
『 *color <number> ➾ لاختيار الون الي تبي موجود في السيرفر』
『 *colors ➾ لعرض الوان』
 『 *profile ➾ لعرض بروفايلك』

**
  `
,`
        ***__Administrative Orders__***
**
『 *ban  ➾ لطرد عضو』
『 *kick ➾لطرد عضو』
『 *mute ➾لسكات عضو』
『 *unmute ➾فك الاسكات』
『 *clear  ➾   مسح الشات بعدد』
『 *cv <name> ➾ صنع روم صوتية』
『 *ct <name> ➾ صنع روم كتابية』
『 *c-color <number> ➾ لصنع الوان』
『 * d-color ➾ حذف الوان』
『 *move all ➾ لسحب جميع الي في الروم اليك』
『 *bc <message> ➾ لارسال رسالة لجميع اعضاء السيرفر』
『 *bcall <message> ➾لصاحب البوت فقط』

   `,`
        ***__Music orders__***
**
『 *p ➾ لتشغيل أغنية برآبط أو بأسم』
『 *s ➾ لتجآوز الأغنية الحآلية』
『 *pa ➾ إيقآف الأغنية مؤقتا』
『 *r ➾ لموآصلة الإغنية بعد إيقآفهآ مؤقتا』
『 *vol ➾ لتغيير درجة الصوت 100 - 0』
『 *stop ➾ لإخرآج البوت من الروم』
『 *np ➾ لمعرفة الأغنية المشغلة حآليا』
『 *q ➾ لمعرفة قآئمة التشغيل』
**
        ***__Games orders__***
 **       

『 *لعبة فكك ➾ فكك』
『 *لعبة صراحة ➾ صراحة』
『 *لعبة حكم➾حكم 』

**
           ***__ orders__***
** 
1- يوجد هناك كود مانع النشر لما واحد ينشر يعطيه رتبت ميوت و لو مو موجوده البوت يسويها

2- Member البوت يعطي الشخص اول ما يدخل سيرفرك رتبت ممبر بس لازم تسوي رتبه اسمها


3- welcome اما الترحيب في روم في السيرفر لازم روم بإسم

4- اذا  تريد معرفة ماذا يحدث في السيرفر يرجى عمل روم باسم log
ban
delete roles
mute
unmute
oders


الشخص الي صنع البوت:ROCKETMAN#8511

سيرفر الدعم الفني الخاص بالبوت:https://discord.gg/Zk8kGPn

bot invite link: https://discordapp.com/api/oauth2/authorize?client_id=449945015490445325&permissions=8&scope=bot


`]
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.author.sendEmbed(embed).then(msg => {

        msg.react('◀').then( r => {
            msg.react('▶')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
      
      page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
}); 
client.on('message', message => {
     if (message.content === (prefix + "help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});





client.on('message', message => {
			  	var prefix = "*"
        if (message.content.startsWith(prefix + 'صراحة')) {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
         var client= new Discord.RichEmbed()
         .setTitle("Legend Brmoon.")
         .setColor('RANDOM')
         .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
         .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                         .setTimestamp()
       
          message.channel.sendEmbed(client);
          message.react("??")
        }
       });


const Sra7a = [
            'صراحه  |  صوتك حلوة؟',
            'صراحه  |  التقيت الناس مع وجوهين؟',
            'صراحه  |  شيء وكنت تحقق اللسان؟',
            'صراحه  |  أنا ��خص ضعيف عندما؟',
            'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
            'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
            'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
            'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
            'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
            'صراحه  |  أشجع شيء حلو في حياتك؟',
            'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
            'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
            'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
            'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
            'صراحه  |  نظرة و يفسد الصداقة؟',
            'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
            'صراحه  |  شخص معك بالحلوه والمُره؟',
            'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص ��م ترى ذلك ضعف؟',
            'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
            'صراحه  |  وش تتمنى الناس تعرف عليك؟',
            'صراحه  |  ابيع المجرة عشان؟',
            'صراحه  |  أحيانا احس ان الناس ، كمل؟',
            'صراحه  |  مع مين ودك تنام اليوم؟',
            'صراحه  |  صدفة العمر الحلوة هي اني؟',
            'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
            'صراحه  |  صفة تحبها في نفسك؟',
            'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
            'صراحه  |  تصلي صلواتك الخمس كلها؟',
            'صراحه  |  ‏تجامل أحد على راحتك؟',
            'صراحه  |  اشجع شيء سويتة بحياتك؟',
            'صراحه  |  وش ناوي تسوي اليوم؟',
            'صراحه  |  وش شعورك لما تشوف المطر؟',
            'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
            'صراحه  |  ما اكثر شي ندمن عليه؟',
            'صراحه  |  اي الدول تتمنى ان تزورها؟',
            'صراحه  |  متى اخر مره بكيت؟',
            'صراحه  |  تقيم حظك ؟ من عشره؟',
            'صراحه  |  هل تعتقد ان حظك سيئ؟',
            'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
            'صراحه  |  كلمة تود سماعها كل يوم؟',
            'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
            'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
            'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
            'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
            '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
            'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
            '‏صراحه | هل تحب عائلتك ام تكرههم؟',
            '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
            '‏صراحه  |  هل خجلت من نفسك من قبل؟',
            '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
            '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
            '‏صراحه  |  هل تعرضت إلى موقف مُ��رج جعلك تكره صاحبهُ؟',
             '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
            '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
            '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
            'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
            '‏صراحه  |  ما هو عمرك الحقيقي؟',
            '‏صراحه  |  ما اكثر شي ندمن عليه؟',
            'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
       ]
     
    




client.on('message', message => {
   var prefix = '*';
 if (message.content.startsWith(prefix + 'حكم')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة حكم ..")
  .setColor('RANDOM')
  .setDescription(`${kingmas[Math.floor(Math.random() * kingmas.length)]}`)
   message.channel.sendEmbed(mariam);
   message.react(":thinking:")
  }
});




const kingmas = [
   '*** منشن الجميع وقل انا اكرهكم. ***',
'*** اتصل على امك و قول لها انك تحبها :heart:. ***',
   '***     تصل على الوالده  و تقول لها  احب وحده.***',
   '*** تتصل على شرطي تقول له عندكم مطافي.***',
   '*** صور اي شيء يطلبه منك الاعبين.***',
   '*** اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص. ***',
   '*** اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك.***',
   '*** اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف.***',
   '***  تروح عند شخص تقول له احبك. ***',
   '***روح عند اي احد بالخاص و قول له انك تحبه و الخ.***',
   '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه. ***',
   '*** روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل. ***',
   '*** اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك. ***',
   '*** ذي المرة لك لا تعيدها.***',
   '*** ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام.***',
   '*** اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل..... ***',
   '*** تكلم باللهجة السودانية الين يجي دورك مرة ثانية.***',
   '***سو مشهد تمثيلي عن مصرية بتولد.***',
   '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية. ***',
   '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية.***',
   '*** سامحتك خلاص مافيه عقاب لك :slight_smile:. ***',
   '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه.***',
   '*** تتصل على الوالده  و تقول لها خطفت شخص. ***',
   '*** روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك.  ***'
]



client.on('message', message => {
    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return
	     if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '1')) return
      message.guild.createRole({
                  name: "1",
                    color: "#cf1111",
                    permissions: []
     })
	}
});
client.on('message', message => {
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '2')) return		 
      message.guild.createRole({
                  name: "2",
                    color: "#df5d11",
                    permissions: []
     })
	}
});
client.on('message', message => {
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '3')) return		 
      message.guild.createRole({
                  name: "3",
                    color: "#dfab11",
                    permissions: []
     })
	}
});
	client.on('message', message => {
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '4')) return		 
      message.guild.createRole({
                  name: "4",
                    color: "#dfde11",
                    permissions: []
     })
	}});	
	client.on('message', message => {
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return     
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '5')) return		 
      message.guild.createRole({
                  name: "5",
                    color: "#a8df11",
                    permissions: []
     })
	}});	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return      
		          if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '6')) return
      message.guild.createRole({
                  name: "6",
                    color: "#64c40c",
                    permissions: []
     })
	}});	
	client.on('message', message => {
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return     
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '7')) return		 
      message.guild.createRole({
                  name: "7",
                    color: "#38c30c",
                    permissions: []
     })
	}});	
	client.on('message', message => {
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '8')) return		 
      message.guild.createRole({
                  name: "8",
                    color: "#0cc33f",
                    permissions: []
     })
	}});	
client.on('message', message => {
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return      
		          if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '9')) return
      message.guild.createRole({
                  name: "9",
                    color: "#0cc36c",
                    permissions: []
     })
}});	
client.on('message', message => {
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '10')) return		 
      message.guild.createRole({
                  name: "10",
                    color: "#0cc394",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '11')) return		 
      message.guild.createRole({
                  name: "11",
                    color: "#0cc3ad",
                    permissions: []
     })
	}});	
client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '12')) return		 
      message.guild.createRole({
                  name: "12",
                    color: "#0cb1c3",
                    permissions: []
     })
}});	
client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return      
		          if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '13')) return
      message.guild.createRole({
                  name: "13",
                    color: "#0c9ec3",
                    permissions: []
     })
}});
client.on('message', message => {
	
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return      
		          if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '14')) return
      message.guild.createRole({
                  name: "14",
                    color: "#0c8ac3",
                    permissions: []
     })
}});
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
		          if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '15')) return
      message.guild.createRole({
                  name: "15",
                    color: "#0c6cc3",
                    permissions: []
     })
	}});
client.on('message', message => {
	
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '16')) return		 
      message.guild.createRole({
                  name: "16",
                    color: "#0c49c3",
                    permissions: []
     })
}});
client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '17')) return		 
      message.guild.createRole({
                  name: "17",
                    color: "#0c2bc3",
                    permissions: []
     })
}});
client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '18')) return		 
      message.guild.createRole({
                  name: "18",
                    color: "#150cc3",
                    permissions: []
     })
}});
	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return 
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '19')) return		 
      message.guild.createRole({
                  name: "19",
                    color: "#880cc3",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return      
		          if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '20')) return
      message.guild.createRole({
                  name: "20",
                    color: "#b50cc3",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '21')) return		 
      message.guild.createRole({
                  name: "21",
                    color: "#c30cb8",
                    permissions: []
     })
	}});	

client.on('message', message => {
	
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '22')) return		 
      message.guild.createRole({
                  name: "22",
                    color: "#c30c90",
                    permissions: []
     })
}});
	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '23')) return		 
      message.guild.createRole({
                  name: "23",
                    color: "#c30c63",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '24')) return		 
      message.guild.createRole({
                  name: "24",
                    color: "#c30c4a",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '25')) return		 
      message.guild.createRole({
                  name: "25",
                    color: "#c30c31",
                    permissions: []
     })
	}});	

	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return 
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '26')) return		 
      message.guild.createRole({
                  name: "26",
                    color: "#ff0000",
                    permissions: []
     })
	}});
	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '27')) return		 
      message.guild.createRole({
                  name: "27",
                    color: "#ff4200",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '28')) return		 
      message.guild.createRole({
                  name: "28",
                    color: "#ff6c00",
                    permissions: []
     })
		}});	
	
client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return     
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '29')) return		 
      message.guild.createRole({
                  name: "29",
                    color: "#ff8f00",
                    permissions: []
     })
}});	
	
client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return    
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '30')) return		 
      message.guild.createRole({
                  name: "30",
                    color: "#ffd400",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '31')) return		 
      message.guild.createRole({
                  name: "31",
                    color: "#e4ff00",
                    permissions: []
     })
	}});	
client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return    
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '32')) return		 
      message.guild.createRole({
                  name: "32",
                    color: "#adff00",
                    permissions: []
     })
}});	
client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '33')) return		 
      message.guild.createRole({
                  name: "33",
                    color: "#60ff00",
                    permissions: []
     })
}});	
	
client.on('message', message => {
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '34')) return		 
      message.guild.createRole({
                  name: "34",
                    color: "#14ff00",
                    permissions: []
     })
}});	
client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return      
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '35')) return		 
      message.guild.createRole({
                  name: "35",
                    color: "#00ff40",
                    permissions: []
     })
}});	
client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '36')) return		 
      message.guild.createRole({
                  name: "36",
                    color: "#00ff8c",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return
		          if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '37')) return
      message.guild.createRole({
                  name: "37",
                    color: "#00ffc4",
                    permissions: []
     })
	}});	
client.on('message', message => {
	
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '38')) return		 
      message.guild.createRole({
                  name: "38",
                    color: "#00e7ff",
                    permissions: []
     })
}});	
client.on('message', message => {
	
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return 
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '39')) return		 
      message.guild.createRole({
                  name: "39",
                    color: "#009aff",
                    permissions: []
     })
}});	
	
client.on('message', message => {
	
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '40')) return		 
      message.guild.createRole({
                  name: "40",
                    color: "#0055ff",
                    permissions: []
     })
}});	
client.on('message', message => {
	
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return     
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '41')) return		 
      message.guild.createRole({
                  name: "41",
                    color: "#0001ff",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return    
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '42')) return		 
      message.guild.createRole({
                  name: "42",
                    color: "#6700ff",
                    permissions: []
     })
	}});	
client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '43')) return		 
      message.guild.createRole({
                  name: "43",
                    color: "#ad00ff",
                    permissions: []
     })
	}});	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '44')) return		 
      message.guild.createRole({
                  name: "44",
                    color: "#dd00ff",
                    permissions: []
     })
	}});	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '45')) return		 
      message.guild.createRole({
                  name: "45",
                    color: "#ff00fe",
                    permissions: []
     })
	}});	
client.on('message', message => {
	
	   if(message.content === prefix + 'c-colors') {
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '46')) return		 
      message.guild.createRole({
                  name: "46",
                    color: "#ff00cd",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '47')) return		 
      message.guild.createRole({
                  name: "47",
                    color: "#ff0096",
                    permissions: []
     })
	}});	
client.on('message', message => {
	
	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return 
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '48')) return		 
      message.guild.createRole({
                  name: "48",
                    color: "#ff0057",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '49')) return		 
      message.guild.createRole({
                  name: "49",
                    color: "#ff002d",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'c-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  message.channel.send(`**:x: | ${message.author.username}  You Must Have The \`MANAGE_ROLES\` permission to create colors roles !**`)
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return message.channel.send(`**:x: | ${message.author.username}  I require the \`MANAGE_ROLES\` permission to create colors roles !**`)
         if(message.guild.roles.find('name', '50')) return  message.channel.send('**لا يمكن انشاء رتب الالوان مرتين | Colors roles can not be created twice **');		 
      message.guild.createRole({
                  name: "50",
                    color: "#050505",
                    permissions: []
     })
		
				
	           message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('GREEN')
	 .setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``I Creating Colors Just Wait | جاري العمل على الالوان``')
	 });
				
	
	}});
	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return  message.channel.send('**You Dont Have** `MANAGE_ROLES` **premission**').then(msg => msg.delete(6000))
		let role = message.guild.roles.find('name', '1');
		let rank = message.guild.roles.find('name', '1');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return 
		let role = message.guild.roles.find('name', '2');
		let rank = message.guild.roles.find('name', '2');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '3');
		let rank = message.guild.roles.find('name', '3');
    if (!rank) return  
		role.delete()
		}
	
	});
	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '4');
		let rank = message.guild.roles.find('name', '4');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '5');
		let rank = message.guild.roles.find('name', '5');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '6');
		let rank = message.guild.roles.find('name', '6');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '7');
		let rank = message.guild.roles.find('name', '7');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '8');
		let rank = message.guild.roles.find('name', '8');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '9');
		let rank = message.guild.roles.find('name', '9');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '10');
		let rank = message.guild.roles.find('name', '10');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '11');
		let rank = message.guild.roles.find('name', '11');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '12');
		let rank = message.guild.roles.find('name', '12');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '13');
		let rank = message.guild.roles.find('name', '13');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '14');
		let rank = message.guild.roles.find('name', '14');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '15');
		let rank = message.guild.roles.find('name', '15');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '16');
		let rank = message.guild.roles.find('name', '16');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '17');
		let rank = message.guild.roles.find('name', '17');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '18');
		let rank = message.guild.roles.find('name', '18');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '19');
		let rank = message.guild.roles.find('name', '19');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '20');
		let rank = message.guild.roles.find('name', '20');
    if (!rank) return  
		role.delete()
		}
	
	});
	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '21');
		let rank = message.guild.roles.find('name', '21');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '22');
		let rank = message.guild.roles.find('name', '22');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '23');
		let rank = message.guild.roles.find('name', '23');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '24');
		let rank = message.guild.roles.find('name', '24');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '25');
		let rank = message.guild.roles.find('name', '25');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '26');
		let rank = message.guild.roles.find('name', '26');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '27');
		let rank = message.guild.roles.find('name', '27');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '28');
		let rank = message.guild.roles.find('name', '28');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '29');
		let rank = message.guild.roles.find('name', '29');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '30');
		let rank = message.guild.roles.find('name', '30');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '31');
		let rank = message.guild.roles.find('name', '31');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '32');
		let rank = message.guild.roles.find('name', '32');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '33');
		let rank = message.guild.roles.find('name', '33');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '34');
		let rank = message.guild.roles.find('name', '34');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '35');
		let rank = message.guild.roles.find('name', '35');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '36');
		let rank = message.guild.roles.find('name', '36');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '37');
		let rank = message.guild.roles.find('name', '37');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '38');
		let rank = message.guild.roles.find('name', '38');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '39');
		let rank = message.guild.roles.find('name', '39');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '40');
		let rank = message.guild.roles.find('name', '40');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '41');
		let rank = message.guild.roles.find('name', '41');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '42');
		let rank = message.guild.roles.find('name', '42');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '43');
		let rank = message.guild.roles.find('name', '43');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '44');
		let rank = message.guild.roles.find('name', '44');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '45');
		let rank = message.guild.roles.find('name', '45');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '46');
		let rank = message.guild.roles.find('name', '46');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '47');
		let rank = message.guild.roles.find('name', '47');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '48');
		let rank = message.guild.roles.find('name', '48');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '49');
		let rank = message.guild.roles.find('name', '49');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"d-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '50');
		let rank = message.guild.roles.find('name', '50');
    if (!rank) return  message.channel.send('**I did not find colors roles | لم اجد رتب الالوان**');
		role.delete()
		
			message.channel.sendMessage({embed: new Discord.RichEmbed()
          .setColor('RED').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``I Deleting Colors Just Wait | جـاري حدف رتـب الالـوان``')});
	}
	});
   client.on('message',message => {
  if (message.content === prefix +'colors') {
      if (!message.channel.guild) return;
      if(!message.guild.member(client.user).hasPermission('ATTACH_FILES'))return message.reply("**I Don't Have Permission 'ATTACH_FILES' ليس لدي صلاحية")
    message.channel.sendFile('./colors1.png');
  }
	
});



client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == '*color'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**There's No Color With This Number ** :x: `)
   .setColor(`ff0000`)

    if(!isNaN(args) && args.length > 0)
    

if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                    
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Color Changed To Successfully** :white_check_mark: `)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
          
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
        
            
    }
});












  client.on("guildBanAdd", (guild, member) => {
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', 'log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor(exec)
        .setThumbnail(myUser.avatarURL)
        .addField('- Banned User:',`**${myUser.username}**`,true)
        .addField('- Banned By:',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});




client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = '!!';
     
    if(cmd === `${prefix}kick`) {

let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!kUser) return message.channel.send("Can't find user!");
let kReason = args.join(" ").slice(22);
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

let kickEmbed = new Discord.RichEmbed()
.setDescription("~Kick~")
.setColor("#e56b00")
.addField("Kicked User", `${kUser} with ID ${kUser.id}`)
.addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
.addField("Kicked In", message.channel)
.addField("Tiime", message.createdAt)
.addField("Reason", kReason);

let kickChannel = message.guild.channels.find(`name`, "log");
if(!kickChannel) return message.channel.send("Can't find incidents channel.");

message.guild.member(kUser).kick(kReason);
kickChannel.send(kickEmbed);
    }
});




 



//=================================== - [ Logs ] - ===================================\\





//----------------------------------- = [ Mute + Deafen ] = -----------------------------------\\

	  client.on('voiceStateUpdate', (oldM, newM) => {
  let m1 = oldM.serverMute;
  let m2 = newM.serverMute;
  let d1 = oldM.serverDeaf;
  let d2 = newM.serverDeaf;

  let ch = oldM.guild.channels.find('name', 'log')
  if(!ch) return;

    oldM.guild.fetchAuditLogs()
    .then(logs => {

      let user = logs.entries.first().executor.username

    if(m1 === false && m2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(` ${user} اخــذ مــيــوت صــوتــي بــواســطــه  ${newM} `)
       .setColor('#692500')
        .setTimestamp()
       ch.send(embed)
    }
    if(m1 === true && m2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(` ${user} فــك عــنــه  مــيــوت صــوتــي بــواســطــه  ${newM} `)
       .setColor('#ff8f00')
       .setTimestamp()
       ch.send(embed)
    }
    if(d1 === false && d2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(` ${user}  اخــذ ديــفــن صــوتــي بــواســطــه   ${newM}`)
       .setColor('#5c005e')
       .setTimestamp()

       ch.send(embed)
    }
    if(d1 === true && d2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(` ${user}  فــك عــنــه ديــفــن صــوتــي بــواســطــه   ${newM}`)
       .setColor('#ff00e8')
       .setTimestamp()

       ch.send(embed)
    }
  })
})
//----------------------------------- = [ Mute + Deafen ] = -----------------------------------\\





//----------------------------------- = [ Message ( Edit + Delete ) ] = -----------------------------------\\
client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
 
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
.setTitle('تعديل رسالة')
.addField(':الرسالة قبل التعديل',`${message.cleanContent}`)
.addField(':الرسالة بعد التعديل',`${newMessage.cleanContent}`)
.addField(':تم تعديل الرسالة في روم',`<#${message.channel.id}>`)
.addField(':تم التعديل بواسطة', `<@${message.author.id}> `)
.setColor('#0008ff')
       .setTimestamp();
     channel.send({embed:embed});
 
 
});

client.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
   
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
 .setTitle('مسح رسالة')
 .addField(':الرسالة',`${message.cleanContent}`)
 .addField(':تم مسح الرسالة في روم',`<#${message.channel.id}>`)
 .addField(':تم الحذف بواسطة', `<@${message.author.id}> `)
       .setColor('#000257')
       .setTimestamp();
     channel.send({embed:embed});
 
});
//----------------------------------- = [ Message ( Edit + Delete ) ] = -----------------------------------\\





//----------------------------------- = [ Role ( Create + Delete ) ] = -----------------------------------\\
client.on('roleCreate', role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {

          let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setTitle('إنشاء رتبة جديدة')
            .addField(':اسم الرتبة', role.name, true)
            .addField(':ايدي الرتبة', role.id, true)
            .addField(':لون الرتبة', role.hexColor, true)
            .addField(':تم إنشاء الرتبة بواسطة', exec, true)
            .setColor('#00fffc') 
            .setTimestamp()
            
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})



      client.on("roleDelete", role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {

          let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setColor('#005857')          
            .setTitle('مسح رتبة')
            .addField(':اسم الرتبة', role.name, true)
            .addField(':ايدي الرتبة', role.id, true)
            .addField(':لون الرتبة', role.hexColor, true)
            .addField(':تم حذف الرتبة بواسطة', exec, true)
            .setColor('#36393e') 
            .setTimestamp()
            
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})
//----------------------------------- = [ Role ( Create + Delete ) ] = -----------------------------------\\





//----------------------------------- = [ Ban + UnBan ] = -----------------------------------\\
  client.on("guildBanAdd", (guild, member) => {
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', 'log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor("حــظــر عــضــو")
        .setColor('#300001') 
        .setThumbnail(myUser.avatarURL)
        .addField(':اسم العضو',`**${myUser.username}**`,true)
        .addField(':تم الحضر بواسطة',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});

    client.on("guildBanRemove", (guild, member) => {
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', 'log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor("إزالة حضر عن عضو ")
        .setColor('#48ff00') 
		 .setThumbnail(myUser.avatarURL)
        .addField(':اسم العضو',`**${myUser.username}**`,true)
        .addField(':تم إزالة الحضر بواسطة',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});
//----------------------------------- = [ Ban + UnBan ] = -----------------------------------\\




//----------------------------------- = [ MemberAdd + MemberRemove ] = -----------------------------------\\


 client.on('guildMemberAdd', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;

    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.user.createdTimestamp).fromNow();
    const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';

    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
	   .setThumbnail(memberavatar)
       .setColor('GREEN')
       .setDescription(`📥 <@${member.user.id}> **Joined To The Server**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});

 client.on('guildMemberRemove', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;

    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.joinedTimestamp).fromNow();

    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
	   .setThumbnail(memberavatar)
       .setColor('RED')
       .setDescription(`📤 <@${member.user.id}> **Leave From Server**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});
//----------------------------------- = [ MemberAdd + MemberRemove ] = -----------------------------------\\




//=================================== - [ Logs ] - ===================================\\


































client.on('message', message => {
    if(message.content == (prefix + 'profile')) {    
 
             if (message.channel.type === 'dm') return message.reply('This Command Is Not Avaible In Dm\'s :x:');   
            var Canvas = module.require('canvas');
            var jimp = module.require('jimp');
    
     const w = ['./ID1.png', './ID2.png', './ID3.png', './ID4.png', './ID5.png',];
    
             let Image = Canvas.Image,
                 canvas = new Canvas(802, 404),
                 ctx = canvas.getContext('2d');
             ctx.patternQuality = 'bilinear';
             ctx.filter = 'bilinear';
             ctx.antialias = 'subpixel';
             ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
             ctx.shadowOffsetY = 2;
             ctx.shadowBlur = 2;
             fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                 if (err) return console.log(err);
                 let BG = Canvas.Image;
                 let ground = new Image;
                 ground.src = Background;
                 ctx.drawImage(ground, 0, 0, 802, 404);
    
     })
                                let user = message.mentions.users.first();
          var men = message.mentions.users.first();
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
           var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
             var ment = message.mentions.users.first();
             var getvalueof;
             if(ment) {
               getvalueof = ment;
             } else {
               getvalueof = message.author;
             }//ما خصك ,_,
                                           let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                                             jimp.read(url, (err, ava) => {
                                                 if (err) return console.log(err);
                                                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                     if (err) return console.log(err);
                            
                                                                                           //Avatar
                                                             let Avatar = Canvas.Image;
                                                             let ava = new Avatar;
                                                             ava.src = buf;
                                                             ctx.beginPath();
                                                           ctx.drawImage(ava, 320, 3, 160, 169);
                                                                            //wl
                                                     ctx.font = '35px Arial Bold';
                                                     ctx.fontSize = '40px';
                                                     ctx.fillStyle = "#dadada";
                                                     ctx.textAlign = "center";
                                                    
                            
                                                     ctx.font = '30px Arial Bold';//Name ,_,
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${getvalueof.username}`,655, 170);
                                                                            
                                                                        
                                                          moment.locale('en-us');        
                                            
                                            
                                                                    ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${moment(h.joinedAt).fromNow()}`,150, 305);
                                                              
                                                              
                                                                                                     ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                 ctx.fillText(`${moment(heg.createdTimestamp).fromNow()}`,150, 170); 
                            
                                                       let status;
     if (getvalueof.presence.status === 'online') {
         status = 'online';
     } else if (getvalueof.presence.status === 'dnd') {
         status = 'dnd';
     } else if (getvalueof.presence.status === 'idle') {
         status = 'idle';
     } else if (getvalueof.presence.status === 'offline') {
         status = 'offline';
     }
     
     
                                          ctx.cont = '35px Arial';
                                          ctx.fontSize = '30px';
                                          ctx.filleStyle = '#ffffff'
                                          ctx.fillText(`${status}`,655,305)
                  
                                                                   ctx.font = 'regular 30px Cairo';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                         ctx.fillText(`${h.presence.game === null ? "Don't Play" : h.presence.game.name}`,390,390);
                            
                               ctx.font = '35px Arial';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                                   ctx.fillText(`#${heg.discriminator}`,390,260)
                            
                                 ctx.beginPath();
                                 ctx.stroke();
                               message.channel.sendFile(canvas.toBuffer());
                            
                            
                          
                            
                             })
                            
                             })
 }
 });





client.on('message', message => {
		var prefix = "*"
	if (message.content === "sys") {
		      if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_ROLES ` **").then(msg => msg.delete(6000))

	              if(!message.channel.guild) return message.reply('** This command only for servers **');
	                         if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**أنت ليس لديك برمشن** `ADMINISTRATOR`' );
		          const embed = new Discord.RichEmbed()
		.setDescription('** __:ok_hand: running...to make roles | يتم الأن عمل الرتب__ **')
		.setColor('RANDOM')
		.setFooter("** R-Bot Build **")
	message.channel.sendEmbed(embed);
		   

  message.guild.createRole({
        name : "Owner",
        permissions :   [1],
        color : " #ffffff"
    })
    message.guild.createRole({
        name : "Co-Owner",
        permissions :   [1],
        color : " #ffffff"
    })
      message.guild.createRole({
        name : "Leader",
        permissions :   [1],
        color : " #ffffff"
    })
    message.guild.createRole({
        name : "Co-Leader",
        permissions :   [1],
        color : " #ffffff"
    })
  
     message.guild.createRole({
        name : "Admin",
        permissions :   [1],
        color : " #ffffff"
    })
    

  
    message.guild.createRole({
        name : "Mod",
        permissions :   [1],
        color : " #ffffff"
    })
    message.guild.createRole({
        name : "ＶＩＰ + ",
        permissions :   [1],
        color : " #ffffff"
    })
    message.guild.createRole({
        name : "ＶＩＰ",
        permissions :   [1],
        color : " #ffffff"
    })
    message.guild.createRole({
        name : "Support ",
        permissions :   [1],
        color : " #ffffff"
    })

  message.guild.createRole({
        name : "YouTuber+200",
        permissions :   [1],
        color : " #ffffff"
    })
   
    message.guild.createRole({
        name : "YouTuber",
        permissions :   [1],
        color : " #ffffff"
    })
    
      message.guild.createRole({
        name : "Pro Member☤",
        permissions :   [1],
        color : " #ffffff"
    })
    
          message.guild.createRole({
        name : "🌹「Friendly」",
        permissions :   [1],
        color : " #ffffff"
    })
  
 
    message.guild.createRole({
        name : "☤Member☤",
        permissions :   [1],
        color : " #ffffff"
    })
    
        message.guild.createRole({
        name : "Bot",
        permissions :   [1],
        color : " #ffffff"
    })
 
  console.log(`i make rools in this server: ** ${message.guild.name} ** `);
}
});




//Settings! // AlphaCodes
const yourID = "448444251504640012"; //Instructions on how to get this: https://redd.it/40zgse // AlphaCodes
const setupCMD = "*createrolemessage"
let initialMessage = `**React to the messages below to receive the associated role. If you would like to remove the role, simply remove your reaction!**`;
const roles = ["Hacker", "Artist", "Public Relations", "Intern"];
const reactions = ["ًں’»", "ًں–Œ", "ًںکƒ", "ًں†•"];
const botToken = "process.env.BOT_TOKEN"; /*You'll have to set this yourself; read more
                     here https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token*/
 
//Load up the bot... // AlphaCodes
bot.login(botToken);
 
//If there isn't a reaction for every role, scold the user! // AlphaCodes
if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";
 
//Function to generate the role messages, based on your settings // AlphaCodes
function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(`React below to get the **"${role}"** role!`); //DONT CHANGE THIS // AlphaCodes لا تغير الكلام الي هنا
    return messages;
}
 
 
bot.on("message", message => {
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                }
            });
        }
    }
})
 
 
bot.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
       
        let channel = bot.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
       
        if (msg.author.id == bot.user.id && msg.content != initialMessage){
       
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
       
            if (user.id != bot.user.id){
                var roleObj = msg.guild.roles.find('name', role);
                var memberObj = msg.guild.members.get(user.id);
               
                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj)
                } else {
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })
 
    }  
});

client.on('message',async message => {
  if(message.content.startsWith(prefix + "setVoice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(function() {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});







client.login(process.env.BOT_TOKEN);
