export default function formatError(message: string | Function, value?: any) {
  if (typeof message === "function") {
    return message(value);
  }

  return message;
}
