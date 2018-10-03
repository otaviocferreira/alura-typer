var campoDigitacao = $(".campo-digitacao");

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