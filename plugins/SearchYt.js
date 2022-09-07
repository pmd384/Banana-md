const yts = require("yt-search");
const bots = require("../lib/perfix");
const lang = bots.getString("scrapers");

bots.bot(
  { 
    pattern: ["play", "ytplay", "sc", "yt"], 
    desc: "you can dowloade audio from youtube", 
    usage: '<url|query>',
    sucReact: "🔎", 
    category: ["search", "all"] 
},
  async (message, client) => {
    try {
      if (!message.client.text) { await client.sendErrorMessage( message.from, lang.NEED_TEXT_SONG, message.key, message ); return global.catchError = true; }
      let video = {};
      let results = {};
      let result;
      let buttons = [];
      if (message.client.args[0] == "x/65v79") {
        video = await yts({ videoId: message.client.args[1] });
        result = video;
        buttons = [
          { buttonId: `.ytmp3 ${result.url}`, buttonText: { displayText: "🎼 Audio 🎵" }, type: 1, },
          { buttonId: `.ytmp4 ${result.url}`, buttonText: { displayText: "🎞 Video 📽️" }, type: 1, },
        ];
      } else {
        results = await yts(message.client.text);
        result = results.videos[0];
        buttons = [
          { buttonId: `.ytmp3 ${result.url}`, buttonText: { displayText: "ᴀᴜᴅɪᴏ" }, type: 1, },
          { buttonId: `.ytmp4 ${result.url}`, buttonText: { displayText: "ᴠɪᴅᴇᴏ" }, type: 1, },
          { buttonId: `.rytplay ${message.client.text}`, buttonText: { displayText: "ɴᴇxᴛ ꜱᴏɴɢ" }, type: 1, },
        ];
      }
      let Message = {
        image: { url: result.thumbnail },
        caption: `
  —————————————————————————
  ✰ ᴛɪᴛʟᴇ : ${result.title}
  ✰ ᴏᴜᴛ ᴘᴜᴛ : Search [first result]
  ✰ ɪᴅ : ${result.videoId}
  ✰ ᴠɪᴅᴇᴏ ʟᴇɴɢᴛʜ : ${result.timestamp}
  ✰ ᴠɪᴇᴡᴇs : ${result.views}
  ✰ ᴜᴘʟᴏᴀᴅᴇᴅ ᴅᴀᴛᴇ : ${result.ago}
  ✰ ᴄʀᴇᴀᴛᴇʀ : ${result.author.name}
  ✰ ᴄʜᴀɴɴᴇʟ : ${result.author.url}
  ✰ ᴅɪsᴄʀɪᴘᴛɪᴏɴ : ${result.description}
  ✰ ʟɪɴᴋ : ${result.url}
  —————————————————————————`,
        footer: bots.config.exif.footer,
        buttons: buttons,
      };

      await client.sendMessage(message.from, Message, { quoted: message});
    } catch (error) { global.catchError = true; return await client.sendErrorMessage( message.from, error, message.key, message ); }
  }
);
bots.bot(
  {
    pattern: ["play", "ytplay", "sc", "yt"], 
    desc: "For list search. you can use",
    usage: '<query>',
    sucReact: "🔎",
    category: ["search", "all"],
  },
  async (message, client) => {
    if (!message.client.text) { global.catchError = true; return await client.sendErrorMessage( message.from, lang.NEED_TEXT_SONG, message.key, message ); };
    try {
      const results = await yts(message.client.text);
      let result = results.videos;
      let rows = [];
      result.map((video) => {
        let obj = { title: video.title, rowId: `song ${video.videoId}`, description: video.description, };
        rows.push(obj);
      });
      const sections = [ { title: "Videos", rows: rows, }, ];
      const listMessage = {
        text: "yᴏᴜᴛᴜʙᴇ ꜱᴇʀᴄʜᴇᴅ ᴠɪᴅᴇᴏꜱ",
        footer: bots.config.exif.footer,
        title: "-----ɪɴʀʟ - ᴍᴅ-----",
        buttonText: "ʀɪꜱᴜʟᴛ ʟɪᴋᴇ ᴀ ʟɪꜱᴛ🥵",
        sections,
      };
      await client.sendMessage(message.from, listMessage, { quoted: message, });
      global.catchError = true;
    } catch (error) { global.catchError = true; return await client.sendErrorMessage( message.from, error, message.key, message ); }
  }
);
