class AccountPage {

getAccountName() {

    return cy.get('[data-test="nav-user-menu"]')
}

getHome() {

    return cy.get('.active')
}





}

export default AccountPage