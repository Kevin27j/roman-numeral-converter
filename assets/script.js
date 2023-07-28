const inputNumber = document.querySelector(".input-number");
const inputButton = document.querySelector(".input-button");
const romanWrapper = document.querySelector(".roman-wrapper");

function getRomanValue() {
    // Function to display converted value to newly created element
    let romanConvertEl = document.createElement("p");
    romanConvertEl.innerHTML = convertToRoman(inputNumber.value)
    romanWrapper.appendChild(romanConvertEl)
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