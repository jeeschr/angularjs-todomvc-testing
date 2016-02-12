
exports.config = {
  
  framework: 'jasmine2',
  onPrepare: function() {
  	var jasmineReporters = require('jasmine-reporters');
  	return browser.getProcessedConfig().then(function(config){
  		
  		var browserName = config.capabilities.browserName;
	  	
	  	var junitReporter = new jasmineReporters.JUnitXmlReporter({
	  		consolidateAll: true,
	  		savePath: 'test/reports/e2e/' + browserName + '/',
	  		filePrefix: 'results'
	  	});
	  	jasmine.getEnv().addReporter(junitReporter);
  	});

  },

  baseUrl: 'http://localhost:3000',

  seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.51.0.jar',
  
  seleniumPort: null,
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  chromeDriver: '../node_modules/protractor/selenium/chromedriver',

  specs: [
  	'e2e/*.js'
  ],

  // chromeOnly: false,

  capabilities: {
  	'browserName': 'chrome'
  }

}