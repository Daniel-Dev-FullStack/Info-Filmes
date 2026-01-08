function iniciarEventos() {

  $('#formPesquisa').on('submit', function(e) {
    e.preventDefault();

    let textoPesquisa = $('#textoPesquisa').val();
    getFilmes(textoPesquisa);
  });

}
