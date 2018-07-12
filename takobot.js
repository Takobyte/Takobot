"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Discord = require("discord.js");
/**
 * This is the main class that connects the bot to the discord server
 */
var Takobot = /** @class */ (function () {
    function Takobot() {
        this.token = "NDY3MDcyMzQwNDMwMTU5OTEy.DilTgQ.UJq0RD8fiyJCLtq1NQf9jtpEBYY";
    }
    Takobot.prototype.start = function () {
        var bot = new Discord.Client();
        console.log("--Takobot is running--");
        bot.on('message', function (message) {
            if (message.content == "ping") {
                message.reply("1. pong");
            }
        });
        bot.login(this.token);
    };
    return Takobot;
}());
exports.default = Takobot;
