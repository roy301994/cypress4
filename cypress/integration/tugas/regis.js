const cypress = require("cypress")

describe('All Test Case', () => {
    before(()=>{
        cy.bukaurl()
    })

    it('login',() => {
        cy.bukaurl()
        cy.get('#signin2').click()
        cy.wait(1000)
        cy.get('#sign-username').type('angga').should('have.value','angga')
        cy.get('#sign-password').type('12113').should('have.value','12113')
        cy.wait(1000)
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

    })
    cypress.open('uncaught:exception', (err, runnable) =>{
        return false
    })
})