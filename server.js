const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://NameProject.glitch.me/`);
}, 280000);
 
// ßá ÇáÈßÌÇÊ Çáí ããßä ÊÍÊÌåÇ Ýí Çí ÈæÊ
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
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
const math = require('math-expression-evaluator'); 
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(process.env.BOT_TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', moaz4k =>{
if(moaz4k.content === "hi") {
moaz4k.channel.send(`Hello How Are You Doing?`)
}

});

client.on('message', moaz4k =>{
if(moaz4k.content === "Hi") {
moaz4k.channel.send(`Hello How Are You Doing?`)
}

});

client.on('message', moaz4k =>{
if(moaz4k.content === "What is this server?") {
moaz4k.channel.send(`This is Valorant Server `)
}

});

client.on('message', moaz4k =>{
if(moaz4k.content === "what is this server?") {
moaz4k.channel.send(`This is Valorant Server `)
}

});

client.on('message', moaz4k =>{
if(moaz4k.content === "===") {
moaz4k.channel.send(`Kosom Suntox `)
}

});