function insertValues(num) {
    document.querySelector('#input-value').value += num
}

function calculate() {
    const input = document.querySelector('#input-value').value
    document.querySelector('#input-value').value = eval(input)
}

function clearInput() {
    document.querySelector('#input-value').value = ""
}

function invertValue() {
    calculate()

    const input = document.querySelector('#input-value').value
    document.querySelector('#input-value').value = input * -1
}

function percent() {
    calculate()

    const input = document.querySelector('#input-value').value
    document.querySelector('#input-value').value = input / 100
}