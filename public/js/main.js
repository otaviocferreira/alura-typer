var campoDigitacao = $(".campo-digitacao");
var tempoInicial = 10;

$(
    function() {
        contarPalavrasFraseInicial();
        contabilizarPalavrasECaracteres();
        iniciarCronometro();
        criarEventoBotaoReiniciar();
        validarDigitacao();
    }
);

function contarPalavrasFraseInicial() {
    var frase = $(".frase").text();
    var qtdPalavras = $("#qtd-palavras");
    var palavras = frase.trim().split(" ");
    qtdPalavras.text(palavras.length);
}

function contabilizarPalavrasECaracteres() {
    campoDigitacao.on("input", function() {
        var conteudo = campoDigitacao.val();
        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        var qtdCaracteres = conteudo.length;
    
        $("#contador-palavras").text(qtdPalavras);
        $("#contador-caracteres").text(qtdCaracteres);
    });
}

function iniciarCronometro() {    
    var campoTempoRestante = $("#tempo-restante");

    campoTempoRestante.text(tempoInicial);
    
    campoDigitacao.one("focus", function() {
        var tempoRestante = tempoInicial;

        var cronometroID = setInterval(function() {
            tempoRestante--;
            campoTempoRestante.text(tempoRestante);

            if (tempoRestante == 0) {
                desativarCampoDigitacao();
                clearInterval(cronometroID);
            }
            
        }, 1000);
    });
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

function criarEventoBotaoReiniciar() {
    var botao = $("#botao-reiniciar");
    
    botao.click(
        function() {
            gravarPlacar();

            $("#contador-palavras").text("0");
            $("#contador-caracteres").text("0");

            campoDigitacao.removeClass("borda-vermelha");
            campoDigitacao.removeClass("borda-verde");
            campoDigitacao.removeClass("campo-desativado");

            campoDigitacao.attr("disabled", false);
            campoDigitacao.val("");

            iniciarCronometro();
        }
    );
}

function gravarPlacar() {
    var qtdCaracteres = $("#contador-caracteres").text();
    var qtdPalavras = $("#contador-palavras").text();
    var usuario = "Otavio";
    var botaoRemover = "<a href='#' class='botao-remover'><i class='small material-icons'>delete</i></a>";

    var corpoTabela = $("#placar").find("tbody");

    corpoTabela.prepend("<tr>" +
                            "<td>" + usuario + "</td>" +
                            "<td>" + qtdPalavras + "</td>" +
                            "<td>" + qtdCaracteres + "</td>" +
                            "<td>" + botaoRemover + "</td>" +
                        "</tr>");
}

function desativarCampoDigitacao() {
    campoDigitacao.attr("disabled", true);
    campoDigitacao.addClass("campo-desativado");
}