class LoginPage
{

getRegistration()
{
    return cy.get('[href="#/auth/register"]')

}
getEmail() {

    return cy.get('#email')
}
getPassword() {

    return cy.get('#password')
}
getSubmit() {

    return cy.get('.btnSubmit')
}
}


export default LoginPage