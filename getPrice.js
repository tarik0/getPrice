var cheerio = require('cheerio');
var request = require('request');

exports.getPrice = function(tag, craft, item, callB) {
    const BPurl = 'https://backpack.tf/stats/' + tag + '/' + item + '/Tradable/' + craft;
    request(BPurl, function(error, response, html) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html);
            var fiyat = $('div.value').slice().eq(0).text();
            var metal = '';
            fiyat = fiyat.replace(/\s/g, '');
            if (fiyat.indexOf("keys") > -1) {
                fiyat = fiyat.slice(0, -4)
                metal = 'key'
            } else {
                fiyat = fiyat.slice(0, -3)
                metal = 'ref'
            };

            if (fiyat.indexOf('–') > -1) {
                fiyat = fiyat.split('–')
                fiyat = fiyat[0];
            }
            callB(fiyat, metal)
        } else {
            console.log("failed trying again")
            getPrice(tag, craft, item, function(outF, outF2) {})
        };
    });
};

module.exports = exports;