//print odd numbers in array
const oddarr = [1, 2, 3, 5, 6, 8, 9, 15, 18, 20]
const odd = oddarr.filter((a) => a % 2 !== 0)
console.log(odd)

//convert string to title caps in string array

const capitals = (array) => {
    var resultarr = []
    for (let i = 0; i < array.length; i++) {
        let word = array[i].split("");
        word.splice(0, 1, word[0].toUpperCase())
        resultarr.push(word.join(""))
    }
    return resultarr;
}

console.log(capitals(["abc", "bgt", "hgt"]))

//sum of all numbers in array
const sumarr = [1, 6, 8, 9, 16, 28, 29, 35, 58, 70]
const sum = sumarr.reduce((a, b) => a + b)
console.log(sum)

//prime numbers in an array


const primearr = [1, 6, 7, 9, 17, 28, 29, 35, 58, 70]

const primeno = (number) => {
    var resultarr = [];
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true;
}

for (let i = 0; i < primearr.length; i++) {
    let num = primearr[i]
    var result = primeno(num);
    console.log(result)
    if (result && num !== 1) {
        resultarr.push(num)
    }
}
console.log(resultarr)

//return all palindromes in an array

const palindrome = (array) => {
    var result = [];
    for(let i=0;i<array.length;i++) {
        let word = array[i];
        let reverse = word.split("").reverse().join("")
        if(word==reverse){
            result.push(word)
        }
    }
    return result;
}

console.log(palindrome(["abc","abdba","abgth","hkopokh"]))

