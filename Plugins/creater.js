const bots = require("../lib/perfix");
const lang = bots.getString("inrl-bot");
const Config = require('../config');
const fs = require("fs");
const path = require("path");

bots.bot(
  {
    pattern: ["owner", "creater"],
    desc: "It's send Owner Detals",
    sucReact: "👨🏼‍💻",
    category: ["all", "system"],
  },
  async (message, client) => {
    try {
      const buttons = [
        { buttonId: ".urls", buttonText: { displayText: "url" }, type: 1, },
        { buttonId: ".git", buttonText: { displayText: "ɢɪᴛʜᴜʙ" }, type: 1, },
      ];
      const text = `------- ᴀʙᴏᴜᴛ ᴏᴡɴᴇʀ -------

⚜ Name: `+Config.profile.ownerName+`
⚜ Web Site: `+Config.WEB+`
⚜ GitHub:`+ Config.GIT+`
⚜ Instagram: https://instagram.com/mhd_fasweeh

----------------------------
ᴛʜᴀɴᴋꜱ - ᴛᴏ - ᴀʟʟ
----------------------------
`;

    const buttonMessage = {
      image: { url: "https://imgur.com/AelfUJg.jpg" },
      caption: text,
      footer: bots.config.exif.footer,
      buttons,
      linkPreview: {
        "git-hub-url": "https://github.com/inrl-official/",
        title: "ɪɴʀʟ-ʙᴏᴛ-ᴍᴅ",
        description: "This is inrl-bot-md. \n\nAlive",
        jpegThumbnail: bots.config.image.url.D_E_DPC,
      },
    };
    await client.sendMessage( message.from, buttonMessage, { quoted: message }, { adReply: true })
    global.catchError = false;
    
    } catch (error) {
      global.catchError = true;
      return await client.sendErrorMessage( message.from, error, message.key, message );
    }
  }
);
