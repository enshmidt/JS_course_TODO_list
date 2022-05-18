const {browser} = require("protractor");
const sliderPage = require("./po/sliderPage");
const windowSizePage = require("./po/windowSizePage");
const searchPage = require("./po/searchPage");
const tablePage = require("./po/tablePage");

describe('Module 7 DOM', () => {
  describe('Showing the width and height of a window', () => {
    beforeEach(async () => {
      await browser.driver.get(windowSizePage.URL);
    });

    it('should show sizes initially when loaded', async () => {
      const windowSize = await browser.manage().window().getSize();
      expect(windowSizePage.getHeightText()).toEqual(windowSize.height.toString());
      expect(windowSizePage.getWidthText()).toEqual(windowSize.width.toString());
    });

    it('should show sizes when window is resized', async () => {
      const HEIGHT = 600;
      const WIDTH = 900;
      await browser.manage().window().setSize(WIDTH, HEIGHT);
      expect(windowSizePage.getHeightText()).toEqual(HEIGHT.toString());
      expect(windowSizePage.getWidthText()).toEqual(WIDTH.toString());
    });
  })

  describe("Searching by word in text", () => {
    const TEXT_FOR_SEARCH = "test user text is testable";
    const SEARCH_TEXT = "test";

    beforeEach(async () => {
      await browser.driver.get(searchPage.URL);
    });

    it("should search and highlight entered text in a given paragraph", async () => {
      await searchPage.enterText(TEXT_FOR_SEARCH);
      await searchPage.enterSearchText(SEARCH_TEXT);
      const results = await searchPage.getAllBoldTexts();
      expect(results.length).toEqual(2);
      results.forEach(elem => {
        expect(elem).toEqual(SEARCH_TEXT);
      });
    });

    it("should use <input>, <textarea>, <p> and <b> tags", async () => {
      await searchPage.enterText(TEXT_FOR_SEARCH);
      await searchPage.enterSearchText(SEARCH_TEXT);
      expect(searchPage.isSearchFieldPresent()).toBeTruthy();
      expect(searchPage.isTextFieldPresent()).toBeTruthy();
      expect(searchPage.isParagraphPresent()).toBeTruthy();
      expect(searchPage.isBoldTextPresent()).toBeTruthy();
    });

    it("should let putting any text in <textarea>", async () => {
      const TEXT_EXAMPLE =
        "1234567890 ~!@#$%^&*()_+`<>?,./| testing hyper clever";
      await searchPage.enterText(TEXT_EXAMPLE);
      await searchPage.clickOnSearchField();
      expect(searchPage.getTextFieldValue()).toEqual(TEXT_EXAMPLE);
    });

    it("should display entered text from <textarea> in paragraph <p>", async () => {
      await searchPage.enterText(TEXT_FOR_SEARCH);
      expect(searchPage.getParagraphText()).toEqual(TEXT_FOR_SEARCH);
    });

    it("should not change initial text in paragraph by search routine", async () => {
      const TEXT_EXAMPLE = "testing hyper clever \\/another";
      const FORWARD_SLASH = "\\/";
      await searchPage.enterText(TEXT_EXAMPLE);
      await searchPage.enterSearchText(FORWARD_SLASH);
      expect(searchPage.getParagraphText()).toEqual(TEXT_EXAMPLE);
    });

    it("should not highlight any word in text if it's not found", async () => {
      const TEXT_EXAMPLE = "testing hyper clever another";
      const MASK = "mask";
      await searchPage.enterText(TEXT_EXAMPLE);
      await searchPage.enterSearchText(MASK);
      expect(searchPage.isBoldTextPresent()).toBeFalsy();
    });
  });

  describe('Images slider', () => {

    beforeEach(async () => {
      await browser.driver.get(sliderPage.URL);
      await browser.driver.manage().window().maximize();
    });

    it('should let add images in slider', async () => {
      await sliderPage.addImage();
      expect(sliderPage.images.count()).toBe(1);
      expect(sliderPage.getActiveSlideSource()).toEqual(sliderPage.FIRST_PIC);
    });

    it('should let switch images', async () => {
      await sliderPage.addImages();
      expect(sliderPage.isNextImageButtonDisplayed()).toBeTruthy();
      expect(sliderPage.isPrevImageButtonDisplayed()).toBeTruthy();
    });

    it('should switch image forward when user clicks next button', async () => {
      await sliderPage.addImages();
      expect(sliderPage.getActiveSlideSource()).toEqual(sliderPage.THIRD_PIC);
      await sliderPage.clickOnNextImageButton();
      expect(sliderPage.getActiveSlideSource()).toEqual(sliderPage.FIRST_PIC);
      await sliderPage.clickOnNextImageButton();
      expect(sliderPage.getActiveSlideSource()).toEqual(sliderPage.SECOND_PIC);
    });

    it('should switch image backward when user clicks previous button', async () => {
      await sliderPage.addImages();
      expect(sliderPage.getActiveSlideSource()).toEqual(sliderPage.THIRD_PIC);
      await sliderPage.clickOnPrevImageButton();
      expect(sliderPage.getActiveSlideSource()).toEqual(sliderPage.SECOND_PIC);
      await sliderPage.clickOnPrevImageButton();
      expect(sliderPage.getActiveSlideSource()).toEqual(sliderPage.FIRST_PIC);
    });

    it('should switch image automatically in time and let define time to switch images', async () => {
      await sliderPage.addImages();
      await sliderPage.enterTimer(1);
      expect(sliderPage.getActiveSlideSource()).toEqual(sliderPage.THIRD_PIC);
      await sliderPage.clickOnTimerButton();
      browser.sleep(1000)
      expect(sliderPage.getActiveSlideSource()).toEqual(sliderPage.FIRST_PIC);
      browser.sleep(1000)
      expect(sliderPage.getActiveSlideSource()).toEqual(sliderPage.SECOND_PIC);
    });

    it('should drop the timer when user switches the image', async () => {
      await sliderPage.addImages();
      await sliderPage.enterTimer(1);
      await sliderPage.clickOnTimerButton();
      await sliderPage.clickOnPrevImageButton();
      await browser.sleep(1000)
      expect(sliderPage.getActiveSlideSource()).toEqual(sliderPage.THIRD_PIC);
      await browser.sleep(1000)
      expect(sliderPage.getActiveSlideSource()).toEqual(sliderPage.THIRD_PIC);
    });

    it('should let delete image when user double clicks on image', async () => {
      await sliderPage.addImage();
      await sliderPage.doubleClickOnActiveSlide();
      expect( () =>  {browser.switchTo().alert()}).not.toThrow();
      await browser.switchTo().alert().dismiss();
    });
    it('should delete image from slider if user confirms that', async () => {
      await sliderPage.addImage();
      await sliderPage.doubleClickOnActiveSlide();
      await browser.switchTo().alert().accept();
      expect(sliderPage.images.count()).toBe(0);
    });
    it('should switch to the next image when image has been removed', async () => {
      await sliderPage.addImages();
      await sliderPage.doubleClickOnActiveSlide();
      await browser.switchTo().alert().accept();
      expect(sliderPage.getActiveSlideSource()).toEqual(sliderPage.FIRST_PIC);
    })
  })

  describe("Table rows", () => {
    beforeEach(async () => {
      await browser.driver.get(tablePage.URL);
    });

    it("should let manage table of two columns", async () => {
      expect(tablePage.headers.count()).toEqual(2);
    });

    it('should let add rows', async () => {
      const rowsCount = await tablePage.tableRows.count();
      await tablePage.clickAddRow();
      expect(tablePage.tableRows.count()).toEqual(rowsCount + 1);
      browser.sleep(1000)
      expect(tablePage.isDelRowButtonPresent()).toBeTruthy();
    });

    it("should let delete rows", async () => {
      let rowsCount = await tablePage.tableRows.count();
      await tablePage.clickAddRow();
      expect(tablePage.tableRows.count()).toEqual(rowsCount + 1);
      await tablePage.clickDelRow();
      expect(tablePage.tableRows.count()).toEqual(rowsCount);
    });

    it('should let insert text inside cells', async () => {
      await tablePage.clickAddRow();
      const testUser = {
        name: "test",
        surname: "user"
      }
      await tablePage.fillRow(testUser);
      const actualData = await tablePage.readRow();
      expect(actualData.name).toEqual(testUser.name);
      expect(actualData.surname).toEqual(testUser.surname)
    })
  });
});
