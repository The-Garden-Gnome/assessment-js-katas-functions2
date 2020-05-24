let additionkata = document.querySelector('#addition')
let multiplicationkata = document.querySelector('#multiplication')
let powerkata = document.querySelector('#power')
let factorialkata = document.querySelector('#factorial')
let fibonaccikata = document.querySelector('#fibonacci')

function add(a, b) {
    return a + b
  }

  let addition = add(2, 4)
  additionkata.innerText = addition;

  function multiply(x,y) {
    let result = 0
     for (let i = 0; i < y; i++){
        result = add(result, x);
        // console.log(result)
     }
     return result
  }
  
  let multiplication = multiply(4, 6)
  multiplicationkata.innerText = multiplication

function power(x,n) {
    let result = 1
    for (let i = 0; i < n; i++){
        result = multiply(result,x)
        // console.log(result)
    }
return result
}

let Exponentiation = power(3, 4)
powerkata.innerText = Exponentiation


function fact(n) {
    let result = 1
    for (let i = n; i > 0; i--){
        result = multiply(result,i)
        // console.log(result)
    }
return result
}

let factorial = fact(4)
factorialkata.innerText = factorial

function fib(n) {
    if (n == 1) {
        return 0;
    }

    let current = 1;
    let previous = 0;
    for (let i = 2; i < n; i++) {
        let newvalue = add(current, previous);
        previous = current;
        current = newvalue;
    }
    return current;
}

let fibonacci = fib(8)
fibonaccikata.innerText = fibonacci