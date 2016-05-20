var webpage = require('webpage').create();

webpage.settings.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.94 Safari/537.36'

webpage
  .open('http://www.homesavings.com') // loads a page
  .then(function(){ // executed after loading
    // store a screenshot of the page
    webpage.viewportSize =
        { width:650, height:320 };
    webpage.render('homepage.png',
                   {onlyViewport:true});

  })
  .then(function(){

    var userInput = document.querySelector('#userid')
    var passwordInput = document.querySelector('#password')

    userInput.value = 'cdock1029'
    passwordInput.value = 'NXdyTWEvLVs8E3'

    webpage.sendEvent('click', )

  }).then(function() {

    webpage.viewportSize =
        { width:700, height:600 };
    webpage.render('postLogin.png',
                   {onlyViewport:true});


    slimer.exit()
  });
