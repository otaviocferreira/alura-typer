var frase = $(".frase").text();
var qtdPalavras = $("#qtd-palavras");

var palavras = frase.trim().split(" ");

console.log(palavras);


qtdPalavras.text(palavras.length);

