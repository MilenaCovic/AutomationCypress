// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { })


Cypress.Commands.add('selectCategory', (categoryName) => {
    
    cy.get('.checkbox').each(($el, index, $list) => {
        const category = $el.find('label').text().trim()
        if(category === categoryName) {
            cy.wrap($el.find('input[type="checkbox"]')).check({ force: true })
        }
    })})


    Cypress.Commands.add('selectFirstProduct', (productName) => { cy.get('.container').find('.card').each(($el, index, $list) => {
 
        const firstProduct=$el.find('h5.card-title').text()
        if(firstProduct.includes(productName))
        {
        cy.wrap($el).find('h5.card-title').click()
        }})
        })


    Cypress.Commands.add('selectSecondProduct', (productName) => {

        cy.get('.container').find('.card').each(($el, index, $list) => {
 
            const secondProduct=$el.find('h5.card-title').text().trim()
            if(secondProduct===productName)
            {
            cy.wrap($el).find('h5.card-title').click()
            }})

    })    
    

Cypress.Commands.add('selectThirdProduct', (productName) => { 
    cy.get('.container').find('.card').each(($el,index,$list) => {
        const thirdProduct=$el.find('.card-title').text()
        if(thirdProduct.includes(productName)) {
        cy.wrap($el).find('.card-title').click()
        
            }})
})    



    
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })