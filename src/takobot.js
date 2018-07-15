"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Commando = require("discord.js-commando");
const BotConfig = require('../src/bot-config.json');
/**
 * This is the main class that connects the bot to the discord server
 */
class Takobot {
    constructor() {
        this.token = BotConfig.token;
    }
    start() {
        const bot = new Commando.CommandoClient();
        console.log("--Takobot is running--");
        bot.registry.registerGroup('random', 'Random');
        bot.registry.registerDefaults();
        bot.registry.registerCommandsIn(__dirname + "/commands");
        // bot.on('message',(message) => {
        //     if (message.content == "ping") {
        //         message.reply("pong");
        //     }
        // });
        // bot.user.setUsername(BotConfig.userName);
        // bot.user.setAvatar()
        bot.login(this.token);
    }
}
exports.Takobot = Takobot;
