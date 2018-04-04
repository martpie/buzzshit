# Buzzshit

Buzzshit is a small JavaScript library to replace any bullshit words in a string by something a bit more realistic.

(not so) Proudly brought to you by [your servant](https://pierrevanmart.com) and [Simon Kümin](https://simonkuemin.ch/).

##  What is a bullshit word?

> It is something that no one truly understands, not even nerds, but it still used by marketing guys to sell things nobody can do.

Another definition could be:

> Any word that makes no sense in a LinkedIn post.

## Usage

```
buzzshit(input[, replacement])
```

#### Parameters

`input`<br />
A string as-if provided by your average business manager.

`replacement` (optional)<br />
Whatever you would like buzzwords to be replaced with.

#### Return value

The string as it should have been from the beginning.

## Examples

``` JavaScript
import buzzshit from 'buzzshit';

buzzshit('We at [company name] love blockchain!');
// -> "We at [company name] love 💩!"
//
buzzshit('I decided to do a digital detox before our disruptive ICO :)');
// -> "I decided to do a 💩 before our 💩 💩 :)"

buzzshit('Our engineers are working on state-of-the-art machine learning algorithms.', 'BULLSHIT');
// -> "Our engineers are working on state-of-the-art BULLSHIT algorithms."
```

### Contribute

Feel free to open a PR to add more _~~shitwords~~_ buzzwords :)
