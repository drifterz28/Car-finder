var $ = require('cheerio');
var request = require('request');
var fs = require('fs');

var states = ['al','ak','ar','az','ca','co','ct','de','dc','fl','ga','hi','id','il','in','ia','ks','ky','la','me','md','ma','mi','mn','ms','mo','mt','ne','nv','nh','nj','nm','ny','nc','nd','oh','ok','or','pa','ri','sc','sd','tn','tx','ut','vt','va','wa','wi','wv','wy'];
var domain = 'http://geo.craigslist.org/iso/us/';

function gotHTML(err, resp, html) {
    if (err) {
      console.error(err);
      return;
    }

    var parsedHTML = $.load(html);
    var state = resp.request.uri.path.split('/').splice(-1)[0];
    // get all img tags and loop over them
    var cities = [];
    parsedHTML('#list a').each(function(i, link) {
        var href = $(link).attr('href');
        cities.push("'"+href.replace('http://', '').replace('.craigslist.org/', '')+"'");
        //console.log(href.replace('http://', '').replace('.craigslist.org/', ''));
    });

    fs.appendFile('citys.txt', state + ' = [' + cities.join() + '];\n', function (err) {
        if (err) throw err;
        //console.log('The "data to append" was appended to file!');
    });
}

for (var i = states.length - 1; i >= 0; i--) {
    request(domain + states[i], gotHTML);
};

//request(domain + states[1], gotHTML);


