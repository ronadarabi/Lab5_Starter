// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber
// false
test('short phone number', () => { 
  expect(isPhoneNumber('562310619')).toBe(false);
});
test('improper format', () => { 
  expect(isPhoneNumber('5623106190')).toBe(false); 
});
// true
test('valid', () => { 
  expect(isPhoneNumber('(562)310-9121')).toBe(true);
});
test('space', () => { 
  expect(isPhoneNumber('(000) 000-0000')).toBe(true);
});

// isEmail 
// false 
test('numbers', () => { 
  expect(isEmail('111@111.111')).toBe(false);
});
test('too long', () => { 
  expect(isEmail('thisis@notanemail.fake')).toBe(false);
});
// true
test('valid', () => { 
  expect(isEmail('rdarabi@ucsd.edu')).toBe(true);
});
test('cutoff', () => { 
  expect(isEmail('rdarab@ucs.ed')).toBe(true);
});

// isStrongPassword 
// false 
test('first character number', () => { 
  expect(isStrongPassword('1bad')).toBe(false);
});
test('question mark invalid ', () => { 
  expect(isStrongPassword('ehhh?')).toBe(false);
});
// true
test('number, letters', () => { 
  expect(isStrongPassword('thisisbetter1')).toBe(true);
});
test('underscore, different capitalization, number', () => { 
  expect(isStrongPassword('thisIsBest_1')).toBe(true);
});

// isDate 
// false 
test('YYYY/XX/XX', () => { 
  expect(isDate('2024/10/23')).toBe(false);
});
test('X/X/YY', () => { 
  expect(isDate('1/1/23')).toBe(false);
});
// true
test('X/X/YYYY', () => { 
  expect(isDate('1/1/2023')).toBe(true);
});
test('X/XX/YYY', () => { 
  expect(isDate('9/30/2024')).toBe(true);
});

// isHexColor 
// false 
test('no #', () => { 
  expect(isHexColor('ffc0b')).toBe(false);
});
test('1 character', () => { 
  expect(isHexColor('#1')).toBe(false);
});
// true
test('valid 6 character', () => { 
  expect(isHexColor('#ffc0cb')).toBe(true);
});
test('valid 3 character', () => { 
  expect(isHexColor('#fff')).toBe(true);
});