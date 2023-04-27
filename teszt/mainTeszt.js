QUnit.module("fügvény tesztelése", function () {
  QUnit.test("létezik-e a kosarkattintas fügvény?", function (assert) {
    assert.ok(typeof kosarkattintas === "function", "a kosarkattintas fügvény");
  });
  });