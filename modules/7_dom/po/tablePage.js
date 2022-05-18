const {$, $$, browser, protractor} = require("protractor");
const { resolve } = require('path')

class TablePage {
  constructor() {
    this.URL = `file:///${resolve(__dirname, '..', './table/index.html')}`;
    this.tableRows = $$("table tbody tr");
    this.headers = this.tableRows.$$("th");
    this.addRowButton = $("button.add");
    this.delRowButton = $("button.btn i");
  }

  getCells(rowNumber) {
    return this.tableRows.get(rowNumber).$$("td");
  }

  clickAddRow() {
    return this.addRowButton.click();
  }

  clickDelRow() {
    return this.delRowButton.click();
  }

  isDelRowButtonPresent() {
    return this.delRowButton.isPresent();
  }

  fillRow(data) {
    return browser
      .actions()
      .mouseMove(this.getCells(1).get(0))
      .doubleClick().sendKeys(data.name).sendKeys(protractor.Key.ENTER)
      .mouseMove(this.getCells(1).get(1))
      .doubleClick().sendKeys(data.surname).sendKeys(protractor.Key.ENTER)
      .perform();
  }

  async readRow() {
    return {
      name: await this.getCells(1).get(0).getText(),
      surname: await this.getCells(1).get(1).getText(),
    }
  }
}

module.exports = new TablePage();
