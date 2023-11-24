import HomePage from "../pageObjects/HomePage"
import RegistrationPage from "../pageObjects/RegistrationPage"
import LoginPage from "../pageObjects/SignInPage"


describe('Test Suite-Login negative test cases', function() {

beforeEach(function() {

cy.fixture('example4').then(function(data) {
this.data=data
})  

})
//registration
    it('Login-empty email&password fields', function() {

const homePage=new HomePage()
const registrationPage=new RegistrationPage()
const loginPage=new LoginPage()


                
        cy.visit(Cypress.env('url')+'/auth/login')
        loginPage.getSubmit().click().url().should('include', 'auth/login')
        loginPage.getEmailError().should('be.visible').and('have.text', ' E-mail is required. ')
        loginPage.getPasswordError().should('be.visible').and('have.text', ' Password is required. ')
                
                
                
                
                
                
                    })
  //Sign In
  it('Sign in - invalid email&password', function() {
    const loginPage=new LoginPage()
    
    
    cy.visit(Cypress.env('url')+'/auth/login')
    loginPage.getEmail().type(this.data.email)
    loginPage.getPassword().type(this.data.password)
    loginPage.getSubmit().click().url().should('include', 'auth/login')
    loginPage.getEmailError().should('be.visible').and('have.text', ' E-mail format is invalid. ')
    loginPage.getPasswordError().should('be.visible').and('have.text', ' Password length is invalid ')
    
    
    
    
    
    
        })
  
 it('Sign in - empty email& invalid password', function() {
    const loginPage=new LoginPage()
            
            
    cy.visit(Cypress.env('url')+'/auth/login')
    loginPage.getPassword().type(this.data.password)
    loginPage.getSubmit().click().url().should('include', 'auth/login')
    loginPage.getEmailError().should('be.visible').and('have.text', ' E-mail is required. ')
    loginPage.getPasswordError().should('be.visible').and('have.text', ' Password length is invalid ')
            
            
            
            
            
            
                })



 it('Sign in - invalid email & empty password', function() {
    const loginPage=new LoginPage()
                    
                    
    cy.visit(Cypress.env('url')+'/auth/login')
    loginPage.getEmail().type(this.data.email)
    loginPage.getSubmit().click().url().should('include', 'auth/login')
    loginPage.getEmailError().should('be.visible').and('have.text', ' E-mail format is invalid. ')
    loginPage.getPasswordError().should('be.visible').and('have.text', ' Password is required. ')
                    
                    
                    
                    
                    
                    
                        })
})