var campoDigitacao = $(".campo-digitacao");
var tempoInicial = 3;

$(
    function() {
        contarPalavrasFraseInicial();
        contabilizarPalavrasECaracteres();
        iniciarCronometro();
        criarEventoBotaoReiniciar();
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
    var tempoRestante = tempoInicial;

    campoTempoRestante.text(tempoRestante);
    
    campoDigitacao.one("focus", function() {
        var cronometroID = setInterval(function() {
            tempoRestante--;
            campoTempoRestante.text(tempoRestante);
    
            if (tempoRestante == 0) {
                campoDigitacao.attr("disabled", true);
                clearInterval(cronometroID);
            }
            
        }, 1000);
    });
}

function criarEventoBotaoReiniciar() {
    var botao = $("#botao-reiniciar");
    
    botao.click(
        function() {
            $("#contador-palavras").text("0");
            $("#contador-caracteres").text("0");

            campoDigitacao.attr("disabled", false);
            campoDigitacao.val("");

            iniciarCronometro();
        }
    );
}