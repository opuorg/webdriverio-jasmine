/**
 * Created by opuzaman on 4/29/16.
 */

var link = require('cred');
describe('webdriver.io page', function() {
    it('should have the right title', function () {
        browser.url(link.user);
        browser.pause(1000);
        var title = browser.getTitle();
        console.log(title);
    });
});