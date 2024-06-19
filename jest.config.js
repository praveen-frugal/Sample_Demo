module.exports = {
  testEnvironment: 'node',
   testRunner: 'jest-jasmine2',
  setupFilesAfterEnv: ['./jest.setup.js'],
  reporters: [
    "default",
    ["jest-html-reporters", {
      "publicPath": "./html-report",
      "filename": "report.html",
      "expand": true,
      "includeFailureMsg": true,
      "includeConsoleLog": true
    }],
    ["jest-allure", { "outputDirectory": "./allure-results" }]
  ]
};