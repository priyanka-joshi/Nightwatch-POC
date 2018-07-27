module.exports = {
    signupInputVisible: function (browser) {
        browser
        .waitForElementVisible('input[name=emailAddress]', 1000)
        .assert.visible('input[name=emailAddress]');
        return this;
    },
    enterEmailAddress: function (browser, email) {
        browser
        .setValue('input[name=emailAddress]', email);
        return this;
    },
    clickSignUpBtn: function (browser) {
        browser
        .click('button[name=userSignupButton]')
        .pause(2000);
        return browser;
    }
};