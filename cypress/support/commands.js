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
// Cypress.Commands.add('login', (email, password) => { ... })
//
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
// Cypress.Commands.add('login', () => {
//     cy.visit('https://bukalapak.com');
//     cy.contains('Daftar').click();
// })

//Day 4
Cypress.Commands.add('bukaurl',()=>{
    cy.visit('https://www.demoblaze.com/index.html')
})


Cypress.Commands.add('login',()=>{
    cy.get('#login2').click()
    cy.wait(1000)
    cy.get('#loginusername').type('dona').should('have.value','dona',{force:true})
    cy.wait(1000)
    cy.get('#loginpassword').type('123').should('have.value','123')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.contains('dona').should('exist')
})

// Cypress.Commands.add('daftar',()=>{
//     cy.contains('Daftar').click()

// })
