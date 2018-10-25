function contarPalavrasFraseInicial() {
    var frase = $(".frase").text();
    var qtdPalavras = $("#qtd-palavras");
    var palavras = frase.trim().split(" ");
    qtdPalavras.text(palavras.length);
}

$("#botao-frase").click(buscarFraseAleatoria);
$("#botao-frase-id").click(buscarFrase);

function buscarFraseAleatoria() {
    $("#spinner").toggle();
    $(".frase").toggle();
    $.get("http://localhost:3000/frases", trocarFraseAleatoria)
    .fail(function() {
        mostrarErro()
    })
    .always(function() {
        $("#spinner").toggle();
        $(".frase").toggle();
    });    
}

function trocarFraseAleatoria(frases) {
    var numeroAleatorio = Math.floor(Math.random() * frases.length);

    $(".frase").text(frases[numeroAleatorio].texto);
    contarPalavrasFraseInicial();
    atualizarTempo(frases[numeroAleatorio].tempo);
}

function buscarFrase() {
    $("#spinner").toggle();
    $(".frase").toggle();

    var fraseId = $("#campo-frase-id").val();
    var dados = {
        id: fraseId
    };

    $.get("http://localhost:3000/frases", dados, trocarFrase)
    .fail(function() {
        mostrarErro();
    })
    .always(function() {
        $("#spinner").toggle();
        $(".frase").toggle();
    });    
}

function trocarFrase(frase) {
    console.log(frase);
    
    $(".frase").text(frase.texto);
    contarPalavrasFraseInicial();
    atualizarTempo(frase.tempo);
}

function mostrarErro() {
    $("#erro").toggle();

    setTimeout(function() {
        $("#erro").toggle();
    }, 3000);
}

function buscarTodasAsFrases() {
    $.get("http://localhost:3000/frases", montarSliderDasFrases)
    .fail(function() {
        mostrarErro()
    })
    .always(function() {
        $('#frases').slick();
    });    
}

function montarSliderDasFrases(frases) {
    $(frases).each(function() {
        $("#frases").append("<div>" + this._id + " - " + this.texto + "</div>");
    });
}