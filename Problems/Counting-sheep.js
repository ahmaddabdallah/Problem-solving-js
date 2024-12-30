/*
    Counting sheep...

    Solution 
    - Initial value of zero
    - loop on array 
    - check if sheep === true , increase to Initial value
*/

function countSheeps(sheep) {
  let count = 0;
    sheep.map((x) => {
      if (x == true) {
        count++;
      }
    });
    return count;

  // another solution
//   for (let i = 0; i < sheep.length; i++) {
//     if (sheep[i] == true) {
//       count++;
//     }
//   }
//   return count;
}

console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
