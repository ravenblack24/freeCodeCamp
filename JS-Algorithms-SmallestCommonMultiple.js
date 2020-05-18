/**

Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

Test cases

smallestCommons([1, 5]) should return a number.
Passed
smallestCommons([1, 5]) should return 60.
Passed
smallestCommons([5, 1]) should return 60.
Passed
smallestCommons([2, 10]) should return 2520.
Passed
smallestCommons([1, 13]) should return 360360.
Passed
smallestCommons([23, 18]) should return 6056820.
*/
function smallestCommons(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let multiple = max * (max-1);

  for(let i = max; i>= min; i--) {
    if(multiple%i !== 0) {
      multiple += max;
      i= max;
    }
  }

  return multiple;
}

smallestCommons([1,5]);

