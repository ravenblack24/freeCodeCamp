/**
Intermediate Algorithm Scripting: Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Test cases

fearNotLetter("abce") should return "d".
Passed
fearNotLetter("abcdefghjklmno") should return "i".
Passed
fearNotLetter("stvwx") should return "u".
Passed
fearNotLetter("bcdf") should return "e".
Passed
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/

function fearNotLetter(str) {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 const strArray = str.split("");
 const startCounter = letters.indexOf(strArray[0]);
 let missingLetter = undefined;

 for(let i = 0; i<strArray.length; i++) {
   if (strArray[i] !== letters[startCounter+i]) {
      return letters[startCounter+i];
   }
 }
  return undefined;
}

fearNotLetter("abce");
