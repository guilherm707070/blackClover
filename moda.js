const background = document.getElementById('modal-background')
const modalContainer = document.getElementById('modal-conteiner')
let currentMovie = {};

function backgroundClickHandler() {
  overlay.classList.remove("open")
}
function closeModal() {
  overlay.classList.remove("open")
}
function addCurrenteMovieToList() {
  if (isMovieALreadyOnlist(currentMovie.imdbID)) {
    notie.alert({ type: "error", text: "Filme ja estana sua Lista!" });
    return;
  }
  addTolist(currentMovie);
  uPdatwUI(currentMovie);
  UpdateLocalStorage();
  closeModal();

}
function createMOdal(data) {
  currentMovie = data;


  modalContainer.innerHTML = `<h2 id="movie-title">${data.Title} - ${data.Year}</h2>
          <section id="modal-body">
            <img id="movie-post"
              src=${data.Poster}
              alt="Poster do filme"
            />
            <div id="movie-info">
              <h3 id="movie-post">
               ${data.Plot}
              </h3>
              <div id="movie-cast">
                <h4>Elenco:</h4>
                <h5>${data.Actors}</h5>
              </div>
              <div id="movie-genre">
                <h4>genero:</h4>
                <h5>${data.Genre}</h5>
              </div>
            </div>
          </section>
          <section id=" modal-footer">
            <button id="add-to-list"onclick="{addCurrenteMovieToList()}">Adiciona a lista</button>
          </section>`;
}



background.addEventListener('click', backgroundClickHandler)