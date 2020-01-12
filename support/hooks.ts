const { Before, BeforeAll, After, AfterAll, Status } = require("cucumber");
import { browser } from "protractor";

BeforeAll({timeout: 100 * 1000}, async () => {
    const {setDefaultTimeout} = require('cucumber');
    setDefaultTimeout(600 * 1000);
});

Before({timeout: 100 * 1000}, async () => {
    await browser.navigate().to('http://www.way2automation.com/angularjs-protractor/webtables/');
});

After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
});

AfterAll({timeout: 1000 * 1000}, async () => {
   await browser.quit();
});
