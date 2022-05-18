const {$} = require("protractor");
const { resolve } = require('path')

class WindowSizePage {
  constructor() {
    this.URL = `file:///${resolve(__dirname, '..', './window_size/index.html')}`;
    this.heightLabel = $("#height");
    this.widthLabel = $("#width");
  }

  getHeightText() {
    return this.heightLabel.getText();
  }

  getWidthText() {
    return this.widthLabel.getText();
  }
}

module.exports = new WindowSizePage();
