
let nivel = ""
let saldoRankeadas = calcular(70,10)

function calcular(vitorias,derrotas){
    return vitorias - derrotas
}



function definirNivel(){
    if(saldoRankeadas <= 10){
        nivel = "ferro"
    }else if(saldoRankeadas >=11 && saldoRankeadas<= 20 ){
        nivel = "Bronze"
    }else if(saldoRankeadas >=21 && saldoRankeadas <= 50){
        nivel = "Prata"
    }else if(saldoRankeadas >=51 && saldoRankeadas <= 80){
        nivel ="Ouro"
    }else if(saldoRankeadas >=81 && saldoRankeadas <= 90){
        nivel= "Diamante"
    }else if(saldoRankeadas >= 91 && saldoRankeadas <=100){
        nivel="Lendario"
    }else {
        nivel = "Imortal"
    }
    return nivel
}

console.log(`O herói tem salde de ${saldoRankeadas} vitorias e esta no nível de ${definirNivel()}`)


