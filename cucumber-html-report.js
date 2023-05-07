const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumber-reports',
	reportPath: './cypress/cucumber-reports/cucumber-report.html',
	metadata:{
        browser: {
            name: 'edge',
            version: '60'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
});