
describe('All Test Case', function(){
    before(()=>{
        cy.bukaurl()
    })

    it('pembelian', function(){
        cy.login()
        cy.get(':nth-child(7) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.go('back')
        cy.go('back')

        cy.contains('Laptops').click()
        cy.get(':nth-child(4) > .card > .card-block > .card-title > .hrefch').click()
        cy.go('back')
        cy.go('back')

        cy.contains('Monitors').click()
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.go('back')
        cy.go('back')

        cy.get('#cartur').click()
        cy.get('.col-lg-1 > .btn').click()
        cy.get('#name').type('jack').should('have.value','jack')
        cy.get('#country').type('indonesia').should('have.value','indonesia')
        cy.get('#city').type('jakarta').should('have.value','jakarta')
        cy.get('#card').type('1234567').should('have.value','1234567')
        cy.get('#month').type('juli').should('have.value','juli')
        cy.get('#year').type('2020').should('have.value','2020')
        cy.wait(1000)
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.contains('Thank you for your purchase!').should('exist')
        cy.wait(1000)
        cy.get('.confirm').click()

    })

    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })
})