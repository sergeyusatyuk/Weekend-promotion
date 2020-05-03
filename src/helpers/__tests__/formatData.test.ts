import formatData from "../formatData";

describe("formatData", () => {
  it("should format fields to have key - value pairs", () => {
    const fields = {
      a: {
        value: "a",
        field: "field"
      },
      b: {
        value: "b",
        field: "field"
      }
    };

    // @ts-ignore
    expect(formatData(fields)).toEqual(JSON.stringify({a: 'a', b: 'b'}));
  });
});
