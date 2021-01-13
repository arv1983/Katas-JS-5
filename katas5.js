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
        "resultado": typeof(resultado)
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
        "resultado": typeof(resultado)
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
        "resultado": typeof(resultado)
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
        "resultado": typeof(resultado)
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
        "resultado": typeof(resultado)
    });
}
let divd = 6;
let divs = 2;
calculateRemainder(divd, divs);

function calculateRemainder(div) {
    return divd / divs;
}

//kata6

function testDistinctValues1() {
    let resultado = distinctValues(6, 2);
    console.assert(typeof(resultado) === 'number', {
        "function": "distinctValues(6, 2)",
        "expected": 'number',
        "resultado": typeof(resultado)
    });
}

function testDistinctValues2() {
    let resultado = distinctValues(6, 2);
    console.assert(resultado === 3, {
        "function": "distinctValues(6, 2)",
        "expected": '3',
        "resultado": resultado
    });
}

arr = [1, 3, 5, 3, 7, 3, 1, 1, 5];
distinctValues(arr);

function distinctValues(arr) {
    return [new Set(arr)];
}

//kata7 ///////////////////////////////////////// PENSAR e RETORNAR 
testCountValues1();

function testCountValues1() {
    let resultado = countValues(arr);
    var esperado = [];
    esperado = [
        [1, 3],
        [3, 3],
        [5, 2],
        [7, 1]
    ];
    console.assert(Array.isArray(resultado) == true, {
        "function": "countValues(arr)",
        "expected": 'true',
        "resultado": Array.isArray(resultado)
    });
}
testCountValues2();

function testCountValues2() {
    let resultado = countValues(arr);
    var esperado = [];
    esperado = [
        [1, 3],
        [3, 3],
        [5, 2],
        [7, 1]
    ];
    console.assert(resultado == esperado, {
        "function": "countValues(arr)",
        "expected": '[[1, 3][3, 3][5, 2][7, 1]]',
        "resultado": resultado
    });
}
arr3 = [1, 3, 5, 3, 7, 3, 1, 1, 5];
console.log(countValues(arr3))

function countValues(arr) {
    let arrayLetras = [];
    for (let i = 0; i < arr.length; i++) {
        let quantas = arr.filter(num => num === arr[i]).length;
        arrayLetras.push([arr[i], quantas]);
    }

    let ok = arrayLetras.filter(function(item) {
        return arrayLetras.hasOwnProperty(item) ? false : (arrayLetras[item] = true);
    });

    return ok;
}

//kata8 ///////////////////////////////////////// PENSAR e RETORNAR 

function testEvaluateExpression1() {

}

function testEvaluateExpression2() {

}

function evaluateExpression() {

}