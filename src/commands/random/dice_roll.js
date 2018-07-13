"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commando = require("discord.js-commando");
class DiceRollCommand extends commando.Command {
    constructor(client) {
        console.log("rolling a die");
        super(client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a die'
        });
    }
    async run(message, args) {
        const roll = Math.floor(Math.random() * 6) + 1;
        return message.reply("You rolled a " + roll);
    }
}
exports.default = DiceRollCommand;
