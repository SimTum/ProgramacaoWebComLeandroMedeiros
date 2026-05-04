


const produtos = [
    { nome: "Batata", preco: 1.0, categoria: "vegetais" },
    { nome: "Coka Cola", preco: 8.99, categoria: "refris" },
    { nome: "Doritos", preco: 11.99, categoria: "lanches" },
    { nome: "Old Spice", preco: 17.99, categoria: "higiene" },
    { nome: "Leite condensado", preco: 4.49, categoria: "doces" },
]
const container = document.querySelector('#card-container')
produtos.forEach(product => {
    const card = document.createElement('div');
    card.className = "mycard";
    card.innerHTML = ` 
    <h3>
    ${product.nome}
    </h3>
    <br>
    <div> R$ ${product.preco}</div>
    <div class="category"> ${product.categoria}</div>    
    `
    container.appendChild(card);
})

const resetButton = document.querySelector("#clean")
const filterButton = document.querySelector("#filter")

filterButton.addEventListener('click', () => {
    const cards = container.querySelectorAll('.mycard') 
    cards.forEach(card => {
        if (card.querySelector('.category').innerHTML.trim() !== "lanches")
        {
            card.classList.toggle("hidden");
        } 
        
    });  
    
})

resetButton.addEventListener('click', () => {
    container.innerHTML = `It's all gone `;
})
