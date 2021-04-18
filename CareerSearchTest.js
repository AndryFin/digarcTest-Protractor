

describe('Career search test', function () {

  browser.ignoreSynchronization = true;
  
  var careersLink =  element(by.linkText('Careers'));
  var keywordInput = element(by.id('search_keywords'));

  it('go to test page', function () {
    browser.get('https://www.digarc.com/');
    return browser.wait(function () {
      return browser.executeScript('return document.readyState==="complete"').then(function (text) {
        return text === true;              //wait for page to download, could be moved to the helper
      });
    }, 6000);
  });
  
  it('Scroll down and click Careers link', function () {
    browser.actions().mouseMove(careersLink).click().perform();
  });
  
   it('type "ASSOCIATE" into keyword and hit enter', function () {
     keywordInput.sendKeys('ASSOCIATE');
     keywordInput.sendKeys(protractor.Key.ENTER);
     browser.sleep(5000);  //some wait for screen recording purposes 
  });

});
