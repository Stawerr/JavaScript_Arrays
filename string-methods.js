let name='  Renato Rodrigues  '

//Lenght Property
console.log(name.length)

//Convert to uppercase
console.log(name.toUpperCase())

//convert to lower case
console.log(name.toLowerCase())

// Includes method
let password='abc123passworsdd098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

function isValid(password) {
    if (password.length>8 && !password.includes('password')){
        return true
    }else{
        return false
    }
}
//function isValid(password) {
//    return password.length>8 && !password.includes('password')
//}

console.log(isValid('asdfp'))
console.log(isValid('abc123!@#$%^'))
console.log(isValid('asdfpasdfpoijpassword'))