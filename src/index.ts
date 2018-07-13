/**
 * This is the main class that runs with the node command to initialize and start the bot
 */
import { Takobot } from "./takobot";

const bot: Takobot = new Takobot();
bot.start();
console.log("Initializing Takobot");
// const initBot = new InitBot();
// initBot.init();
