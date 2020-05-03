import checkErrors from "../checkErrors";
import {
  IS_REQUIRED,
  MAX_LENGTH,
  MAX_VALUE,
  MIN_LENGTH,
  MIN_VALUE,
  PATTERN
} from "../../constants";

jest.mock("../formatError", () => jest.fn().mockImplementation(value => value));

describe("checkErrors", () => {
  it("should return empty array if there is not any rules", () => {
    expect(checkErrors("a", "a")).toEqual([]);
  });
  it("should match rules", () => {
    const rules = [
      {
        name: IS_REQUIRED,
        value: true,
        message: "IS_REQUIRED"
      },
      {
        name: MIN_LENGTH,
        value: 2,
        message: "MIN_LENGTH"
      },
      {
        name: MAX_LENGTH,
        value: 2,
        message: "MAX_LENGTH"
      },
      {
        name: MIN_VALUE,
        value: 2,
        message: "MIN_VALUE"
      },
      {
        name: MAX_VALUE,
        value: 2,
        message: "MAX_VALUE"
      },
      {
        name: PATTERN,
        value: /[0-9]+/,
        message: "PATTERN"
      }
    ];
    expect(checkErrors("1", "1", rules)).toEqual([
      "IS_REQUIRED",
      "MIN_LENGTH",
      "MIN_VALUE"
    ]);
    expect(checkErrors("100", "1", rules)).toEqual(["MAX_LENGTH", "MAX_VALUE"]);
    expect(checkErrors("a", "1", rules)).toEqual(["MIN_LENGTH", "PATTERN"]);
    expect(checkErrors("", "1", rules)).toEqual([
      "IS_REQUIRED",
      "MIN_LENGTH",
      "PATTERN"
    ]);
  });
});
