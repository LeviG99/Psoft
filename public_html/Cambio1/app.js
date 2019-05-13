import model from './cambio.js';

const $real = document.getElementById("real");
const $dolar = document.getElementById("dolar");
const $euro = document.getElementById("euro");


function calculaReal() {
    model.real = parseFloat($real.value);
    const valores = model.calculaReal();
    dolar.value = valores[0].toFixed(2);
    euro.value = valores[1].toFixed(2);
}
function calculaDolar(){
    model.dolar = parseFloat($dolar.value);
    const valores = model.calculaDolar();
    real.value = valores[0].toFixed(2);
    euro.value = valores[1].toFixed(2);
}
function calculaEuro(){
    model.euro = parseFloat($euro.value);
    const valores = model.calculaEuro();
    real.value = valores[0].toFixed(2);
    dolar.value = valores[1].toFixed(2);
}

$real.onkeyup = calculaReal;
$dolar.onkeyup = calculaDolar;
$euro.onkeyup = calculaEuro;