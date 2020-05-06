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
 const start = str.charCodeAt(str[0]);
 for(let i = 0; i<str.length; i++) {
   if (str.charCodeAt(i) != start+i) {
      return String.fromCharCode(start+i);
   }
 }
  return undefined;
}

fearNotLetter("abce");
