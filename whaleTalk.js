const input = 'turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];

const resultArray = [];

for (let letter in input) {
  for (let vowel in vowels) {
    if (input[letter] === vowels[vowel]) {
      resultArray.push(input[letter]);
      if (input[letter] === 'e' || input[letter] === 'u') {
        resultArray.push(input[letter]);
      }
    }
  }
}

whaleTalk = resultArray.join(' ');
whaleTalk = whaleTalk.toUpperCase();
console.log(whaleTalk);
