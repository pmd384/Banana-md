const bots = require("../lib/perfix");
const GDM = "it sends good morning message";
const GDN = "it sends Night message";

bots.bot(
  { pattern: ["gm","GoodMornig","gdmornig"], desc: GDM, sucReact: "🌄", category: ["chat", "all"] },
  async (message, client) => {
    var r_text = new Array();
    r_text[0] = "❀🍃Good❀ ❀morning❀🥰❀ ";
    r_text[1] = "☘️𝐺𝑜𝑜𝑑 🌅𝑚𝑜𝑟𝑛𝑖𝑛𝑔 💐 ";
    r_text[2] = "🍃𝙶𝚘𝚘𝚍 🌻𝚖𝚘𝚛𝚗𝚒𝚗𝚐 🥰 ";
    r_text[3] = "🍀𝗚𝗼𝗼𝗱 😘𝗺𝗼𝗿𝗻𝗶𝗻𝗴 🌸 ";
    r_text[4] = "🌻𝓖𝓸𝓸𝓭 𝓶𝓸𝓻𝓷𝓲𝓷𝓰 💞 ";
    r_text[5] = "🌼🅖🅞🅞🅓 🅜🅞🅡🅝🅘🅝🅖 🐶 ";
    r_text[6] = "🍃Ⓖⓞⓞⓓ 🌈ⓜⓞⓡⓝⓘⓝⓖ 🥰 ";
    const i = Math.floor(7 * Math.random());
    await client.sendMessage( message.from, { text: r_text[i] + message.client.pushName }, { quoted: message } );
    global.catchError = false;
  }
);

bots.bot(
  { pattern: ["ga", "good afternoon", "afternoon"], desc: "good afternoon", sucReact: "🌇", category: ["chat", "all"] },
  async (message, client) => {
    var r_text = new Array();
    r_text[0] = "💗ɢᴏᴏᴅ 💌ᴀғᴛᴇʀɴᴏᴏɴ",
    r_text[1] = "🥀️ꁍꆂꆂꁕ 💞ꋫꄘ꓅ꍟ꒓ꁹꆂꆂꁹ",
    r_text[2] = "🌸ⓖⓞⓞⓓ 💝ⓐⓕⓣⓔⓡⓝⓞⓞⓝ",
    r_text[3] = "🐳𝓰𝓸𝓸𝓭 💖𝓪𝓯𝓽𝓮𝓻𝓷𝓸𝓸𝓷",
    r_text[4] = "🌼ムののり 🐣卂千ㄒ乇尺几ㄖㄖ几",
    r_text[5] = "🌻ᎶᎧᎧᎴ 💕ԹԲԵeՐՌԾԾՌ",
    r_text[6] = "💮 ɠơơɖ ❣️αƒτєяɳօօղ"
    const i = Math.floor(7 * Math.random());
    await client.sendMessage( message.from, { text: r_text[i] + message.client.pushName }, { quoted: message } );
    global.catchError = false;
  }
);

bots.bot(
  { pattern: ["ge", "good evening", "evening"], desc: "good evening", sucReact: "🌅", category: ["chat", "all"] },
  async (message, client) => {
    var r_text = new Array();
    r_text[0] = "😻ɢᴏᴏᴅ 💗ᴇᴠᴇɴɪɴɢ",
    r_text[1] = "❣️𝐺𝛩𝛩𝐷 💓𝛯𝛻𝛯𝛮𝛪𝛮𝐺",
    r_text[2] = "🥰ｇｏｏｄ 💞ｅｖｅｎｉｎｇ",
    r_text[3] = "🥳𝓰𝓸𝓸𝓭 💝𝓮𝓿𝓮𝓷𝓲𝓷𝓰",
    r_text[4] = "😍ムののり 💘乇√乇刀ﾉ刀ム",
    r_text[5] = "🤩ᎶᎧᎧᎴ 💕ᏋᏉᏋᏁᎥᏁᎶ",
    r_text[6] = "😛 ɠơơɖ 💔ɛ۷ɛŋıŋɠ"
    const i = Math.floor(7 * Math.random());
    await client.sendMessage( message.from, { text: r_text[i] + message.client.pushName }, { quoted: message } );
    global.catchError = false;
  }
);

bots.bot(
  { pattern: ["gn", "gdnight", "goodnight","gd8","gdn8"], desc: GDN, sucReact: "🌆", category: ["chat", "all"] },
  async (message, client) => {
    var r_text = new Array();
    r_text[0] = "😘𝙂𝙤𝙤𝙙 🙈𝙣𝙞𝙜𝙝𝙩 💫✨";
    r_text[1] = "🤗𝓖𝓸𝓸𝓭 🧚‍♀𝓷𝓲𝓰𝓱𝓽 ❄️✨";
    r_text[1] = "🌌❡០០ᖱ 🌙⩎ɨ❡ϦƬ 🌎";
    r_text[3] = "😘ցօօժ ⭐️ղíցհԵ 💝";
    r_text[4] = "🌃Ꮐᝪᝪᗞ 🙈ᑎᏆᏀᕼᎢ 💫✨";
    const i = Math.floor(5 * Math.random());
    await client.sendMessage( message.from, { text: r_text[i] + message.client.pushName }, { quoted: message, adReply: true } );
    global.catchError = false;
  }
);
