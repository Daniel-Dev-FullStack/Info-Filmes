$('#filmes').on('click', '.btn-detalhes', function () {

  const imdbID = $(this).data('id');


 
  axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=97913516`)
    .then(function (response) {

      const filme = response.data;

      $('#modalDetalhes .modal-title').text(filme.Title);

      $('#modalDetalhes .modal-body').html(`
        <div class="row">
          <div class="col-md-4">
            <img 
              src="${filme.Poster}"
              class="img-fluid col-12 rounded"
              onerror="this.src='img/no-image.png'"
            >
          </div>

          <div class="col-md-8">
            <p><strong>Ano:</strong> ${filme.Year}</p>
            <p><strong>Gênero:</strong> ${filme.Genre}</p>
            <p><strong>Diretor:</strong> ${filme.Director}</p>
            <p><strong>Atores:</strong> ${filme.Actors}</p>
            <p><strong>Avaliação IMDb:</strong> ${filme.imdbRating}</p>
            <p><strong>Sinopse:</strong></p>
            <p>${filme.Plot}</p>
          </div>
        </div>
      `);

    })
    .catch(function () {
      $('#modalDetalhes .modal-body').html(
        '<p class="text-danger">Erro ao carregar detalhes do filme.</p>'
      );
    });

});
