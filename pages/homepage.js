var signuppage = require ('./../pages/signuppage')

module.exports = {
    signupBtnVisible: function (browser) {
         browser
        .waitForElementVisible('a[href*=signup]', 1000, 'Sign up button is visible on home page');
        return this;
    },
    clickSignupBtn: function (browser) {
        browser
        .click('a[href*=signup]')
        .pause(2000);
        return signuppage;
    }
}