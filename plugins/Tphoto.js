const bots = require("../lib/perfix");const maker = require("mumaker");let inrltext = "Need Text.";let inrl = "Text is too long.";let inrllong = "First text is too long.";let inrl_2 = "Secand text is too long.";let inrlmd = "Can use two words";bots.bot( { pattern: ["tblack"], sucReact: "🏖️", category: ["all",'logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(inrltext) }, { quoted: message } ); };
  if (message.client.text.length >= 12) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(inrl) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-blackpink-logo-style-online-1001.html', [message.client.text])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.bot( { pattern: ["timg"], sucReact: "🏖️", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(inrltext) }, { quoted: message } ); };
  if (message.client.text.length >= 30) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(inrl) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-art-paper-cut-text-effect-online-1022.html', [message.client.text])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.bot( { pattern: ["timg1"], sucReact: "🏖️", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(inrltext) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(inrl) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html', [message.client.text])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.bot( { pattern: ["timg2"], sucReact: "🏖️", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(inrltext) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(inrl) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html', [message.client.text, 'Ai Dark bots'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.bot( { pattern: ["timg3"], sucReact: "🏖️", category: ['logo'], usage: '<word1/word2>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(inrltext) }, { quoted: message } ); };
  let arry = message.client.text.split("/");
  if (arry.length > 2) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(inrlmd) }, { quoted: message } ); };
  if (arry[0].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(inrllong) }, { quoted: message } ); };
  if (arry[1].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(inrl_2) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html', arry)
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.config.api.textpro.takes1.map(logo => {
  const { pattern, textLenth, id } = logo; 
  const url = bots.config.api.textpro.domain + id;
  bots.bot( { pattern, sucReact: "🏖️", category: ['logo'], usage: '<word>', }, async (message, client) => {
    if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(inrltext) }, { quoted: message } ); };
    if (message.client.text.length >= textLenth) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(inrl) }, { quoted: message } ); };
    await maker.textpro( url, [message.client.text])
    .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
    .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
  });
});
