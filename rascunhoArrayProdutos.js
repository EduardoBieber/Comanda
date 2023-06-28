// Criando os produtos para puxar os dados de nome e registrar posteriormente na comanda

function criarProduto(codigo, nome, preco) {
    var produto = {
        codigo: codigo,
        nome: nome,
        preco: preco
    }

    produtos.push(produto); // Adiciona o produto ao array "produtos"
    return produto; // Retorna o produto criado
}

const produtos = []; // para armazenar os produtos

criarProduto(1, 'hamburguerTradicional', 22.90)
criarProduto(2, 'HamburguerDuplo', 27.90)
criarProduto(3, 'Coca-Cola LT.350ml', 5.00)
criarProduto(4, 'Sobremesa Simples', 8.00)
criarProduto(5, 'Caipirinha Sabores', 20.00)