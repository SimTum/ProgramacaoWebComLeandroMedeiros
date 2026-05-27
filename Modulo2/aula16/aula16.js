class Pokemon {
    name = '';
    types = '';
    image = '';
    stats = '';

    constructor(name, types, image, stats) {
        this.name = name;
        this.types = types;
        this.image = image;
        this.stats = stats;
    }
};


const input = document.querySelector('#pname')
const button = document.querySelector('#searchButton')
const form = document.querySelector('#searchForm')
const collection = document.querySelector('#collection')
const nothingHere = document.querySelector('#nothingHere')
const loading = document.querySelector('#loading')
const nothingFound = document.querySelector('#nothingFound')


collection.classList.add('hidden')

var pokemon = new Pokemon();

var query = " "
input.addEventListener('input', (e) => {
    query = e.target.value.trim();
    console.log(query)
})

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    nothingFound.classList.add('hidden');
    nothingHere.classList.add('hidden');
    if (query !== " ") {
        pokemon = await fetchPokemon(query)
    }
    console.log(pokemon)

    const pokecard = document.createElement('div');
    pokecard.className = 'card';
    pokecard.innerHTML = `
        <h1>${pokemon.name}</h1>
        <div>${pokemon.types}</div> 
        <img src=${pokemon.image}></img> 
        <div>${pokemon.stats}</div> 
        `
    collection.appendChild(pokecard);

})

async function fetchPokemon(query) {
    console.log("Fetch didn't happened yet")
    loading.classList.remove('hidden')
    try {
        
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`, {
            method: 'GET',
        })
        const data = await pokemon.json()
        console.log("Fetch happened", data)
        const result = new Pokemon(
            data.name,
            data.types.map((e) => e.type.name).join(", "),
            data.sprites.front_default,
            data.stats.map((e) => `${e.stat.name} ==> ${e.base_stat}`).join("</br>")
        );
        if (collection.classList.contains('hidden')) {
            collection.classList.remove('hidden')
        }
        loading.classList.add('hidden')
        return result;
        
    }
    catch (error) {
        nothingFound.classList.remove('hidden')
        console.log("something went wron!", error);
        loading.classList.add('hidden')
        
    }
}
