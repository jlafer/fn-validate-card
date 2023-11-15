const {validateCard} = require('./helpers.private');

const validCardStr = '1234567890123456';
const validCardStrTTS = '1234 5678 9012 3456';

test('validateCard passes a valid string with only digits', () => {
  const str = '1234567890123456';
  const res = validateCard(str);
  expect(res.isValid).toEqual(true);
  expect(res.cardStr).toEqual(validCardStr);
  expect(res.cardStrForTTS).toEqual(validCardStrTTS);
});

test('validateCard passes a valid string with digits and spaces', () => {
  const str = '1 234567890 1234 56';
  const res = validateCard(str);
  expect(res.isValid).toEqual(true);
  expect(res.cardStr).toEqual(validCardStr);
  expect(res.cardStrForTTS).toEqual(validCardStrTTS);
});

test('validateCard passes a valid string with digits and multiple spaces', () => {
  const str = '1  234567890   1234 56';
  const res = validateCard(str);
  expect(res.isValid).toEqual(true);
  expect(res.cardStr).toEqual(validCardStr);
  expect(res.cardStrForTTS).toEqual(validCardStrTTS);
});

test('validateCard passes a valid string with digits and dashes', () => {
  const str = '1-234567890-1234-56';
  const res = validateCard(str);
  expect(res.isValid).toEqual(true);
  expect(res.cardStr).toEqual(validCardStr);
  expect(res.cardStrForTTS).toEqual(validCardStrTTS);
});

test('validateCard passes a valid string with digits and periods', () => {
  const str = '1.234567890.1234.56';
  const res = validateCard(str);
  expect(res.isValid).toEqual(true);
  expect(res.cardStr).toEqual(validCardStr);
  expect(res.cardStrForTTS).toEqual(validCardStrTTS);
});

test('validateCard passes a valid string with digits and commas', () => {
  const str = '1,234567890,1234,56';
  const res = validateCard(str);
  expect(res.isValid).toEqual(true);
  expect(res.cardStr).toEqual(validCardStr);
  expect(res.cardStrForTTS).toEqual(validCardStrTTS);
});

test('validateCard passes a valid string with digits and mixed chars', () => {
  const str = '+1, 234567890,.1234,56';
  const res = validateCard(str);
  expect(res.isValid).toEqual(true);
  expect(res.cardStr).toEqual(validCardStr);
  expect(res.cardStrForTTS).toEqual(validCardStrTTS);
});

test('validateCard fails a string with no digits', () => {
  const str = '';
  const res = validateCard(str);
  expect(res.isValid).toEqual(false);
});

test('validateCard fails a string with non-digits', () => {
  const str = '123456789g012345';
  const res = validateCard(str);
  expect(res.isValid).toEqual(false);
});

test('validateCard fails a string with too few digits', () => {
  const str = '123456789012345';
  const res = validateCard(str);
  expect(res.isValid).toEqual(false);
});

test('validateCard fails a string with too many digits', () => {
  const str = '12345678901234567';
  const res = validateCard(str);
  expect(res.isValid).toEqual(false);
});
