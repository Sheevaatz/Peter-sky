//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "https://od.lk/d/NzhfNTk5OTc4MjVf/Mrsky.mp3";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ptechtanzania015@gmail.com";
global.location = "Iringa,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://KING-MDBOT:KING-MDBOT@cluster0.ltjjfkx.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Petesky-svg/Mrsky-md";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/I98ptwPbiFd7CvHXtcJMxp";
global.website = process.env.GURL || "https://chat.whatsapp.com/I98ptwPbiFd7CvHXtcJMxp";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/504b26be1bb9cf690261b.jpg";
global.devs = "255715654328";
global.sudo = process.env.SUDO || "255715654328";
global.owner = process.env.OWNER_NUMBER || "255715654328";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkxnUkEvdDE2K2ZJdFlWVzh3bHlZM3JXbkxwek91ekV0NmdUMEF1NEJHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVRSUUpVZEZQZlp0RTJwRlhnVHlOS0NGcVFkTVgrdlhkbFExeVU1eEYzMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5RTcrTXJpQVJwNzNvUkMxT1U5WTlMR1A3OVh1dWpXM3FQZXEvV01ONWxZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJMnRWVnhmSEtOc0I4N2M5aDJZYjAzNjluWmRHRm1tNE11VkVXRERGTUVrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJLbHdLK0hSbTBIaDUyZ1RwVWhsYmxRc3pJWXYwWGZoZUlsZkQ2eEo1Rnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZ5MHllTndWL25zeStwQWlnOWFWYktwclJvc2hkNThzUUlFeHA4MkJoR1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0p0L0M4bnkrck93eE5oeUpUMHFrYStFMVE1b1VvZGduVHlXdnRBQ0FtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmcxdU9hR1ZjTkFyaDVxcUppYjV0bm9mdDhub0tYcVpJd1BtZXFTSU4wQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllRSlE4T1M3L2s2czVNRzBoMWY1Ti8wMFZtc1dmTVNUZHgyd3RrbFAwb0xhTmZ4NHFZNFdwd01TbkhLMmpuaVBHc1pkSkIvcUJRUTZqNmNzYVhFbGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDUsImFkdlNlY3JldEtleSI6IjFORkRDTyttOWZ4NGFCTDU3bXVUU0E4bXRySkJZMWdXU1c2Vm1vckV3YkU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjJ0bUNkMkxoU2V5Sk9BaEZBTGdRRFEiLCJwaG9uZUlkIjoiZDhjN2U0YjAtNDk5ZC00YjI0LTg1NDctN2E4YzE5NjgzM2U5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlE2OVp2RmFhWldSYllRREpMK1lZQlhIUTNmTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKSVpTZU83Q2hDL3drYjhFa2JtcTF5WUNuNnc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRzJKV01XRTciLCJtZSI6eyJpZCI6IjI1NTY3Nzc4MDgwMTozMkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTUNXNGZFQ0VNL1B1clFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTEF3dGxSRVFadUZUUEJPSjh4UGdDR1RtL0l0dzB4NVJJU1hrcEdqekpXdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMFdIOVRyOCtYVXliWHgzWEUzYUxQOFluQ0FSaWt6WGE3VS9RaGJJTTlQc2J5YnVRSG50VkNWZVUzWkw1U3l0TjN3azRqbHhIM29ZTmdKZGh6cit0Qmc9PSIsImRldmljZVNpZ25hdHVyZSI6IkdRM20xaUZNZVgvczZtMWFNMnhGM25jY0pvMk4yWDFjWVNhNFNKZlJadVByR1RqNzlEcnAwa09ySnhVRjcweTF6b243eVgrK0d6YU1CWkgwNjFlSGh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1Njc3NzgwODAxOjMyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlN3TUxaVVJFR2JoVXp3VGlmTVQ0QWhrNXZ5TGNOTWVVU0VsNUtSbzh5VnMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA2MjUxMTgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR0lXIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "m",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || " _Mrsky-Md-Whatsapp-Bot_ ",
  author: process.env.PACK_AUTHER || "MRSKY",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "MRSKY-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "MRSKY",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "http://,www.goog.com,https://,https://chat.whatsapp.com/,wa.me/,https://cutt.ly/,",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "MRSKY").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
