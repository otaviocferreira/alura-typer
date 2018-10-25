$("#botao-sync").click(sincronizarPlacar);

function gravarPlacar(usuario, qtdPalavras) {
    var corpoTabela = $("#placar").find("tbody");

    corpoTabela.prepend(montarLinha(usuario, qtdPalavras));
}

function montarLinha(usuario, qtdPalavras) {
    var linha = $("<tr>");
    var campoUsuario = $("<td>").text(usuario);
    var campoPalavras = $("<td>").text(qtdPalavras);  
    var campoRemover = $("<td>");

    var botaoRemover = $("<a>").attr("href", "#").addClass("botao-remover");

    associarEventoRemoçao(botaoRemover);

    var iconeRemover = $("<i>").addClass("small").addClass("material-icons").text("delete");

    botaoRemover.append(iconeRemover);
    campoRemover.append(botaoRemover);

    linha.append(campoUsuario);
    linha.append(campoPalavras);
    linha.append(campoRemover);

    return linha;
}

function associarEventoRemoçao(botaoRemover) {
    botaoRemover.click(function(event) {
        event.preventDefault();

        var linha = $(this).parent().parent();

        linha.fadeOut(500);
        
        setTimeout(function() {
            linha.remove();
        }, 500);
        
    });
}

function sincronizarPlacar() {
    $("#spinner-placar").toggle();
    var placar = [];
    var linhas = $("tbody>tr");

    linhas.each(function() {
        var usuario = $(this).find("td:nth-child(1)").text();
        var palavras = $(this).find("td:nth-child(2)").text();

        var score = {
            usuario: usuario,
            pontos: palavras
        };

        placar.push(score);
    });

    enviarPlacar(placar);
}

function enviarPlacar(placar) {
    var dados={
        placar: placar
    };

    $.post("http://localhost:3000/placar", dados, function() {
        $(".tooltip").tooltipster("open").tooltipster("content", "Sucesso ao sincronizar!");      
    })
    .fail(function() {
        $(".tooltip").tooltipster("open").tooltipster("content", "Falha ao sincronizar!"); 
    })
    .always(function() {        
        $("#spinner-placar").toggle();

        setTimeout(function() {
            $(".tooltip").tooltipster("close"); 
        }, 3000);
    });
}

function atualizarPlacar() {
    $.get("http://localhost:3000/placar", function(data) {
        $(data).each(function() {
            gravarPlacar(this.usuario, this.pontos);
        });
    });
}