import { add, sub, mul, div } from '../src/calc'

describe('teste de calculadora', () => {
  test('add function: 10+10 = 20', () => {
    expect(add(10,10)).toBe(20);
  })

  test('add function: 10+5 != 50', () => {
    expect(add(10,5)).not.toBe(50)
  })

  test('sub function: 10-9 = 1', () => {
    expect(sub(10,9)).toBe(1);
  })

  test('mul function: 10*2 = 20', () => {
    expect(mul(10,2)).toBe(20);
  })

  function divideByZero(){
    div(10,0);
  }

  test('div function: 10/0 = throw Error', () => {
    expect(divideByZero).toThrowError(/is not a valid integer for division/);
  })

  test('div function: 10/2 = 5', () => {
    expect(div(10,2)).toBe(5)
  })
});