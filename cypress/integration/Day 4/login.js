
describe('All Test Case', function() {
    it('login',function(){
        cy.bukaurl()
        cy.get('#login2').click()
        cy.wait(1000)
        cy.get('#loginusername').type('dona').should('have.value','dona')
        cy.get('#loginpassword').type('123').should('have.value','123')
        cy.wait(1000)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.contains('dona').should('exist')

    })
    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })
})