import { getPokemon } from './pokemonInfo.js';

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", e => {
    e.preventDefault();
    getPokemon(searchInput.value.toLowerCase().trim());
});

searchButton.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        searchButton.click();
    }
});
