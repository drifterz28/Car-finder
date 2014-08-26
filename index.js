var $ = require('cheerio');
var request = require('request');

function gotHTML(err, resp, html) {
  if (err) {
    console.error(err);
    return;
  }

  var parsedHTML = $.load(html);
  // get all img tags and loop over them
  var imageURLs = [];
  parsedHTML('#list a').each(function(i, link) {
    var href = $(link).attr('href');
    console.log(href.replace('http://', '').replace('.craigslist.org/', ''));
  });
}

var domain = 'http://geo.craigslist.org/iso/us/or';
request(domain, gotHTML);
