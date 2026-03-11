function calcular(){
    let weatherValue = document.getElementById('weathertValue').value;
    let selectFahrenheitTo = document.getElementById('selectValueFahrenheit').checked;
    let selectCelciusTo = document.getElementById('selectValueCelcius').checked;

    if (selectFahrenheitTo != true){
        if (selectCelciusTo != true){
            document.getElementById('consoleCheckup').innerHTML = "selecione uma conversão"
        }else {
            if (weatherValue == ""){
                document.getElementById('consoleCheckup').innerHTML = "defina um valor em celsius"
            }else {
                weather = (weatherValue * (9 / 5)) + 32;
                document.getElementById('answer').value = weather;
                document.getElementById('medida').innerHTML = "°F";
            }
        }
    }else {
        if (weatherValue == ""){
            document.getElementById('consoleCheckup').innerHTML = "defina um valor em fahrenheit"
        }else {
            weather = (weatherValue - 32) / (9 / 5);
            document.getElementById('answer').value = weather;
            document.getElementById('medida').innerHTML = "°C";
        }
    }
}
