const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['6288902980987'] //ur owner number
global.ownername = "𝗔𝗻𝗴𝗴𝗮𝗫𝘆𝘇𝘇" //ur owner name
global.developer = "𝗔𝗻𝗴𝗴𝗮𝗫𝘆𝘇𝘇" //nama lu
global.ytname = "YT: 𝗔𝗻𝗴𝗴𝗮𝗫𝘆𝘇𝘇" //ur yt chanel name
global.socialm = "https://github.com/AnggaXyzZ" //ur github or insta name
global.sgc = "https://chat.whatsapp.com/E3l5YxNNUx89ecCRpOoOtO"
global.location = "Banten" //ur location

//bot bomdy 
global.owner = ['6288902980987'] //ur number
global.ownernomer = "6288902980987" //ur number
global.ownertag = '6288902980987' //ur tag number
global.premium = ['6288902980987'] //ur premium number
global.botname = '𝗔SANS_BOTZ𝘇' //ur bot name
global.ownername = "𝗔SANS_HIJRAH𝘇"
global.linkz = "https://youtube.com/@SANS_HIJRAH" //your theme url which will be displayed on whatsapp
global.dana = "6288227797037"
global.gopay = "6288902980987"
global.pulsa = "6288902980987"
global.websitex = "https://youtube.com/@SANS_HIJRAH" //ur website to be displayed
global.websitex1 = "https://youtube.com/shorts/N6cPd_V-IME?feature=share"
global.botscript = 'https://github.com/Ikhsangz' //script link
global.themeemoji = "🦄" //ur theme emoji
global.packname = "Sticker By" //ur sticker watermark packname
global.author = "𝗔𝗻𝗴𝗴𝗮𝗕𝗼𝘁𝘇" //ur sticker watermark author
global.wm = "𝗔SUBS YT:SANS_HIJRAH𝘇" //ur watermark

// Other
global.sessionName = 'Session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Done✓',
    admin: '𝘏𝘢𝘯𝘺𝘢 𝘉𝘪𝘴𝘢 𝘥𝘪 𝘎𝘶𝘯𝘢𝘬𝘢𝘯 𝘖𝘭𝘦𝘩 𝘈𝘥𝘮𝘪𝘯 𝘛𝘰𝘥!!',
    botAdmin: '𝘉𝘰𝘵 𝘉𝘶𝘬𝘢𝘯 𝘈𝘥𝘮𝘪𝘯 𝘤𝘰𝘬',
    premime: '𝘏𝘢𝘯𝘺𝘢 𝘉𝘪𝘴𝘢 𝘥𝘪 𝘎𝘶𝘯𝘢𝘬𝘢𝘯 𝘜𝘴𝘦𝘳 𝘗𝘳𝘦𝘮𝘪𝘶𝘮!',
    owner: '𝘏𝘢𝘯𝘺𝘢 𝘉𝘪𝘴𝘢 𝘥𝘪 𝘎𝘶𝘯𝘢𝘬𝘢𝘯 𝘰𝘭𝘦𝘩 𝘖𝘸𝘯𝘦𝘳!',
    group: '𝘏𝘢𝘯𝘺𝘢 𝘉𝘪𝘴𝘢 𝘋𝘪 𝘨𝘶𝘯𝘢𝘬𝘢𝘯 𝘋𝘪 𝘎𝘳𝘰𝘶𝘱',
    private: '𝘏𝘢𝘯𝘺𝘢 𝘉𝘪𝘴𝘢 𝘥𝘪 𝘎𝘶𝘯𝘢𝘬𝘢𝘯 𝘋𝘪 𝘊𝘩𝘢𝘵 𝘗𝘳𝘪𝘷𝘢𝘵𝘦!',
    bot: '𝘉𝘰𝘵 𝘖𝘯𝘭𝘺!',
    wait: '𝘞𝘢𝘪𝘵 𝘚𝘦𝘥𝘢𝘯𝘨 𝘋𝘪 𝘗𝘳𝘰𝘴𝘦𝘴....',    linkm: 'Where is the link?',
    endLimit: '𝘓𝘪𝘮𝘪𝘵 𝘈𝘬𝘢𝘯 𝘋𝘪 𝘳𝘦𝘴𝘦𝘵 12 𝘏𝘢𝘳𝘪',
    nsfw: '𝘍𝘪𝘵𝘶𝘳 𝘕𝘴𝘧𝘸 𝘉𝘦𝘭𝘶𝘮 𝘋𝘪 𝘢𝘬𝘵𝘪𝘧𝘬𝘢𝘯 𝘖𝘭𝘦𝘩 𝘈𝘥𝘮𝘪𝘯',
}
global.limitawal = {
    premium: "Infinity",
    free: 5
}
global.thum = fs.readFileSync("./Media/theme/jarot.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Media/theme/jarot.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Media/theme/jarot.jpg") //ur error pic
global.thumb = fs.readFileSync("./Media/theme/jarot.jpg") //ur thumb pic
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//module api
module.exports = {
api:{
     removebg: ['zNKnayDFH1nugtA81fkPMzXn','5CyygkXiT5vrki2Z6ZsUCE8u','Mz4yJkagrCLotdgsr4Ms39ud','vEeWnzQws9kJoYNMYKhbT1s6','2arViktax9HUdMqy9U7wFLKT','sfZpRHNwVPAG57nZVHijYZ9v','oqVVyQ2rBDYdUrxThg4GdjhA','rGp4axHpQ56Y5tRLX7J789QC','NfPx6NgTkpVYLnKUZHCAM1P3'],//https://remove.bg/api
     unscreen: ['N6J4Bjbyh2V4eqhAPTWYtFER','fcKJkPstNXp4pjntYt3bR38E'],
     upscaling: '1255173112',
     imgsuper: ['198f69d4b2msh0021bb0690669a6p1f3a80jsn9cab1ae485cc','85731a45bbmshf7bd86f09b300c2p14e544jsncd18a8d5dba2'],//https://super-image1.p.rapidapi.com/
     speechtotext: ['897beebb3ac74ceeaa6f8d0903b2297a']
   }
   }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
