const input = document.querySelector('#pname')
const button = document.querySelector('#searchButton')
const form = document.querySelector('#searchForm')
const collection = document.querySelector('#collection')
var pokemon;

var query = " "
input.addEventListener('input', (e) => {
    query = e.target.value.trim();
    console.log(query)
})

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (query !== " ") 
    {
        pokemon = await fetchPokemon(query)
    }    
    const pokecard = document.createElement('div');
    pokecard.className = 'card';
    pokecard.innerHTML = `
        <h1>${pokemon.name} Test </h1> 
        `
    collection.appendChild(pokecard);

})

async function fetchPokemon(query) {
    console.log("Fetch didn't happened yet")

    try{

        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`, {
            method: 'GET',
        })
        const data = await   pokemon.json()
        console.log("Fetch happened", data)
        return data
    }
    catch (error){
        console.log("something went wron!", error);
        
    }
}
