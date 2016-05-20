var fs = require('fs')
var casper = require('casper').create({
  verbose: true,
  logLevel: 'debug'
});

casper.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:48.0) Gecko/20100101 Firefox/48.0'

var dump = require('utils').dump
var firstUrl = null
var index = 0
var width = 800
var height = 400

casper.on('url.changed', function(url) {
  casper.echo('url changed: ' + url)
  /* var html = this.getHTML()
  try {
    var f = fs.open(index + '_' + url.replace(/\//g, '-') + '.txt', 'w')
    f.write(html)
    f.close()
  } catch(e) {
    casper.echo('file error: ' + e)
  }
  index++
  */
})

casper.start('https://www.homesavings.com', function() {
  this.echo('Loaded Home Savings main page')
  this.viewport(width, height)
})

casper.waitForSelector('form[name="Login"]', function() {
  this.echo('Filling out Login form..')
  this.fill('form[name="Login"]', {
    userid: 'cdock1029',
    password: 'NXdyTWEvLVs8E3'
  })
})


casper.then(function() {
  this.echo('clicking submit on login')
  this.click('input[name="submit"]')
})

casper.then(function() {
  this.echo('taking screenshot')
  this.capture('postLogin.png', {
    top: 0,
    left: 0,
    width: width,
    height: height
  })
})

casper.waitForSelector('#menu', function() {
  this.echo('#menu selector has loaded...')
}, function timeOut() {
}, 10000)

/* casper.waitForUrl('https://www.hslonline2.com/tob/live/usp-core/app/home', function then(response) {
    this.echo('redirected after Login !!!')
    dump(response)
}, function timeout() {
}, 10000) */

/* casper.thenOpen('https://www.hslonline2.com/tob/live/usp-core/app/home', function() {
    this.echo('opened "home" page after login')
}) */

/* casper.then(function() {
  this.echo('On account page. Now finding "a" tags ')
  // var a = document.querySelector('#ext-gen1030')
  var a = document.querySelector('a')
  this.echo('a ? ', a.toString())

  // this.echo('got a selector:')
  // dump(a)
  //var href = a.getAttribute('href')
  //this.echo('got a href:' + href)
  //var newA = document.createElement('a')
  //a.href = href
  //this.echo('Final href: ' + a.href)

  // this.click('#ext-gen1030')
}) */

/* casper.then(function() {
  this.echo('after click on Online Statements header')
  this.echo('new url: ' + this.getCurrentUrl())

  // var spans = document.querySelectorAll('span')
  // this.echo('\ndumping spans:')
  // dump(spans)
}) */

// then navigate to "Statements" page
/* casper.then(function() {
  this.echo('Opening statements page...')
  var link = document.querySelector('a ')
}) */

casper.run(function() {
  // this.echo(links.length + ' links found:')
  // this.echo(' - ' + links.join('\n - ')).exit()
  this.echo('Done.').exit()
});
