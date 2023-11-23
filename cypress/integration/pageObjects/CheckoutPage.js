class CheckoutPage {

getCheckoutButton () {

    return cy.contains('Proceed to checkout')
}

getPaymentMethod () {

    return cy.get('#payment-method')
}

getAccountName () {

    return cy.get('#account-name')
}

getAccountNumber () {

    return cy.get('#account-number')
}

getConfirmButton () {

    cy.get('[data-test="finish"]')
}

getAlert () { 

    return cy.get('.alert')

}


}

export default CheckoutPage