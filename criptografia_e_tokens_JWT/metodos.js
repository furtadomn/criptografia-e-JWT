// ---- método charCodeAt

const mensagem = "ALURA";

for (let i = 0; i < mensagem.length; i++) {
 console.log(mensagem.charCodeAt(i));
}

// ---- método fromCharCode

const mensagemDecimal = String.fromCharCode(65, 76, 85, 82, 65);
console.log(mensagemDecimal);

const mensagemHexa = String.fromCharCode(0x41, 0x4C, 0x55, 0x52, 0x41);
console.log(mensagemHexa);
