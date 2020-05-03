import {
  IS_REQUIRED,
  MAX_LENGTH,
  MAX_VALUE,
  MIN_LENGTH,
  MIN_VALUE,
  PATTERN
} from "../constants";
import formatError from "./formatError";
import { iRule } from "../App";

export default function checkErrors(
  value: string,
  placeholder: string,
  rules?: Array<iRule>
) {
  const valueLength = value.length;
  if (!rules) {
    return [];
  }
  return rules.reduce(
    (acc: Array<string>, { name, message, value: ruleValue }) => {
      if (name === IS_REQUIRED && (!valueLength || value === placeholder)) {
        return [...acc, formatError(message)];
      }
      if (name === MAX_LENGTH && valueLength > ruleValue) {
        return [...acc, formatError(message, valueLength - Number(ruleValue))];
      }
      if (name === MIN_LENGTH && valueLength < ruleValue) {
        return [...acc, formatError(message)];
      }

      // @ts-ignore
      if (name === PATTERN && !value.match(ruleValue)) {
        return [...acc, formatError(message)];
      }
      if (name === MAX_VALUE && parseInt(value, 10) > ruleValue) {
        return [...acc, formatError(message)];
      }
      if (name === MIN_VALUE && parseInt(value, 10) < ruleValue) {
        return [...acc, formatError(message)];
      }
      return acc;
    },
    []
  );
}
