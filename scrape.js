const cheerio = require('cheerio')
const request = require('request')
const rp      = require('request-promise')
const charNames = ['Albedo','Amber','Barbara','Beidou','Bennett','Chongyun','Diluc']


charNames.forEach((charName) => {
    rp(`https://genshin-impact.fandom.com/wiki/${charName}`)
    .then((data) => {
        console.log(`Successfully pulled data for ${charName}... Data below:`)
        const $ = cheerio.load(data)
        $(".wikitable:eq(3)").find("tr").each((i, el) => {
            // console.log(cheerio.html($(el)))
            console.log($(el).text())
            console.log("====================================")
        })
    })
    .catch((e) => {
        console.log(`Unable to pull data for ${charName}... Refer to error below:`)
        console.log(e)
    })
})