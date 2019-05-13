import model from './cambio.js';

const $real = document.getElementById("real");
const $dolar = document.getElementById("dolar");
const $euro = document.getElementById("euro");


function calculaReal() {
    const valores = model.calculaReal();
    $dolar.value = (($real.value)*valores[0]).toFixed(2);
    $euro.value = (($real.value)*valores[1]).toFixed(2);
}
function calculaDolar(){
    const valores = model.calculaDolar();
    $real.value = (($dolar.value)*valores[0]).toFixed(2);
    $euro.value = (($dolar.value)*valores[1]).toFixed(2);
}
function calculaEuro(){
    const valores = model.calculaEuro();
    real.value = (($euro.value)*valores[0]).toFixed(2);
    dolar.value = (($euro.value)*valores[1]).toFixed(2);
}

$real.onkeyup = calculaReal;
$dolar.onkeyup = calculaDolar;
$euro.onkeyup = calculaEuro;