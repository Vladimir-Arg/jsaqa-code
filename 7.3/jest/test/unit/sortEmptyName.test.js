const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names are empty", () => {
    const input = [];
    const expected = [];
    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });
  test("Withput params", () => {
    expect(() => sorting.sortByName()).toThrow(TypeError)
  })
});
