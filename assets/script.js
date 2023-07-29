const inputNumber = document.querySelector(".input-number");
const inputButton = document.querySelector(".input-button");
const romanWrapper = document.querySelector(".output-wrapper");

function getRomanValue() {
    let romanSubWrapper = romanWrapper.querySelector(".sub-wrapper");
    let romanSymbol = romanSubWrapper.querySelector(".roman-sym");
    

    // check if the result output already exist
    if(!romanSymbol){
        // If does not exist, create one
        romanSymbol = document.createElement("p");
        romanSymbol.setAttribute("class", "roman-sym");
        romanSubWrapper.appendChild(romanSymbol);
    }
    romanSymbol.innerHTML = convertToRoman(inputNumber.value);
}

function convertToRoman(num) {
    const romanNumerlMap = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];
    let result = "";
    for (let numerals of romanNumerlMap) {
        while (num >= numerals.value) {
            result += numerals.symbol;
            num -= numerals.value;
        }
    }
    return result;
}

inputButton.addEventListener("click", getRomanValue);