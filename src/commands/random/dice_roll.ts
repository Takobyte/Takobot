import commando = require('discord.js-commando');
import {CommandMessage, CommandoClient} from "discord.js-commando";
import {Message} from "discord.js";

export default class DiceRollCommand extends commando.Command {
    constructor(client: CommandoClient) {
        console.log("rolling a die");
        super(client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a die'
        });
    }

    public async run(message: CommandMessage, args: object | string | string[]): Promise<Message | Message[]> {
        const roll = Math.floor(Math.random() * 6) + 1;
        return message.reply("You rolled a " + roll);
    }
}