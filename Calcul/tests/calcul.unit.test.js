const calculator = require('../ressources/js/calculator.js')

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(4, 3, 4)).toBe(11);
});

test('adds 1 + -2 to equal -1', () => {
  expect(calculator.add(1, -2)).toBe(-1);
});

test(' 5 no adds with no parameter, equal 5', () => {
  expect(calculator.add(5)).toBe(5);
});



test('substract 1 - 2 to equal -1', () => {
  expect(calculator.substract(1, 2)).toBe(-1);
});

test('substract 120 - 52 - 63 to equal 5', () => {
  expect(calculator.substract(120, 52, 63)).toBe(5);
});

test('5 no substract with no second parameter, to equal 5', () => {
  expect(calculator.substract(5)).toBe(5);
});


test('divide 3 by 2 to equal 1,5', () => {
  expect(calculator.divide(3, 2)).toBe(1.5);
});

test('divide 120 by 10 than by 3 to equal 4', () => {
  expect(calculator.divide(120, 10, 3)).toBe(4);
});

test('5 no divide with no second parameter, to equal 5', () => {
  expect(calculator.divide(5)).toBe(5);
});


test('multiply 3 by 2 to equal 6', () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});

test('multiply 3 by 10 than by 3 to equal 90', () => {
  expect(calculator.multiply(3, 10, 3)).toBe(90);
});

test('5 no multiply with no second parameter, to equal 5', () => {
  expect(calculator.multiply(5)).toBe(5);
});