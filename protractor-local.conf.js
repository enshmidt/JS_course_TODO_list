const baseConfig = require("./protractor.conf").config;

baseConfig.capabilities.directConnect = true;
delete baseConfig.seleniumAddress;

exports.config = baseConfig;
