const { gets, print } = require("./funcoesAuxiliares");

let maiorValor = 0;

while(true){
    const numeroSorteado = gets();
    if(numeroSorteado === -1){
        break;
    }
    if(numeroSorteado> maiorValor){
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);