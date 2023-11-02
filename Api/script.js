const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const header= document.getElementsByClassName("header");
const conteneur = document.getElementById('conteneur');
const search = document.getElementById('search');
const form = document.getElementById("form");
getMovies(APIURL);
async function getMovies(url){
    const reponse = await fetch(url);
    const donne= await reponse.json();
    console.log(donne);
    showMovies(donne.results);
}
function showMovies(movies){
    conteneur.innerHTML="";
    movies.forEach(movie => {
        const {poster_path,title,overview,vote_average }=movie;
        const movieEl=document.createElement('div')
        movieEl.classList.add('movie');
        movieEl.innerHTML=`<img src="${IMGPATH}${poster_path}" alt="${title}>
        <div class="movie_info">
        <h3 class="movie_title" >${title}</h3>
        <span class="${getClasssByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
        <h3>Overview:</h3>
        ${overview}
        </div>`
        conteneur.appendChild(movieEl);
    });
}
function getClasssByRate(vote){
    if(vote>=6){
        return "green";

    }else if(vote>=4){
        return "orange";
    }else{
        return "red";
    }
}
 form.addEventListener("submit",e=>{
    e.preventDefault();
    const searchTerm =search.ariaValueMax;
    if(searchTerm){
        getMovies(SEARCHAPI+searchTerm)
        search.value="";
    }
 })