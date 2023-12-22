const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './e2e/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://teststore.automationtesting.co.uk',
      show: false,
      windowSize: '1920x1080'
    },
    Mochawesome: {
      uniqueScreenshotNames: true
    }

  },
  include: {
    I: './steps_file.js',

    loginPage: "./pages/loginPage.js",
  },
  mocha: {
    reporterOptions: {
      reportDir: "output"
    }
  },

  name: 'codeceptjs-web-test'
}