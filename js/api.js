function getFilmes(textoPesquisa) {
  axios
    .get(`https://www.omdbapi.com/?s=${textoPesquisa}&apikey=97913516`)
    .then(function (response) {
      console.log(response);

      if (!response.data.Search) {
        $("#filmes").html('<p class="text-center">Nenhum filme encontrado</p>');
        return;
      }

      let filmes = response.data.Search;
      let resultado = "";

      $.each(filmes, function (_, filme) {
        resultado += `
          <div class="col-md-3 mb-4">
            <div class="card text-center h-100 shadow-sm">
              <img src="${filme.Poster}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${filme.Title}</h5>
                <h5 class="card-title">Ano: ${filme.Year}</h5>
                <a href="#" class="btn btn-primary btn-detalhes" data-id="${filme.imdbID}" data-bs-toggle="modal" data-bs-target="#modalDetalhes">Detalhes</a>
              </div>
            </div>
          </div>
        `;
      });

      $("#filmes").html(resultado);
    })
    .catch(function (err) {
      console.error(err);
    });
}
