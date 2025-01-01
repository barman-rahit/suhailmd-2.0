const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_57_01_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA4OSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MixcbiAgICAgICAgNDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MyxcbiAgICAgICAgODIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzksXG4gICAgICAgIDExNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICA2NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNDMsXG4gICAgICAgIDU3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDMyLFxuICAgICAgICA1NixcbiAgICAgICAgMTY2LFxuICAgICAgICAzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDkzLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTExLFxuICAgICAgICA2NSxcbiAgICAgICAgNTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI2LFxuICAgICAgICA3NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDcyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0LFxuICAgICAgICA5NyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUwLFxuICAgICAgICA5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk2LFxuICAgICAgICAxLFxuICAgICAgICAxMixcbiAgICAgICAgMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3OCxcbiAgICAgICAgODksXG4gICAgICAgIDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDczLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDEwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MixcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDY0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNyxcbiAgICAgICAgODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1OCxcbiAgICAgICAgNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDY1LFxuICAgICAgICA1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5LFxuICAgICAgICA1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTVQ0MWxTU1dENTVvalQrcmUxZ3FseUx5aEQwL0hINlhxWW42R0EvL3M5Zz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTzBtekhHVTJRTWVoUDVnMlJZc2dmQVwiLFxuICBcInBob25lSWRcIjogXCJmNjhjZGFlYS1jZDljLTQ1ODUtODJlMS0wNzRkZmMzY2JhYzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjUsXG4gICAgICAxNTIsXG4gICAgICA3MyxcbiAgICAgIDI1LFxuICAgICAgMjQ4LFxuICAgICAgMjEzLFxuICAgICAgOTcsXG4gICAgICAxMTIsXG4gICAgICAxNTQsXG4gICAgICAyMDYsXG4gICAgICA0MyxcbiAgICAgIDExLFxuICAgICAgODksXG4gICAgICAxNDksXG4gICAgICAyOSxcbiAgICAgIDEyOCxcbiAgICAgIDkwLFxuICAgICAgMzYsXG4gICAgICAyMTUsXG4gICAgICAzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NCxcbiAgICAgIDc0LFxuICAgICAgMTU5LFxuICAgICAgMTk4LFxuICAgICAgMTU0LFxuICAgICAgMTQwLFxuICAgICAgMjAxLFxuICAgICAgMjUsXG4gICAgICAxMDIsXG4gICAgICA1NyxcbiAgICAgIDc1LFxuICAgICAgNTAsXG4gICAgICAxNDMsXG4gICAgICAxNjUsXG4gICAgICAxNDIsXG4gICAgICAyMjgsXG4gICAgICAyNTUsXG4gICAgICAyMTAsXG4gICAgICA5NSxcbiAgICAgIDE0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBOUxQNFlOWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5ODgzODY4MDk3OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2XlfCdl67wnZev8J2YgiAgICDwnZCR6qqu6qudzrnGmlwiLFxuICAgIFwibGlkXCI6IFwiMTUxNjQ3MTU4MjcyMjMyOjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xtWG10UUhFTHIzMUxzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicStpU1BzbTFXbVFlMEk3ZHVTSFlzTmpJZ1FwWUhFSHo2SXRPSDNBeGcwbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLNW90WGlaTDFIejZIQUxHTGlBWno0dkdnVDZXRWkyb1FDbTRoQWxWeWlYeTBSM1FSNHYyZjZUUmRpZlQxSWlhSXZKTm5rK0t4RXA4UlB1VWVoYm9DQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIybHc1ekJUdy9JOVcxQWRJbjJwL3ErYTJ0VTdVQnQ0c2NPT1NIY2NxWmR2RDN6aHQzTGNPYmRtYVd6U1pTd2QySGZxUzZBZ0Y1dTJFTDgrTmRVUWFnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTk4ODM4NjgwOTc6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU3MzYyNTJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝗕𝗮𝗯𝘂    𝐑ꪮꫝιi"
  ownername:process.env.OWNER_NAME|| "𝗕𝗮𝗯𝘂    𝐑ꪮꫝιt",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  global.AUTO_REACT_LIKE = process.env.AUTO_REACT_LIKE || "true"

  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "prate",
  LANG: ( process.env.THEME ||  "SUHAI  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed859b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
