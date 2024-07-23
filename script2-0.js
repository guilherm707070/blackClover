const $searchButton = document.getElementById('search-button');
const overlay = document.getElementById("modal-overlay");
const movieName = document.getElementById("movie-name");
const movieYear = document.getElementById("movie-year");
const apikey = '96a90de'; // Substitua 'your_api_key_here' pela sua chave de API

async function searchButtonclickhandler() {
    let url = `http://www.omdbapi.com/?apikey=${apikey}&t=${movieName.value.split(' ').join('+')}&y=${movieYear.value}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro HTTP! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("data", data);
        overlay.classList.add("open");
    } catch (erro) {
        console.error('Erro ao buscar dados:', erro);
    }
}

$searchButton.addEventListener("click", searchButtonclickhandler);
