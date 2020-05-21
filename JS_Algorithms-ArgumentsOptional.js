/**

Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Test cases

addTogether(2, 3) should return 5.
Passed
addTogether(2)(3) should return 5.
Passed
addTogether("http://bit.ly/IqT6zt") should return undefined.
Passed
addTogether(2, "3") should return undefined.
Passed
addTogether(2)([3]) should return undefined.
*/

function addTogether() {
    var x = [...arguments][0];
    var length = [...arguments].length;
    const typeCheck = (item) => typeof(item) == "number";

    if(length > 1)
    {
         var y = [...arguments][1];
         return (typeCheck(x) && typeCheck(y)) ? x+y : undefined;
    } 
    else {
      if(typeCheck(x)) {
          return function(val) {
                      if(typeCheck(val)) {
                        return x+val;
                      }
                  }
      } 
      return undefined;
    }
}

/** 

Nicer alternative:

function addTogether(first, second) {
  if (typeof first !== "number") {
    return undefined;
  }
  const sum = second =>
    typeof second === "number" ? first + second : undefined;
  return typeof second === "undefined" ? second => sum(second) : sum(second);
}
// test here
addTogether(2, 3);

Return undefined if first argument is not a number or second argument is defined, but not a number.
Return sum of the arguments if both are provided otherwise return a sum function.



*/
