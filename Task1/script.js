document.getElementById("converterForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const convertFrom = document.getElementById("convertFrom").value;
    const convertTo = document.getElementById("convertTo").value;
    
    let result = 0;

    if (convertFrom === convertTo) {
        result = inputTemp;
    } else if (convertFrom === "Celsius") {
        if (convertTo === "Fahrenheit") {
            result = (inputTemp * 9/5) + 32;
        } else if (convertTo === "Kelvin") {
            result = inputTemp + 273.15;
        }
    } else if (convertFrom === "Fahrenheit") {
        if (convertTo === "Celsius") {
            result = (inputTemp - 32) * 5/9;
        } else if (convertTo === "Kelvin") {
            result = (inputTemp - 32) * 5/9 + 273.15;
        }
    } else if (convertFrom === "Kelvin") {
        if (convertTo === "Celsius") {
            result = inputTemp - 273.15;
        } else if (convertTo === "Fahrenheit") {
            result = (inputTemp - 273.15) * 9/5 + 32;
        }
    }

    document.getElementById("result").innerHTML = `Result: ${result.toFixed(2)} °${convertTo}`;
});
