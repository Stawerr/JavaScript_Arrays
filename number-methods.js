let num=16.164

//Numero de casas decimais
console.log(num.toFixed(2))

//Aredonda
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min=10
let max=20
let randomNum= Math.floor(Math.random()* (max-min+1))+min
console.log(randomNum)

function makeGuess(value) {
    let min=1
    let max=5
    let randomNum= Math.floor(Math.random()* (max-min+1))+min
    return randomNum==value
}

console.log(makeGuess(1))