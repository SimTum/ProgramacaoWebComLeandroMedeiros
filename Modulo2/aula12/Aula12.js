const precoProduto = 549.99, percentualDesconto = 20, nome = "A cool SSD";
const valorDesconto = (precoProduto * percentualDesconto) / 100
const precoFinal = precoProduto - valorDesconto;
console.log();

console.log(`Olá, Maria! O produto custa R$ ${precoProduto}`)
console.log(`Desconto de ${percentualDesconto}%: R$ ${valorDesconto}`)
console.log(`Preço final: R$ ${precoFinal}`)
console.log(`Preço acima de R$ 100? ${precoFinal > 100 ? "true" : "false"}`)
console.log(`Desconto válido? ${percentualDesconto <= 100 && percentualDesconto >= 0 ? "true" : "false"}`)
