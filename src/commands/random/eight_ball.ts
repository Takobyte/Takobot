import {Command, CommandMessage, CommandoClient} from "discord.js-commando";
import {Message} from "discord.js";

export default class EightBallCommand extends Command {
    constructor(client: CommandoClient) {
        console.log("initializing 8ball");
        super(client, {
            name: '8ball',
            group: 'random',
            memberName: '8ball',
            description: '8-Ball reaches into the future, to find the answers to your questions. ' +
            'It knows what will be, and is willing to share this with you.'
        });
    }

    public async run(message: CommandMessage, args: object | string | string[]): Promise<Message | Message[]> {
        if (args === null || args === "") {
            return message.reply("you must speak your mind first.")
        } else if (args.toString().substring(args.toString().length - 1) != "?") {
            return message.reply("you should ask a question instead that ends with a question mark.")
        }

        const rand = Math.round(Math.random());
        let ans: string = "no";
        if (rand === 1) {
            ans = "yes";
        }
        return message.reply(ans);
    }
}