/**
Intermediate Algorithm Scripting: DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Test cases
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/

function pairElement(str) {
  const input = str.split("");
  const result = [];

  for(let i = 0; i<input.length; i++) {
    switch(input[i]) {
        case "A":
          result.push([input[i], "T"]);
          break;
        case "T":
          result.push([input[i], "A"]);
          break;
        case "C":
          result.push([input[i], "G"]);
          break;
        case "G":
         result.push([input[i], "C"]);
         break;
    }
  }
  return result;
}

pairElement("GCG");
