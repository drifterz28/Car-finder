var $ = require('cheerio');
var request = require('request');
var states = require('./javascripts/lib/cl-city-list.js');
console.log(states);
function gotHTML(err, resp, html) {
  if (err) {
    console.error(err);
    return;
  }

  var parsedHTML = $.load(html);
  // get all img tags and loop over them
  var imageURLs = [];
  parsedHTML('a').map(function(i, link) {
    var href = $(link).attr('href');
    imageURLs.push(domain + href);
    console.log(href.replace('http://', '').replace('.craigslist.org/', ''));
  });
}

var domain = 'http://geo.craigslist.org/iso/us/or';
request(domain, gotHTML);
