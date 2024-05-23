const result = 5 > 4;
console.log(result); // => true
console.log('one' !== 'one'); // => false

const isFirstLetterInUpperCase = (string) => {
    const firstLetter = string[0];
    return firstLetter.toUpperCase() === firstLetter;
  };
  
  console.log(isFirstLetterInUpperCase('marmont')); // false
  console.log(isFirstLetterInUpperCase('Robb'));    // true