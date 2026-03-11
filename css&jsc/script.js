function calcular(){
    let weatherValue = document.getElementById('weathertValue').value;
    let selectFahrenheitTo = document.getElementById('selectValueFahrenheit').checked;
    let selectCelciusTo = document.getElementById('selectValueCelcius').checked;

    if (selectFahrenheitTo != true){
        if (selectCelciusTo != true){
            alert("selecione uma conversão")
        }else {
            if (weatherValue == ""){
                alert("defina um valor em celcius")
            }else {
                weather = (weatherValue * (9 / 5)) + 32;
                document.getElementById('answer').innerHTML = weather;
            }
        }
    }else {
        if (weatherValue == ""){
            alert("defina um valor em fahrenheit")
        }else {
            weather = (weatherValue - 32) / (9 / 5);
            document.getElementById('answer').innerHTML = weather;
        }
    }
}
