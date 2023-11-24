class RegistrationPage
{

getLogin()
{
    return cy.get('[href="#/auth/login"]')
}

getRegistration()
{
    return cy.get('[href="#/auth/register"]')

}
getFirstName()
{
  return  cy.get('#first_name')
}

getLastName()
{
   return cy.get('#last_name')
}
getDob()
{
    return  cy.get('#dob')
}
getAddress() {

    return cy.get('#address')
}
getPostcode() {

    return cy.get('#postcode')
}
getCity() {

    return cy.get('#city')
}
getState() {
    return cy.get('#state')
}
getCountry() {
    
    return cy.get('#country')
}
getPhone() {

    return cy.get('#phone')
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
}

getDOBError () {

    return cy.get('[data-test="dob-error"]')
}

}

export default RegistrationPage


