const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const header = document.getElementsByClassName("header");
const search = document.getElementById("search");
const main = document.getElementById('main');

  function getApiMovies(url){
     fetch(url).then(response=>
    response.json().then((data) => {
        console.log(data);
        afficheApiMovies(data.results);
    })
    );
}
    
 getApiMovies(APIURL);

 function afficheApiMovies(donne){
    main.innerHTML="";
    donne.forEach(element => {
        const {title,poster_path,overview,vote_average}=element;
        const elementEls=document.createElement('div');
        elementEls.classList.add('element');
        elementEls.innerHTML=`<img src="${IMGPATH+poster_path}" alt="${title}>
        <div class="element_info>
          <h3>${title}</h3>
          <span class="${getColor(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
        <h3> ${overview}</h3>
       
        </div>`
        main.appendChild(elementEls);
        
    });
}
function getColor(col){
    if(col>=7){
        return "green"
    }else if(col>=5){
        return "red"
    }else{
        return "orange"
    }
}
