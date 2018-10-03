var tempoInicial = 3;

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