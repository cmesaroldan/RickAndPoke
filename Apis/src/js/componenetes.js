import '../css/componentes.css'
import webpackLogo from '../assets/img/webpack-logo.png';

//API//
const API = 'https://pokeapi.co/api/v2/pokemon/';
let buttonAPI = document.getElementById('btnAPI');

const numeroAleatorio = () => {
    return Math.floor(Math.random()*((850+1)-1)+1);
};

export const pokeDate = () => { 
buttonAPI.addEventListener('click', () => {
    let img = document.getElementById('img');
    let pokeName = document.getElementById('pokeName');
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET",`${API}${numeroAleatorio()}`);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let datoPokemon = JSON.parse(this.responseText);
            img.setAttribute("src",datoPokemon.sprites.front_default);
            pokeName.textContent = (datoPokemon.name);
        } else {
            pokeName.textContent = 'Error en la API';
        }
    };
 });
}