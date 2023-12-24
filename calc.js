//to make all bUTTONs funCTIONal
let string = "";
let buttons = document.querySelectorAll('.BUTTON');
function binaryToDecimal(binary) {
    return parseInt (binary,2)
}
function decimalToBinary(decimal) {
    return (decimal>>>0).toString(2);
}
function decimalToHex(hex) {
    return (hex >>> 0).toString(16)
}
function decimalToOct(oct) {
    return (oct>>>0).toString(8)
}
Array.from(buttons).forEach((BUTTON) => {
    BUTTON.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'Dec') {
            var binaryInput = document.querySelector('input').value;
            var decimalOutput = binaryToDecimal(binaryInput);
            document.querySelector('input').value = decimalOutput;
        }
        else if (e.target.innerHTML == 'Bin') {
            var decimalInput = document.querySelector('input').value;
            console.log(decimalInput)
            var binaryOutput = decimalToBinary(decimalInput);
            console.log(binaryOutput)
            document.querySelector('input').value = binaryOutput;
        }
        else if (e.target.innerHTML == 'Hex') {
            var decimalInput = document.querySelector('input').value;
            var hexOutput = decimalToHex(decimalInput);
            document.querySelector('input').value = hexOutput;
        } else if (e.target.innerHTML == 'Oct') {
            var decimalInput = document.querySelector('input').value;
            var octOutput = decimalToOct(decimalInput);
            document.querySelector('input').value = octOutput;
        }

        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})