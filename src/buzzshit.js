const words = require('./dictionary');
const regexp = new RegExp(`\\b(${words.join('|')})\\b`, 'gim');

/**
 * Replace any buzzwords in a string by something a bit more realistic
 * @param  {String} string
 * @return {String}
 */
const buzzshit = function(input, replacement = '💩') {
  return input.replace(regexp, replacement);
};

module.exports = buzzshit;
