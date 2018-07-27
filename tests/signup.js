var webuser = require ('./../utils/webuser')
var homepage = require ('../pages/homepage')
var signuppage = require ('./../pages/signuppage')
var email = Math.random().toString(36).substring(2,7) + '@appdirect.com';

module.exports = {
    '@tags' : ['signup'],
    before : function(browser) {
       console.log ('Starting test..')
       webuser.openBrowser(browser);
      },
    'Test Sign up functionality' : function (browser) {
        homepage
        .signupBtnVisible (browser)
        .clickSignupBtn(browser)
        .signupInputVisible(browser)
        .enterEmailAddress(browser, email)
        .clickSignUpBtn(browser)
        .assert.containsText('.signupConfirmationPanel .adb-local_alert','Thanks for registering.', 'Sign up confirmation message is displayed')
        .assert.containsText('.signupConfirmationPanel .adb-local_alert', email, email + ' is displayed along with confirmation message')
        .pause(10000)
        .end();
    },
    after : function(browser) {
        console.log('Closing down...');
        webuser.closeBrowser(browser);
    }
  };