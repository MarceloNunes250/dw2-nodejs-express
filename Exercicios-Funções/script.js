//ATIVIDADE 1
const Name = "Marcelo Nunes";
const Cidade = "Juquiá";
const Idade = "18 anos";

function userMessage() {
  document.write(
    `<p>Meu nome é ${Name} tenho ${Idade} e moro em ${Cidade} </p>`,
  );
}
userMessage();

//ATIVIDADE 2
const n1 = 10;
const n2 = 2;

function divi(n1, n2) {
  let resultado = n1 / n2;

  document.write(`<p>A divisão de ${n1} por ${n2} é ${resultado}</p>`);
}
divi(n1, n2);

//Atividade 3

const nu1 = 20;
const nu2 = 10;
const nu3 = 30;
function multiplicar(nu1, nu2, nu3) {
  return nu1 * nu2 * nu3;
}
document.write(
  `A multiplicação de ${nu1} com ${nu2} e ${nu3} é igual a ${multiplicar(nu1, nu2, nu3)}`,
);

//Atividade 4

const numb = 16;
function maiorIdade() {
  if (numb >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}
document.write(`<p>Você é ${maiorIdade(numb)}!</p>`);

//Atividade 5

const verificarAprovacao = function(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    
    if (media <= 5) {
        return "Reprovado";
    } else {
        return "Aprovado";
    }
};
document.write(verificarAprovacao(4, 5));

//Atividade 6

const triplo = (y) => {
  return y * 3;
};
const y = 20;

document.write(`<p>O triplo de ${y} é ${triplo(y)}</p>`);

//Atividade 7

const somar = (num1, num2, num3, num4) => { 
    return num1 + num2 + num3 + num4; 
}; 

const num1 = 10; 
const num2 = 20; 
const num3 = 30; 
const num4 = 40; 

document.write(`O resultado da soma é igual a ${somar(num1, num2, num3, num4)}`);

//Atividade 8

(function(nome) {
    document.write(`Olá, ${nome}! Seja muito bem-vindo.`);
})("Carlos");

