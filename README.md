# Nightwatch.js - POC
POC - Evaluating tool for canary smoke test

## Steps for running the test:
1. Fork the repo 
2. Open Terminal on your Mac
3. Clone the repo - `git@github.com:<your-github-account>/Nightwatch-POC.git`
2. Go to the project folder and run command - `npm install`
3. Run command - `node nightwatch -e chrome -a signup --reporter html-reporter.js`
4. Console should display output similar to:

```
PUPJOSHI:Nightwatch-POC priyankajoshi$ node nightwatch -e chrome -a signup --reporter html-reporter.js
Starting selenium server... started - PID:  49803

[Signup] Test Suite
=======================
Starting test..

Running:  Test Sign up functionality
 ✔ Testing if the page title equals "AppDirect | AppDirect".
 ✔ Sign up button is visible on home page
 ✔ Email input is visible on Sign up page
 ✔ Sign up confirmation message is displayed
 ✔ 0ywnh@appdirect.com is displayed along with confirmation message

OK. 5 assertions passed. (35.607s)
Closing down...

Report generated: /Users/priyankajoshi/Documents/POC/repo/Nightwatch-POC/reports/CHROME_67.0.3396.99_Mac OS X_1532688707.html
```
5. Check the reports folder for HTML Report

![HTML_Report](https://user-images.githubusercontent.com/25004490/43318389-3afc85f4-91be-11e8-8215-4b798c652c2f.png)

6. In case of failures screenshots are generated and saved in screenshots folder.
