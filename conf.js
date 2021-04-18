exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['CareerSearchTest.js'],
  capabilities: {
    browserName: 'chrome'
  },
  onPrepare: function (){
    browser.driver.manage().window().maximize();
  }
}