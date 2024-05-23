const result = 5 > 4;
console.log(result); // => true
console.log('one' !== 'one'); // => false

const isFirstLetterInUpperCase = (string) => {
    const firstLetter = string[0];
    return firstLetter.toUpperCase() === firstLetter;
  };
  
  isFirstLetterInUpperCase('marmont'); // false
  isFirstLetterInUpperCase('Robb');    // true