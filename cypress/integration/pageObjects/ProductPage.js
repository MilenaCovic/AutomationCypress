class ProductPage {

getAddToCart () {

    return cy.get('#btn-add-to-cart')

}

getNotification () {

    return cy.get('.toast')

}

getCartIcon () {

    return cy.get('[data-test="cart-quantity"]')
}

getCategoriesNav () {

    return cy.get('[data-test="nav-categories"]')
}

getPowerTools () {

    return cy.get('[routerlink="/category/power-tools"]')
}

getCartNumber () {

    return cy.get('#lblCartCount')
}
}

export default ProductPage