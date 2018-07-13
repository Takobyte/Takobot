"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Commando = require("discord.js-commando");
/**
 * This is the main class that connects the bot to the discord server
 */
class Takobot {
    constructor() {
        this.token = "NDY3MDcyMzQwNDMwMTU5OTEy.DilTgQ.UJq0RD8fiyJCLtq1NQf9jtpEBYY";
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
        bot.login(this.token);
    }
}
exports.Takobot = Takobot;
