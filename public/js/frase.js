function contarPalavrasFraseInicial() {
    var frase = $(".frase").text();
    var qtdPalavras = $("#qtd-palavras");
    var palavras = frase.trim().split(" ");
    qtdPalavras.text(palavras.length);
}