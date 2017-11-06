// Code your solution here!
function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}
// function reverseString(myString) {
//   if (myString.length < 2) {
//     return myString;
//   } else {
//     return reverseString(myString.substring(1)) + myString[0];
//   }
// }
function reverseString(str){
  //outer function takes in the string
  //passes it to the inner function
  function rev(str, len, letter){
    //if len is empty, then return empty
    //otherwise, take the last letter at str[last]
    //then kepp decrementing len, while saving previous letters to letter
    return (len === 0 ? letter : rev(str, --len, letter += str[len]))
  }
  //gothough the rev function with str, str.length, ""
  return rev(str, str.length, "")
}
// function isPalindrome(myString) {
//   let l = myString.length;
//
//   if (l < 2) {
//     return true;
//   } else if (myString[l - 1] === myString[0]) {
//     return isPalindrome(myString.substring(1, l - 1));
//   } else {
//     return false;
//   }
// }
function isPalindrome(str){
  //if string length is empty, then true
    if(str.length === 0) {
      return true
    }
    //if the first letter is not also the last, then false
    if(str[0] !== str[str.length-1]){
      return false
    }
    //keep doing it while moving up one letter at a time
    return isPalindrome(str.slice(1, str.length-1))
}

function addUpTo(arr, idx){
  // if(arr.length < 1){
  //   return arr
  // }
  if(idx === 0){
    return arr[0]
  }
  else{
    return arr[idx] + addUpTo(arr, idx - 1)
  }
}

// function compareMax(num1, num2){
//   return num1 > num2 ? num1 : num2
// }
// function maxOf(arr){
//   if(arr.length === 1){
//     return arr[0]
//   }
//   else{
//     compareMax(maxOf(arr, arr.length - 1), arr[arr.length - 1])
//   }
// }
//
function maxOf(arr)
{
    // copy the given array
    newArr = arr.slice();

    // base case: if we're at the last number, return it
    if (newArr.length == 1) { return newArr[0]; }

    // check the first two numbers in the array and remove the lesser
    if (newArr[0] < newArr[1]) { newArr.splice(0,1); }
    else { newArr.splice(1,1); }

    // with one less number in the array, call the same function
    return maxOf(newArr);
}

// function maxOf(myArray) {
//   if (myArray.length === 1) {
//     return myArray[0];
//   } else {
//     return Math.max(myArray.pop(), maxOf(myArray));
//   }
// }

function includesNumber(arr, num){
  if(arr.length === 0){
    return false
  }
  else if (arr[0] === num) {
    return true
  }
  else{
    return includesNumber(arr.slice(1), num)
  }
}
