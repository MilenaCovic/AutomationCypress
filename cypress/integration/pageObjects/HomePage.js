class HomePage
{

getLogin()
{
    return cy.get('[href="#/auth/login"]')
}

getRegistration()
{
    return cy.get('[href="#/auth/register"]')

}

getSearchBox() {

    return cy.get('.form-control')
}

getSearchButton() {

    return cy.get('[type="submit"]')
}

getProducts () {

    return cy.get('a.card')
}

getBrand1 () {

    return cy.get(':nth-child(10) > label')

}


}


export default HomePage






