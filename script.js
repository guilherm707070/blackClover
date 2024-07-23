const $searchButton = document.getElementById('search-button');
const overlay = document.getElementById("modal-overlay");
const movieName = document.getElementById("movie-name");
const movieYear = document.getElementById("movie-year");
const movieListeconteiner = document.getElementById("movie_list")
const apikey = '96a90de';

//let movieList = [];
let movieList = JSON.parse(localStorage.getItem("Movie-List")) ?? [];
async function searchButtonclickhandler() {

    try {
        let url =
            `http://www.omdbapi.com/?apikey=${apikey}&t=${movieNameParametoGenereiton()}&=${movieYearParameterGeneration()}`;

        const response = await fetch(url);
        const data = await response.json();

        console.log("data", data)
        if (data.Error) {
            throw new Error('filme não encontrado')
        }
        createMOdal(data);
        overlay.classList.add("open");
    } catch (error) {
        notie.alert({
            type: "error",
            text: error.message
        })


    }
    document.getElementById('movie-year').value = '';
    document.getElementById('movie-name').value = '';

};

function movieNameParametoGenereiton() {
    if (movieName.value === '')
        throw new Error(' o nome do filme deve ser Inserido')
    return movieName.value.split(` `).join('+')
}
function movieYearParameterGeneration() {
    if (movieYear.value === '') {
        return '';
    }
    if (movieYear.value.length !== 4 || Number.isNaN(Number(movieYear.value))) {
        throw new Error('Ano inválido');
    } else {
        return `&y=${movieYear.value}`;
    }
}

function addTolist(movieObject) {
    movieList.push(movieObject);
}
function isMovieALreadyOnlist(id) {
    function doesthisIdBeLongtoThisMovie(movieObject) {
        return movieObject.imdbID === id
    }
    return Boolean(movieList.find(doesthisIdBeLongtoThisMovie))
}

function uPdatwUI(movieObject) {
    movieListeconteiner.innerHTML +=
        `<article id= "movie-Card-${movieObject.imdbID}">
          <img src="${movieObject.Poster}" alt="poster de ${movieObject.Title}">
          <button class="remove_button" onclick="{removeFilmeFromList('${movieObject.imdbID}')}" ><i class="bi bi-trash"></i> remover</button>
        </article>`
}

function removeFilmeFromList(id) {
    notie.confirm({
        text: 'Deseja  remover o filme  de sua lista?',
        submitText: 'SIM',
        cacelText: 'NAO',
        position: 'top',
        submitCallback: function remove() {
            movieList = movieList.filter(movie => movie.imdbID !== id);
            document.getElementById(`movie-Card-${id}`).remove();
            UpdateLocalStorage()
        }

    })

}
function UpdateLocalStorage() {
    localStorage.setItem('Movie-List', JSON.stringify(movieList));
}
for (const movieInfo of movieList) {
    uPdatwUI(movieInfo)
}


$searchButton.addEventListener("click", searchButtonclickhandler)