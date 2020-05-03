import formatError from "../formatError";

describe('formatError', () => {
  it('should return value if string', () => {
    expect(formatError('value')).toEqual('value');
  });

  it('should return value if function is passed', () => {
    expect(formatError(() => 'value')).toEqual('value');
  });
});
