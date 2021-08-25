

describe ( 'My First Test Suite', function(){
    it('my first test case',function() {
        cy.visit("https://bukalapak.com");
        cy.contains('Daftar').click()
        cy.get('.bl-text-field__inner')
    })


    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })

})