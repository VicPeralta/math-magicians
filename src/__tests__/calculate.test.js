import calculate from '../logic/calculate';

describe('Calculate function', () => {
  test('Return result', () => {
    const obj = {
      total: '2',
      operation: '+',
      next: '3',
    };
    const result = calculate(obj, '=');
    expect(result.total).toBe('5');
  });
  test('Clear states', () => {
    const obj = {
      total: '2',
      operation: '+',
      next: '3',
    };

    const result = calculate(obj, 'AC');
    expect(result.total).toBe(null);
    expect(result.operation).toBe(null);
    expect(result.next).toBe(null);
  });
  test('Next 0 and press 0', () => {
    const obj = {
      total: null,
      operation: null,
      next: '0',
    };

    const result = calculate(obj, '0');
    expect(result).toStrictEqual({});
  });
  test('Add next number', () => {
    const obj = {
      total: '1',
      operation: '+',
      next: '2',
    };

    const result = calculate(obj, '0');
    expect(result.next).toBe('20');
  });
  test('Change operator', () => {
    const obj = {
      total: '5',
      operation: '+',
      next: null,
    };

    const result = calculate(obj, '-');
    expect(result.operation).toBe('-');
    expect(result.total).toBe('5');
  });
  test('Preserve last result', () => {
    const obj = {
      total: '5',
      operation: '+',
      next: '2',
    };

    const result = calculate(obj, '=');
    let newResult = calculate(result, '-');
    expect(newResult.operation).toBe('-');
    newResult = calculate(newResult, '3');
    newResult = calculate(newResult, '=');
    expect(newResult.total).toBe('4');
  });
});
