var jsdom = require("jsdom");

describe("placeCard method", function () {

  beforeEach(function () {
    const dom = new jsdom.JSDOM('<html><div class="back"><img src="purple.jpg" /></div></html>');
    global.document = dom.window.document;
    global.window = dom.window;
    global.navigator = dom.window.navigator;
  });

  it("is should add image on div element ", function () {
    expect(global.document.getElementsByClassName("back")).not.toBeNull();

  });
});

describe("flip method", function () {
  it('should check if chekmatch method has been called inside flip method', function () {

    spyOn(checkMatch(), 'checkmatch');
    var result = checkMatch()
    expect(result).toHaveBeenCalled();
  });
});


describe("checkmatch method", function () {

  beforeEach(function () {
    const dom = new jsdom.JSDOM('<html><div class="back"><img src="purple.jpg" /></div><div class="back"><img src="purple.jpg" /></div></html>');
    global.document = dom.window.document;
    global.window = dom.window;
    global.navigator = dom.window.navigator;
  });

  it("checks if flipped cards match", function () {
    expect(global.document.getElementsByClassName("back").src).toMatch(global.document.getElementsByClassName("back").src);

  });
});

describe("flipback method", function () {

  beforeEach(function () {
    const dom = new jsdom.JSDOM('<html><div class="back"></div></html>');
    global.document = dom.window.document;
    global.window = dom.window;
    global.navigator = dom.window.navigator;
  });

  it("is should add image on div element ", function () {
    expect(global.document.getElementsByClassName("back")).toBeNull();

  });
});

describe("shuffle method", function () {

  function shuffle(pics) {
    for (var i = 0; i < pics.length; i++) {
      var x = Math.floor(Math.random() * (i + 1));
      var temp = pics[i];
      pics[i] = pics[x];
      pics[x] = temp;
    }
    return pics;
  }

  it("should randomly return a card", function () {
    var result = shuffle(3);
    expect(result).toBeLessThanOrEqual(12);

  });
});