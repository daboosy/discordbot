const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});




client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", message => {
  if (message.content === "1") {
    message.channel.send("2");
    message.channel.sendFile("");
  }
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", message => {
  if (message.content === "1") {
    message.channel.send("2");
    message.channel.sendFile("");
  }
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", message => {
  if (message.content === "1") {
    message.channel.send("2");
    message.channel.sendFile("");
  }
});

client.on("message", message => {
  let args = message.content.split(" ");
 if (args[0].toLowerCase() === `${prefix}avatar`) {
  let member = message.mentions.users.first();
  if(args[0] && !args[1]) {
    const emb = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setColor("#51545b")
    .setTitle("Avatar Link")
    .setURL(`${message.author.avatarURL}`)
    .setImage(`${message.author.avatarURL}`)
.setFooter("Requested by" + message.author.tag, message.author.avatarURL)
     message.channel.sendEmbed(emb);
  }
  if(member) {
      const embed = new Discord.RichEmbed()
      .setAuthor(member.tag, member.avatarURL)
      .setColor("#51545b")
      .setTitle("Avatar Link")
      .setURL(`${member.avatarURL}`)
      .setImage(`${member.avatarURL}`)
      .setFooter("Requested by" + message.author.tag, message.author.avatarURL);
     message.channel.sendEmbed(embed);
     }else if(args[1] && !member) {
          client.fetchUser(args[1]).then(user => {
    const embed = new Discord.RichEmbed()
      .setAuthor(user.tag, user.avatarURL)
      .setColor("#51545b")
      .setTitle("Avatar Link")
      .setURL(`${user.avatarURL}`)
      .setImage(`${user.avatarURL}`)
      .setFooter("Requested by" + message.author.tag, message.author.avatarURL);
     message.channel.sendEmbed(embed);
  })
    }
  }
});

client.on("message", message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
    if (message.author.bot) return;
    if (!message.channel.guild)
      return message.reply("** cmd l servers**");

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (message.mentions.users.size < 1) return message.reply("**tagi l3abed **");
    if (!reason) return message.reply("**ekteb sbab tared**");
    if (!message.guild.member(user).kickable)
      return message.reply(
        "**najmch ntared wehed ando role a3la meny**"
      );
    if (
      message.mentions.members.first().highestRole.position >=
      message.member.highestRole.position
    )
      return message.channel.send("tnajmch tared wehed ando role a9wa menk!");

    message.guild.member(user).kick();

    const kickembed = new Discord.RichEmbed()
      .setAuthor(`KICKED!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**ly tahchelou:**", "**[ " + `${user.tag}` + " ]**")
      .addField("**ly tardou:**", "**[ " + `${message.author.tag}` + " ]**")
      .addField("**sbab:**", "**[ " + `${reason}` + " ]**");
    message.channel.send({
      embed: kickembed
    });
  }
});

