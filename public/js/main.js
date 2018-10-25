$(
    function() {
        contarPalavrasFraseInicial();
        contabilizarPalavrasECaracteres();
        iniciarCronometro();
        criarEventoBotaoReiniciar();
        criarEventoBotaoPlacar();
        validarDigitacao();
        atualizarPlacar();

        buscarTodasAsFrases();

        $('#usuarios').selectize({
            create: true,
            sortField: 'text'
        });

        $(".tooltip").tooltipster({
            trigger: 'custom'
        });
    }
);