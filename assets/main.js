let additionkata = document.querySelector('#addition')
let multiplicationkata = document.querySelector('#multiplication')

function add(a, b) {
    return a + b
  }

  let addition = add(2, 4)
  additionkata.innerText = "Answer is: " + addition + ".";

  function multiply(x,y) {
    let result = 0
     for (let i = 0; i < y; i++){
        result = add(result, x);
        console.log(result)
     }
     return result
  }
  
  let multiplication = multiply(4, 6)
  multiplicationkata.innerText = multiplication

  