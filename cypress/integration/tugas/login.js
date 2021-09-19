describe('All Test Case', function() {
    it('login',function(){
        cy.bukaurl()
        cy.get('#login2').click()
        cy.wait(1000)
        cy.get('#loginusername').type('angga').should('have.value','angga')
        cy.get('#loginpassword').type('12113').should('have.value','12113')
        cy.wait(1000)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.contains('dona').should('exist')

    })
    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })
})