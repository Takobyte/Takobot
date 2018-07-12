"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is the main class that runs with the node command to initialize and start the bot
 */
var takobot_1 = require("./takobot");
var InitBot = /** @class */ (function () {
    function InitBot() {
    }
    InitBot.prototype.init = function () {
        var takoBot = new takobot_1.default();
        takoBot.start();
    };
    return InitBot;
}());
exports.InitBot = InitBot;
console.log("Initializing Takobot");
var initBot = new InitBot();
initBot.init();
