# Buzzshit

Buzzshit is a small JavaScript library to replace any bullshit words in a string by something a bit more realistic.

Based on a brilliant idea from @SimonKuemin.

###  What is a bullshit word?

> It is something that no one truly understands, not even nerds, but it still used by marketing guys to sell things nobody can do.

Another definition could be:

> Any word that makes no sense in a LinkedIn post.

### Usage and examples

``` JavaScript
import buzzshit from 'buzzshit';

buzzshit('We at [company name] love blockchain!');
// -> We at [company name] love 💩!
//
buzzshit('I decided to do a digital detox before our disruptive ICO :)');
// -> I decided to do a 💩 before our 💩 💩 :)

buzzshit('Our engineers are working on state-of-the-art machine learning algorithms.', 'BULLSHIT');
// -> Our engineers are working on state-of-the-art BULLSHIT algorithms.
```

### Contribute

Feel free to open a PR to add more _~~shitwords~~_ buzzwords :)
