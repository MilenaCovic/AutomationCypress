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

getEmailError () {

    return cy.get('[data-test="email-error"]')
}

getPasswordError() {

    return cy.get('[data-test="password-error"]')
}}

export default LoginPage