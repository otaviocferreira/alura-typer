var campoDigitacao = $(".campo-digitacao");

function criarEventoBotaoReiniciar() {
    var botao = $("#botao-reiniciar");
    
    botao.click(
        function() {            
            var qtdPalavras = $("#contador-palavras").text();
            var usuario = "Otavio";

            gravarPlacar(usuario, qtdPalavras);

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

function criarEventoBotaoPlacar() {
    var botao = $("#botao-placar");
    
    botao.click(
        function() {
            var placar = $("#placar");

            placar.fadeToggle(100);  

            var posicaoPlacar = placar.offset().top;

            $("html").animate({
                scrollTop: 200
            }, 500)
        }
    );
}