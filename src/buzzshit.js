const words = require('./dictionary');

/**
 * Replace any buzzwords in a string by something a bit more realistic
 * @param  {String} string
 * @return {String}
 */
const buzzshit = function(input, replacement = '💩') {
  let output = input;

  words.forEach((word) => {
    const regexp = new RegExp(`\\b${word}\\b`, 'gim');
    output = output.replace(regexp, replacement);
  });

  return output;
};

module.exports = buzzshit;
