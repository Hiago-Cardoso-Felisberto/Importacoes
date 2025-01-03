const entradas = [5, 50, 10, 98, 23, 56, 92, 200, 150, 2];
let i = 0;

function gets(){
    if(i < entradas.length){
    const valor = entradas[i];
    i++;
    return valor;
    }
return -1;
};

function print(texto){
    console.log(texto);
};

module.exports = { gets, print };