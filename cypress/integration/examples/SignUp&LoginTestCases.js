import HomePage from "../pageObjects/HomePage"
import RegistrationPage from "../pageObjects/RegistrationPage"
import LoginPage from "../pageObjects/SignInPage"
import AccountPage from "../pageObjects/AccountPage"

describe('Test Suite-Registration', function() {

beforeEach(function() {

cy.fixture('example').then(function(data) {
this.data=data
})  

})
//registration
    it('Registration-valid data', function() {

const homePage=new HomePage()
const registrationPage=new RegistrationPage()
const loginPage=new LoginPage()

cy.visit(Cypress.env("url"))
homePage.getLogin().click()
cy.url().should("include", "/auth/login")
loginPage.getRegistration().click()
cy.url().should('include', '/auth/register')
//entering valid data 
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
//submiting registration
registrationPage.getSubmit().click()
cy.url().should('include', '/auth/login')





    })

//Sign Up
    it('Sign in - valid data', function() {
        const loginPage=new LoginPage()
        const accountPage=new AccountPage()
        
        cy.visit(Cypress.env('url')+'/auth/login')
        loginPage.getEmail().type(this.data.email)
        loginPage.getPassword().type(this.data.password)
        loginPage.getSubmit().click().url().should('include', '/account')
        accountPage.getAccountName().should('contain.text', ' Milena Covic ')
        
        
        
        
        
        
            })



})