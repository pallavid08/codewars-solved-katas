function numbersOfLetters(integer) {
   let numbers = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
   ];

   let first = '';
   let second = '';
   let next = '';
   let temp = '';
   let finalArr = [];

   let strArr = integer.toString().split('');

   for (let i = 0; i < strArr.length; i++) {
      first += numbers[strArr[i]];
   }
   finalArr.push(first);
   next = first;

   if (first.length > 9) {
      let strArr2 = first.length.toString().split('');
      for (let i = 0; i < strArr2.length; i++) {
         second += numbers[strArr2[i]];
      }
      finalArr.push(second);
      next = second;
   }

   while (temp !== 'four' && next !== 'four') {
      temp = numbers[next.length];
      finalArr.push(temp);
      next = temp;
   }

   return finalArr;
}

console.log(numbersOfLetters(4));
console.log(numbersOfLetters(37)); //["threeseven", "onezero", "seven", "five", "four"]
console.log(numbersOfLetters(60)); // ["sixzero", "seven", "five", "four"]
console.log(numbersOfLetters(12)); //["onetwo", "six", "three", "five", "four"]
console.log(numbersOfLetters(999)); //["nineninenine", "onetwo", "six", "three", "five", "four"]
