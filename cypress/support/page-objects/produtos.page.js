class ProdutosPage{

    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()           // Para elementos de class sempre usar um ponto antes ex: ".button-search"
    }

    buscarProdutoLista(nomeProduto) {
        cy.get('.products > .row')
        .contains(nomeProduto)
        .click()
    }

    visitarProduto(nomeProduto) {
       // cy.visit(`produtos/${nomeProduto}`)             // exemplo de string 

       const urlFormatada = nomeProduto.replace(/ /g, '-') // substituir o hífem ao pesquisar a url 
       cy.visit(`produtos/${urlFormatada}`)

    }

    addProdutoCarrinho(tamanho, cor, quantidade) {
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

    }
}

export default new ProdutosPage()