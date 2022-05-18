exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",

  capabilities: {
    "browserName": "chrome",
    "chromeOptions": {
      w3c: false,
    }
  },

  suites: {
    smoke: "modules/7_dom/index.spec.js",
  },

  framework: "jasmine",

  specs: ["modules/7_dom/*.spec.js"],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare: async () => {
    browser.resetUrl = "file:///";
    await browser.waitForAngularEnabled(false);
  }
};
