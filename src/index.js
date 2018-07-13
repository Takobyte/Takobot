"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is the main class that runs with the node command to initialize and start the bot
 */
const takobot_1 = require("./takobot");
const bot = new takobot_1.Takobot();
bot.start();
console.log("Initializing Takobot");
// const initBot = new InitBot();
// initBot.init();
