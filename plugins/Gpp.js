const bots = require('../lib/perfix')
bots.bot(
	{
		pattern: ['gpp'], desc: 'set full size profile picture',sucReact: "⛰️",  category: ["all"],},
	async (message, client) => {
	let _message = message.quoted.imageMessage || message.client.text;
		if (!_message)
			return await client.sendMessage( message.from,{ text :'*Reply to a image.*'}, { quoted: message })
			let download = await client.downloadMediaMessage(_message);
		await client.updateProfilePicture(message.from, download );
		return await client.sendMessage( message.from,{text :'_Profile Picture Updated_'}, { quoted: message })
	}
)
