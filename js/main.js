const listaPokemon = document.querySelector("#listaPokemon");
let URL ="https://pokeapi.co/api/v2/pokemon/";

for(let i=1;i<=1010;1++){
    fetch(URL +i)
        .then((response) => responde.json())
        .then(data=> mostrarPokemon(data))
}
function mostrarPokemon(data){
    
}