document.getElementById('convert-button').addEventListener('click', () => {
    console.log('Button clicked'); // Debugging line
    const temperatureInput = document.getElementById('temperature-input').value;
    console.log('Temperature input:', temperatureInput); // Debugging line
    const unitSelect = document.getElementById('unit-select').value;
    console.log('Selected unit:', unitSelect); // Debugging line
    const resultElement = document.getElementById('converted-temperature');

    const temperature = parseFloat(temperatureInput);

    if (isNaN(temperature)) {
        resultElement.textContent = 'Please enter a valid number.';
        return;
    }

    let convertedTemp;
    let unit;

    switch (unitSelect) {
        case 'celsius':
            convertedTemp = {
                fahrenheit: (temperature * 9/5) + 32,
                kelvin: temperature + 273.15
            };
            unit = 'Celsius';
            break;
        case 'fahrenheit':
            convertedTemp = {
                celsius: (temperature - 32) * 5/9,
                kelvin: (temperature - 32) * 5/9 + 273.15
            };
            unit = 'Fahrenheit';
            break;
        case 'kelvin':
            convertedTemp = {
                celsius: temperature - 273.15,
                fahrenheit: (temperature - 273.15) * 9/5 + 32
            };
            unit = 'Kelvin';
            break;
    }

    resultElement.innerHTML = `
        Temperature in Celsius: ${convertedTemp.celsius ? convertedTemp.celsius.toFixed(2) : 'N/A'} °C<br>
        Temperature in Fahrenheit: ${convertedTemp.fahrenheit ? convertedTemp.fahrenheit.toFixed(2) : 'N/A'} °F<br>
        Temperature in Kelvin: ${convertedTemp.kelvin ? convertedTemp.kelvin.toFixed(2) : 'N/A'} K
    `;
});
