/**
 * This is the main class that runs with the node command to initialize and start the bot
 */
import Takobot from "./takobot";

export class InitBot {
    public init() {
        const takoBot = new Takobot();
        takoBot.start();
    }
}

console.log("Initializing Takobot");
const initBot = new InitBot();
initBot.init();
