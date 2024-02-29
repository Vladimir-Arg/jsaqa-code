const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names are the same and should not be sorted in ascending order", () => {
    const input = [
      "Властелин Колец",
      "Властелин Колец",
      "Властелин Колец",
    ];
    const expected = [
      "Властелин Колец",
      "Властелин Колец",
      "Властелин Колец",
    ];
    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });
});