// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     let j = i + 1;
//     if (array[i] + array[j] === target) {
//       return true;
//     } else {
//       array[j] = array[j] + 1
//     }
//   }
//   return false;
// }

function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[i] + array[j] === target) {
        return true
      }
    }
  }
  return false;
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  the function should return true if any pair of numbers addus up to target number
  iterate through the array and see if any numbers sum === 10

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
