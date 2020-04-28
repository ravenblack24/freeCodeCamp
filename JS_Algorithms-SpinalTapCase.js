/**
Intermediate Algorithm Scripting: Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Test Cases

spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
Passed
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
Passed
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
Passed
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
Passed
spinalCase("AllThe-small Things") should return "all-the-small-things".

*/
function spinalCase(str) {
  const underscore = /_/g;
  const camelCase = /([a-z])([A-Z])/g

  const update = str.replace(underscore, ' ').replace(camelCase, '$1 $2');
  return update.toLowerCase().split(" ").join("-");
}
spinalCase('This Is Spinal Tap');
