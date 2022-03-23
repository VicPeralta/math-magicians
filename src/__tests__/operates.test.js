import operate from '../logic/operate';

describe('Operate function', () => {
  test('Addition function', () => {
    const lht = 2;
    const rht = 5;
    const result = operate(lht, rht, '+');
    expect(result).toBe('7');
  });

  test('Multiply function', () => {
    const lht = 2;
    const rht = 5;
    const result = operate(lht, rht, 'x');
    expect(result).toBe('10');
  });
  test('Division function', () => {
    const lht = 2;
    const rht = 5;
    const result = operate(rht, lht, '÷');
    expect(result).toBe('2.5');
  });
  test('Subtraction function', () => {
    const lht = 2;
    const rht = 5;
    const result = operate(rht, lht, '-');
    expect(result).toBe('3');
  });
  test('Modulus function', () => {
    const lht = 2;
    const rht = 5;
    const result = operate(rht, lht, '%');
    expect(result).toBe('1');
  });
});
