
function partida (num1 , num2){
    let resultado = num1 - num2
    return resultado
}
function rank(){ 
let resultadoRank = partida (90, 10)
let nivel = " "


if (resultadoRank <= 10 ){
    nivel = "Ferro"
} else if (resultadoRank <= 20){
    nivel = "Bronze"
} else if (resultadoRank <= 50){
    nivel= "Prata"
} else if ( resultadoRank <= 80){
    nivel= "Ouro"
} else if (resultadoRank <= 90){
    nivel = "Diamante"
} else if (resultadoRank <= 100){
    nivel = "Lendário"
} else if ( resultadoRank >= 101 ){
    nivel = "Imortal"
}


	
    return ` O Herói tem de saldo de ${resultadoRank} vitórias e está no nível de ${nivel}`
}

console.log(rank())
	