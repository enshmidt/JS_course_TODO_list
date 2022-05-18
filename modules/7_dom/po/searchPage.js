const {$, $$} = require("protractor");
const { resolve } = require('path')

class SearchPage {
  constructor() {
    this.URL = `file:///${resolve(__dirname, '..', './search/index.html')}`;
    this.paragraph = $("p");
    this.boldField = $("b");
    this.allBoldFields = $$("b");
    this.searchField = $("input");
    this.textField = $("textarea");
  }

  enterText(value) {
    return this.textField.clear().sendKeys(value);
  }

  enterSearchText(value) {
    return this.searchField.clear().sendKeys(value);
  }

  getAllBoldTexts() {
    return this.allBoldFields.getText();
  }

  getParagraphText() {
    return this.paragraph.getText();
  }

  getTextFieldValue() {
    return this.textField.getAttribute("value");
  }

  clickOnSearchField() {
    return this.searchField.click();
  }

  isSearchFieldPresent() {
    return this.searchField.isPresent();
  }

  isTextFieldPresent() {
    return this.textField.isPresent();
  }

  isParagraphPresent() {
    return this.paragraph.isPresent();
  }

  isBoldTextPresent() {
    return this.boldField.isPresent();
  }
}

module.exports = new SearchPage();
