let valores;

async function getValores() {
    let response = await fetch("valores.json");
    let data = await response.json();
    valores = data;
}
const model = {
    calculaReal: function calculaReal() {
        return [valores["real"]["dolar"],valores["real"]["euro"]];
    },
    calculaDolar: function calculaDolar(){
        return [valores["dolar"]["real"],valores["dolar"]["euro"]];
    },
    calculaEuro: function calculaEuro(){
        return [valores["euro"]["real"],valores["euro"]["dolar"]]
    }
}
getValores();
export default model;