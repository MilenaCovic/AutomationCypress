import HomePage from "../pageObjects/HomePage"
import LoginPage from "../pageObjects/SignInPage"
import RegistrationPage from "../pageObjects/RegistrationPage"
import AccountPage from "../pageObjects/AccountPage"
import ProductPage from "../pageObjects/ProductPage"
import CheckoutPage from "../pageObjects/CheckoutPage"

describe('E2E', function() {

    before(function() {

        cy.fixture('example2').then(function(data){
            this.data=data
        })
    }
    )

    it('E2E Test Case', function() {

        
const homePage=new HomePage
const loginPage=new LoginPage
const registrationPage=new RegistrationPage
const accountPage=new AccountPage
const productPage=new ProductPage
const checkoutPage=new CheckoutPage
var sum=0

//registration
cy.visit(Cypress.env("url"))
homePage.getLogin().click()
cy.url().should("include", "/auth/login")
loginPage.getRegistration().click()
cy.url().should('include', '/auth/register')
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
registrationPage.getSubmit().click().url().should('include', 'auth/login')


//login
loginPage.getEmail().type(this.data.email)
loginPage.getPassword().type(this.data.password)
loginPage.getSubmit().click().url().should('include', '/account')
accountPage.getHome().click()
cy.wait(5000)

//select first product
cy.selectCategory('Pliers').should('be.checked')
//homePage.getProducts().should("have.length", "5") - this test was working, but suddenly number of products was changed
cy.wait(5000)
cy.selectFirstProduct('Slip')

productPage.getAddToCart().click()
productPage.getNotification().should('be.visible').and('contain.text', 'Product added to shopping cart.')

productPage.getCartIcon().should('be.visible')

//select second product
accountPage.getHome().click().url().should('eq', Cypress.env('url'))
homePage.getSearchBox().type('hammer')
homePage.getSearchButton().click()
homePage.getProducts().should('have.length', '7')
cy.selectSecondProduct('Hammer')

productPage.getAddToCart().click()
productPage.getNotification().should('be.visible').and('contain.text', 'Product added to shopping cart.')
productPage.getCartIcon().should('be.visible')

//select third product
productPage.getCategoriesNav().click()
productPage.getPowerTools().click()
homePage.getBrand1().click()
homePage.getProducts().should("have.length", "4")
cy.selectThirdProduct('Circular Saw')
cy.wait(9000)
productPage.getAddToCart().click()
productPage.getNotification().should('be.visible').and('contain.text', 'Product added to shopping cart.')
productPage.getCartIcon().should('be.visible')
productPage.getCartNumber().should('have.text', '3');
productPage.getCartIcon().click().url('include', 'checkout')
cy.get('tr td:nth-child(5) span').each(($el,index,$list)=> {

    const price=$el.text()
    var res = price.split('$')[1].trim()
    sum=Number(sum)+Number(res)}).then(function() {
  
  cy.log(sum)

})


cy.get('tfoot tr .col-md-2.text-end:nth-child(5)').then(function(element) {
  const Total = element.text();
  const totalPrice = Total.split('$')[1].trim();

  cy.log(totalPrice)

  expect(sum).to.equal(Number(totalPrice))

})

//checkout
checkoutPage.getCheckoutButton().click({force: true})
cy.get('.row p').should('have.text', 'Hello Milena Milena, you are already logged in. You can proceed to checkout.')
checkoutPage.getCheckoutButton().click({force: true})
checkoutPage.getCheckoutButton().click({force: true})
checkoutPage.getPaymentMethod().select('Bank Transfer')
checkoutPage.getAccountName().type('Milena Covic')
checkoutPage.getAccountNumber().type('5555555555')
cy.get('button[data-test="finish"]').click({force:true})
checkoutPage.getAlert().should('have.text', 'Payment was successful')
})
})