const {
	ApplicationCommandOptionTypes,
	ApplicationCommandTypes,
	Client
} = require("oceanic.js");

const client = new Client({
	auth: "Bot " + process.env.TOKEN,
	gateway: {
		intents: 0
	}
});

client.once("ready", () => {
	console.log("hi mom");
	client.application.bulkEditGlobalCommands([
		{
			type: ApplicationCommandTypes.CHAT_INPUT,
			name: "eat",
			description: "Eat a mantikafasi"
		}
	]);
});

client.on("interactionCreate", async (i) => {
	await client.rest.channels.createMessage("1313233567836405800", {
		content: `<@287555395151593473>, did you know that <@${i.user.id}> has eated you <t:${Math.floor(Date.now() / 1000)}:R>?`
	});
	await i.createMessage({
		content: "Done!"
	});
});

client.connect();
