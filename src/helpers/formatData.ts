import { iFields } from "../App";

export default function formatData(data: iFields): string {
  return JSON.stringify(
    Object.keys(data).reduce(
      (acc, key: string) => ({ ...acc, [key]: data[key].value }),
      {}
    )
  );
}
