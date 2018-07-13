import Discord = require('discord.js');
import * as lodash from 'lodash';
import Commando = require('discord.js-commando');

/**
 * This is the main class that connects the bot to the discord server
 */
export class Takobot {
    private token: string;

    constructor() {
        this.token = "NDY3MDcyMzQwNDMwMTU5OTEy.DilTgQ.UJq0RD8fiyJCLtq1NQf9jtpEBYY";

    }

    public start() {
        const bot = new Commando.CommandoClient()
        console.log("--Takobot is running--");

        bot.registry.registerGroup('random', 'Random');
        bot.registry.registerDefaults();
        bot.registry.registerCommandsIn( __dirname + "/commands");

        // bot.on('message',(message) => {
        //     if (message.content == "ping") {
        //         message.reply("pong");
        //     }
        // });
        bot.login(this.token);
    }

}
