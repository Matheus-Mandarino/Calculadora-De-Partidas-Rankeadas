//função que calcula o nivel do heroi
let xpDoHeroi = subtrai(110, 5)

function subtrai(vitorias, derrotas){
	let subtracao = vitorias - derrotas
    return subtracao
}    
 
// Utilize uma estrutura de decisão para determinar o nível do herói com base na XP
let nivelDoHeroi;

if (xpDoHeroi < 10) {
  nivelDoHeroi ="Ferro"
}

else if (xpDoHeroi >= 11 && xpDoHeroi <= 20){
  nivelDoHeroi = "Bronze"
}

else if (xpDoHeroi >= 21 && xpDoHeroi <= 50){
  nivelDoHeroi = "Prata"
}
else if (xpDoHeroi >= 51 && xpDoHeroi <= 80) {
  nivelDoHeroi = "Ouro"
} 
else if (xpDoHeroi >= 81 && xpDoHeroi <= 90) {
  nivelDoHeroi = "Diamante"
}
else if (xpDoHeroi >= 91 && xpDoHeroi <= 100) {
  nivelDoHeroi = "Lendário"
} 
else {
  nivelDoHeroi = "Imortal"
}

// Exiba a mensagem com o saldo e o nível do herói
console.log("O Herói tem saldo de " + xpDoHeroi + " está no nível de " + nivelDoHeroi);