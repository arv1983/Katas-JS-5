//Kata1

reverseString('string')

function reverseString(string) {
    return string.split('').reverse().join('');
}

testReverseString1();
testReverseString2();


function testReverseString1() {
    let resultado = reverseString('teste');
    console.assert(resultado === 'etset', {
        "function": "reverseString(string)",
        "expected": 'etset',
        "resultado": resultado
    });
}

function testReverseString2() {
    let resultado = reverseString('teste');
    console.assert(typeof(resultado) == 'string', {
        "function": "reverseString(string)",
        "expected": 'string',
        "resultado": resultado
    });
}


//Kata2

function testReverseSentence1() {
    let resultado = reverseSentence('frase de teste');
    console.assert(resultado === 'teste de frase', {
        "function": "reverseSentence(frase)",
        "expected": 'teste de frase',
        "resultado": resultado
    });
}

function testReverseSentence2() {
    let resultado = reverseSentence('frase de teste');
    console.assert(typeof(resultado) === 'string', {
        "function": "reverseSentence(frase)",
        "expected": 'teste de frase',
        "resultado": resultado
    });
}


reverseSentence('frase de teste');

function reverseSentence(frase) {
    return frase.split(' ').reverse().join(' ');
}


// kata3

function testMinimumValue1() {
    let resultado = minimumValue([4, 2, 1, 3])
    console.assert(typeof(resultado) === 1, {
        "function": "minimumValue(arr)",
        "expected": '1',
        "resultado": resultado
    });
}

function testMinimumValue2() {
    let resultado = minimumValue([4, 2, 1, 3])
    console.assert(typeof(resultado) === 'number', {
        "function": "minimumValue(arr)",
        "expected": 'number',
        "resultado": resultado
    });
}

let arr = [4, 2, 1, 3];

console.log(minimumValue(arr));

function minimumValue(arr) {
    arr.sort(function(a, b) { return a - b });
    return arr[0];
}

//kata4

function testMaximumValue1() {
    let resultado = maximumValue([4, 2, 1, 3])
    console.assert(resultado === 4, {
        "function": "maximumValue([4, 2, 1, 3])",
        "expected": '4',
        "resultado": resultado
    });
}


function testMaximumValue2() {
    let resultado = maximumValue([4, 2, 1, 3])
    console.assert(typeof(resultado) === 'number', {
        "function": "maximumValue([4, 2, 1, 3])",
        "expected": 'number',
        "resultado": resultado
    });
}

console.log(maximumValue(arr))

function maximumValue(arr) {
    arr.sort(function(a, b) { return b - a });
    return arr[0];
}

//kata5


function testCalculateRemainder1() {
    let resultado = calculateRemainder(6, 2);
    console.assert(resultado === 3, {
        "function": "calculateRemainder(6 , 2)",
        "expected": '3',
        "resultado": resultado
    });
}


function testCalculateRemainder2() {
    let resultado = calculateRemainder(6, 2);
    console.assert(typeof(resultado) === 'number', {
        "function": "calculateRemainder(6 , 2)",
        "expected": 'number',
        "resultado": resultado
    });
}
let divd = 6;
let divs = 2;
calculateRemainder(divd, divs);

function calculateRemainder(div) {
    return divd / divs;
}

//kata6 ///////////////////////////////////////// PENSAR e RETORNAR 

function testDistinctValues1() {

}

function testDistinctValues2() {

}

arr = [1, 3, 5, 3, 7, 3, 1, 1, 5];
distinctValues(arr);

function distinctValues(arr) {
    return [new Set(arr)];
}

//Kata 7

function testCountValues1() {

}

function testCountValues2() {

}
arr = [1, 3, 5, 3, 7, 3, 1, 1, 5];
console.log(countValues(arr))

function countValues(arr) {
    return arr.reduce((map, val) => { map[val] = (map[val] || 0) + 1; return map }, {});
}

// Kata 8

testEvaluateExpression1() {

}
testEvaluateExpression2() {

}

evaluateExpression() {

}