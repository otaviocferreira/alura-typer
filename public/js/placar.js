function gravarPlacar() {
    var qtdCaracteres = $("#contador-caracteres").text();
    var qtdPalavras = $("#contador-palavras").text();
    var usuario = "Otavio";

    var corpoTabela = $("#placar").find("tbody");

    corpoTabela.prepend(montarLinha(usuario, qtdPalavras, qtdCaracteres));
}

function montarLinha(usuario, qtdPalavras, qtdCaracteres) {
    var linha = $("<tr>");
    var campoUsuario = $("<td>").text(usuario);
    var campoPalavras = $("<td>").text(qtdPalavras);
    var campoCaracteres = $("<td>").text(qtdCaracteres);    
    var campoRemover = $("<td>");

    var botaoRemover = $("<a>").attr("href", "#").addClass("botao-remover");

    associarEventoRemoçao(botaoRemover);

    var iconeRemover = $("<i>").addClass("small").addClass("material-icons").text("delete");

    botaoRemover.append(iconeRemover);
    campoRemover.append(botaoRemover);

    linha.append(campoUsuario);
    linha.append(campoPalavras);
    linha.append(campoCaracteres);
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