let num1 = 2;
let num2 = 5;

function return_largest_number(a, b) {
  if (a > b) {
    let result = a;
  } else {
    let result = b;
  }

  return result;
}

console.log(return_largest_number(num1, num2));



function return_largest_number(num1, num2) {
  if (num1 > num2) {
    let result = num1;
  } else {
    let result = num2;
  }

  return result;
}

console.log(return_largest_number(num1, num2));