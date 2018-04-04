const buzzshit = require('./buzzshit');


test('No buzzwords', () => {
  const output = buzzshit('Hello, my name is Pierre');
  expect(output).toBe('Hello, my name is Pierre');
});

test('One buzzword', () => {
  const output = buzzshit('Hello, my name is Pierre and I love blockchain and oh yeah.');
  expect(output).toBe('Hello, my name is Pierre and I love 💩 and oh yeah.');
});

test('Multiple buzzwords', () => {
  const output = buzzshit('I love blockchain and big data.');
  expect(output).toBe('I love 💩 and 💩.');
});

test('Multiple case', () => {
  const output = buzzshit('I love CRYPTOCURRENCIES.');
  expect(output).toBe('I love 💩.');
});

test('One ambiguous word', () => {
  const output = buzzshit('I love rAIn.');
  expect(output).toBe('I love rAIn.');
});

test('One buzzword surrounded by punctuation and using a custom replacement value', () => {
  const output = buzzshit('Hello, my name is Pierre and I love blockchain oh yeah.', 'BULLSHIT');
  expect(output).toBe('Hello, my name is Pierre and I love BULLSHIT oh yeah.');
});

test('One buzzword surrounded by punctuation', () => {
  const output = buzzshit('Hello, my name is Pierre and I love blockchain.');
  expect(output).toBe('Hello, my name is Pierre and I love 💩.');
});

test('Multiple buzzwords on a multiline text', () => {
  const output = buzzshit(`This a text about blockchain on
    multiple lines because
    we have to think about being disruptive too.
  `);
  expect(output).toBe(`This a text about 💩 on
    multiple lines because
    we have to think about being 💩 too.
  `);
});
