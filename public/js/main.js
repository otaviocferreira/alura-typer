var frase = $(".frase").text();
var qtdPalavras = $("#qtd-palavras");
var palavras = frase.trim().split(" ");
qtdPalavras.text(palavras.length);

var campoDigitacao = $(".campo-digitacao");
campoDigitacao.on("input", function() {
    var conteudo = campoDigitacao.val();
    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    var qtdCaracteres = conteudo.length;

    $("#contador-palavras").text(qtdPalavras);
    $("#contador-caracteres").text(qtdCaracteres);
});