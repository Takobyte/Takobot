import Discord = require('discord.js');

/**
 * This is the main class that connects the bot to the discord server
 */
export default class Takobot {
    private token: string;

    constructor() {
        this.token = "NDY3MDcyMzQwNDMwMTU5OTEy.DilTgQ.UJq0RD8fiyJCLtq1NQf9jtpEBYY";
    }

    public start() {
        const bot = new Discord.Client();
        console.log("--Takobot is running--");

        bot.on('message',(message) => {
            if (message.content == "ping") {
                message.reply("1. pong");
            }
        });
        bot.login(this.token);
    }

}
