//Print odd numbers in an array
function(arr) {
    for (var i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num % 2 != 0) {
            console.log(num)
        }
    }
}

(function (arr) {
    for (var i = 0; i < arr.length; i++) {
        let num = arr[i]
        if (num % 2 != 0) {
            console.log(num)
        }
    }
})([5, 17, 24, 39, 46, 75])


//Convert all the strings to title caps in a str arrary

function (arr) {
    var resultarr = []
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].split("");
        word.splice(0, 1, word[0].toUpperCase())
        resultarr.push(word.join(""))
    }
    console.log(resultarr);
}


(function (arr) {
    var resultarr = []
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].split("");
        word.splice(0, 1, word[0].toUpperCase())
        resultarr.push(word.join(""))
    }
    console.log(resultarr);
})(["right", "straight", "circle", "square"]);

//Sum of all numbers in an arr
function(sumarr) {
    var sum = 0;
    for (var i = 0; i < sumarr.length; i++) {
        sum = sum + sumarr[i];
    }
    console.log(sum);
}

(function (sumarr) {
    var sum = 0;
    for (var i = 0; i < sumarr.length; i++) {
        sum = sum + sumarr[i];
    }
    console.log(sum)
})([1, 6, 8, 9, 16, 28, 29, 35, 58, 70])

//Return all the prime numbers in an arr

function (primearr) {
    var resultarr = []
    var count = 0;
    for (i = 0; i < primearr.length; i++) {
        let number = primearr[i];
        count = 0;
        for (j = 2; j < number; j++) {
            if (number % j === 0) {
                count++;
            }
        }
        if (count === 0) {
            resultarr.push(primearr[i])
        }
    }
    return (resultarr)
}



(
    function (primearr) {
        var resultarr = []
        var count = 0;
        for (i = 0; i < primearr.length; i++) {
            let number = primearr[i];
            count = 0;
            for (j = 2; j < number; j++) {
                if (number % j === 0) {
                    count++;
                }
            }
            if (count === 0) {
                resultarr.push(primearr[i])
            }
        }

        return (resultarr)
    })([4, 7, 19, 24, 36, 61])




//Return all the palindromes in an arr

function (palindrome) {
    var result = [];
    for (let i = 0; i < palindrome.length; i++) {
        let word = palindrome[i];
        let reverse = word.split("").reverse().join("")
        if (word == reverse) {
            result.push(word)
        }
    }
    return result;
}



(function (palindrome) {
    var result = [];
    for (let i = 0; i < palindrome.length; i++) {
        let word = palindrome[i];
        let reverse = word.split("").reverse().join("")
        if (word == reverse) {
            result.push(word)
        }
    }
    return result;
})(["abc", "abdba", "abgth", "hkopokh"])

//return medians of two sorted arrays of same size

function(arr1, arr2) {
    const newarr = [...arr1, ...arr2];
    newarr.sort((a, b) => a - b);
    let len = newarr.length / 2;
    var median = (newarr[len] + newarr[len - 1]) / 2
    return median;
}

(function (arr1, arr2) {
    const newarr = [...arr1, ...arr2];
    newarr.sort((a, b) => a - b);
    let len = newarr.length / 2;
    var median = (newarr[len] + newarr[len - 1]) / 2
    return median
})([1, 2, 4, 5], [3, 6, 7, 8])

//Remove duplicates from an Array

function(duplicate) {
    const resultarr = duplicate.filter((num, index) => {
        return duplicate.indexOf(num) === index;
    });
    return resultarr;
}

(function (duplicate) {
    const resultarr = duplicate.filter((num, index) => {
        return duplicate.indexOf(num) === index;
    });
    return resultarr;
})([1, 1, 2, 4, 4, 5, 6])


// Rotate an array by K times

function(arr, k) {
    for (let i = 0; i < k; i++) {
        let num = arr.pop();
        arr.unshift(num);
    }
    console.log(arr);
}


(function (arr, k) {
    for (let i = 0; i < k; i++) {
        let num = arr.pop();
        arr.unshift(num);
    }
    console.log(arr);
})([1, 2, 3, 4], 2)