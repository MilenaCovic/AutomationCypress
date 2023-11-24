import HomePage from "../pageObjects/HomePage"
import RegistrationPage from "../pageObjects/RegistrationPage"
import LoginPage from "../pageObjects/SignInPage"


describe('Test Suite-Registration - negative test cases', function() {

beforeEach(function() {

cy.fixture('example3').then(function(data) {
this.data=data
})  

})
//registration
    it('Registration-invalid data', function() {

const homePage=new HomePage()
const registrationPage=new RegistrationPage()
const loginPage=new LoginPage()

cy.visit(Cypress.env("url"))
homePage.getLogin().click()
cy.url().should("include", "/auth/login")
loginPage.getRegistration().click()
cy.url().should('include', '/auth/register')
//entering data 
registrationPage.getFirstName().type(this.data.first_name)
registrationPage.getLastName().type(this.data.last_name)
registrationPage.getDob().type(this.data.dob) 
registrationPage.getAddress().type(this.data.address)
registrationPage.getPostcode().type(this.data.postcode)
registrationPage.getCity().type(this.data.city)
registrationPage.getState().type(this.data.state)
registrationPage.getCountry().select(this.data.country)
registrationPage.getPhone().type(this.data.phone)
registrationPage.getEmail().type(this.data.email)
registrationPage.getPassword().type(this.data.password)
//submiting registration and error messages
registrationPage.getSubmit().click()
cy.url().should('include', '/auth/register')
registrationPage.getEmailError().should('have.text', ' E-mail format is invalid. ').and('be.visible')
registrationPage.getPasswordError().should('have.text', ' Password must be minimal 6 characters long. ').and('be.visible')




   })


   it('Registration-two empty and one invalid required fields data', function() {

    const homePage=new HomePage()
    const registrationPage=new RegistrationPage()
    const loginPage=new LoginPage()
    
    cy.visit(Cypress.env("url"))
    homePage.getLogin().click()
    cy.url().should("include", "/auth/login")
    loginPage.getRegistration().click()
    cy.url().should('include', '/auth/register')
    //entering data 
    registrationPage.getFirstName().type(this.data.first_name)
    registrationPage.getLastName().type(this.data.last_name)
    registrationPage.getAddress().type(this.data.address)
    registrationPage.getPostcode().type(this.data.postcode)
    registrationPage.getCity().type(this.data.city)
    registrationPage.getState().type(this.data.state)
    registrationPage.getCountry().select(this.data.country)
    registrationPage.getPhone().type(this.data.phone)
    registrationPage.getEmail().type(this.data.email)
    registrationPage.getPassword().type(this.data.password)
    //submiting registration and error messages
    registrationPage.getSubmit().click()
    cy.url().should('include', '/auth/register')
    registrationPage.getEmailError().should('have.text', ' E-mail format is invalid. ').and('be.visible')
    registrationPage.getPasswordError().should('have.text', ' Password must be minimal 6 characters long. ').and('be.visible')
    registrationPage.getDOBError().should('have.text', ' Date of Birth is required. ').and('be.visible')
    
    
    
    
       })




       it('Registration-all empty fields', function() {

        const homePage=new HomePage()
        const registrationPage=new RegistrationPage()
        const loginPage=new LoginPage()
        
        cy.visit(Cypress.env("url"))
        homePage.getLogin().click()
        cy.url().should("include", "/auth/login")
        loginPage.getRegistration().click()
        cy.url().should('include', '/auth/register')
        
        registrationPage.getSubmit().click()
        cy.url().should('include', '/auth/register')
      
        
        
        
        
           })




})