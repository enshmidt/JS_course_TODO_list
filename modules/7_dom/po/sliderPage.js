const {$, $$, browser} = require("protractor");
const { resolve } = require('path')

class SliderPage {
  constructor() {
    this.URL = `file:///${resolve(__dirname, '..', './slider/index.html')}`;
    this.urlInput = $("#add_url");
    this.addImageButton = $(".add_image");
    this.images = $$("img");
    this.nextImageButton = $(".next");
    this.prevImageButton = $(".prev");
    this.timerInput = $("#add_timer");
    this.timerButton = $(".set_timer");
    this.activeSlideElement = $("#active_slide");
    this.FIRST_PIC = "https://static9.depositphotos.com/1594308/1110/i/600/depositphotos_11107478-stock-photo-fantasy.jpg";
    this.SECOND_PIC = "https://i.pinimg.com/originals/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg";
    this.THIRD_PIC = "https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-prince-illustration.jpg";
  }

  async addImage(url = this.FIRST_PIC) {
    await this.urlInput.clear();
    await this.urlInput.sendKeys(url);
    await this.addImageButton.click();
  }

  async addImages(urls = [this.FIRST_PIC, this.SECOND_PIC, this.THIRD_PIC]) {
    for (const url of urls) {
      await this.addImage(url);
    }
  }

  getActiveSlideSource() {
    return this.activeSlideElement.getAttribute("src");
  }

  clickOnTimerButton() {
    return this.timerButton.click();
  }

  enterTimer(value) {
    return this.timerInput.clear().sendKeys(value);
  }

  isNextImageButtonDisplayed() {
    return this.nextImageButton.isDisplayed();
  }

  isPrevImageButtonDisplayed() {
    return this.prevImageButton.isDisplayed();
  }

  clickOnNextImageButton() {
    return this.nextImageButton.click();
  }

  clickOnPrevImageButton() {
    return this.prevImageButton.click();
  }

  doubleClickOnActiveSlide() {
    return browser.actions().doubleClick(this.activeSlideElement).perform();
  }

}

module.exports = new SliderPage();
