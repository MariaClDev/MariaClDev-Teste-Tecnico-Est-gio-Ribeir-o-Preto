// 1. Fibonacci Sequence
function checkFibonacci() {
    const num = parseInt(document.getElementById("fibonacciInput").value);
    let a = 0, b = 1;
    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    const result = (b === num || num === 0)
        ? `${num} pertence à sequência de Fibonacci.`
        : `${num} não pertence à sequência de Fibonacci.`;
    document.getElementById("fibonacciResult").innerText = result;
}

// 2. Count occurrences of 'a'
function countLetterA() {
    const str = document.getElementById("stringInput").value.toLowerCase();
    const count = str.split('a').length - 1;
    document.getElementById("countResult").innerText = `A letra 'a' aparece ${count} vezes.`;
}

// 3. Calculate final value of SOMA
function calculateSum() {
    let soma = 0, k = 1, indice = 12;
    while (k < indice) {
        k++;
        soma += k;
    }
    document.getElementById("sumResult").innerText = `O valor final de SOMA é ${soma}.`;
}

// 4. Complete the sequence
function completeSequence() {
    document.getElementById("sequenceA").innerText = "9";  // 1, 3, 5, 7, 9
    document.getElementById("sequenceB").innerText = "128";  // 2, 4, 8, 16, 32, 64, 128
    document.getElementById("sequenceC").innerText = "49";  // 0, 1, 4, 9, 16, 25, 36, 49
    document.getElementById("sequenceD").innerText = "100";  // 4, 16, 36, 64, 100
    document.getElementById("sequenceE").innerText = "13";  // 1, 1, 2, 3, 5, 8, 13
    document.getElementById("sequenceF").innerText = "20";  // 2, 10, 12, 16, 17, 18, 19, 20
}

