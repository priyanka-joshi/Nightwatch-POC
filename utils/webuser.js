module.exports = new (function()  {
    this.openBrowser = function (browser) {
        browser
        .url('https://od-fkg8qkhw5.od16.appdirectondemand.com')
        .maximizeWindow()
        .pause(5000)
        .waitForElementVisible('body', 1000)
        .assert.title('AppDirect | AppDirect');
        return browser;
    };

    this.closeBrowser = function (browser) {
        browser
        .closeWindow()
        .pause(5000);
    };
}) ();