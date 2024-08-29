const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');


celsiusInput.addEventListener('keyup', convertFromCelsius);
fahrenheitInput.addEventListener('keyup', convertFromFahrenheit);
kelvinInput.addEventListener('keyup',convertFromKelvin);


//conversion from celsius
function convertFromCelsius() {
    if (Number.parseFloat(celsiusInput.value)) {
        let value = Number.parseFloat(celsiusInput.value)
        let kelvinValue = value + 273.15;
        let fahrenheitValue = (value * 1.8) + 32;
        kelvinInput.value = kelvinValue;
        fahrenheitInput.value = fahrenheitValue;

    }
    else {
        kelvinInput.value = 0;
        fahrenheitInput.value = 0;
    }
}

//conversion from fahrenheit
function convertFromFahrenheit() {
    if (Number.parseFloat(fahrenheitInput.value)) {
        let value = Number.parseFloat(fahrenheitInput.value);
        let celsiusValue = (value - 32) / 1.8;
        let kelvinValue = ((value - 32) / 1.8) + 273.15;
        celsiusInput.value = celsiusValue;
        kelvinInput.value = kelvinValue;
    }
    else {
        celsiusInput.value = 0;
        kelvinInput.value = 0;
    }
}

//conversion from kelvin
function convertFromKelvin() {
    if (Number.parseFloat(kelvinInput.value)) {
        let value = Number.parseFloat(kelvinInput.value);
        let celsiusValue = value - 273.15;
        let fahrenheitValue = ((value - 273.15) * 1.8) + 32;
        celsiusInput.value = celsiusValue;
        fahrenheitInput.value = fahrenheitValue;
    }
    else {
        celsiusInput.value = 0;
        fahrenheitInput.value = 0;
    }
}