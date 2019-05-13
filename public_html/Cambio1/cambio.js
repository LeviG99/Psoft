const model = {
    real : 0,
    dolar : 0,
    euro : 0,

    calculaReal: function calculaReal() {
        return [this.real * 0.25,this.real * 0.23];
    },
    calculaDolar: function calculaDolar(){
        return [this.dolar * 4,this.dolar * 0.89];
    },
    calculaEuro: function calculaEuro(){
        return [this.euro * 4.40, this.euro * 1.12]
    }
}
export default model;