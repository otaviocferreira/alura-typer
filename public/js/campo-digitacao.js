var campoDigitacao = $(".campo-digitacao");

function contabilizarPalavrasECaracteres() {
    campoDigitacao.on("input", function() {
        var conteudo = campoDigitacao.val();
        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        var qtdCaracteres = conteudo.length;
    
        $("#contador-palavras").text(qtdPalavras);
        $("#contador-caracteres").text(qtdCaracteres);
    });
}

function desativarCampoDigitacao() {
    campoDigitacao.attr("disabled", true);
    campoDigitacao.addClass("campo-desativado");
}

function validarDigitacao() {
    campoDigitacao.on("input", function() {        
        var textoDigitado = campoDigitacao.val();
        var fraseComparavel = $(".frase").text().substring(0, textoDigitado.length);

        if (textoDigitado == fraseComparavel) {
            campoDigitacao.addClass("borda-verde");
            campoDigitacao.removeClass("borda-vermelha");
        } else {
            campoDigitacao.addClass("borda-vermelha");
            campoDigitacao.removeClass("borda-verde");
        }
    });
}