
describe ( 'My 2nd Test Suite', function(){
    it('my second test case',function() {
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
        cy.get('#et_pb_contact_name_0').type('Dona');
        cy.get('#et_pb_contact_email_0').type('dona@saputra.com');
        cy.get('.et_pb_contact_submit').click()
        cy.get('[value="male"]').check();
        cy.get('[value="Bike"]').click();
        cy.get('select').select('Audi')
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').click()
        cy.get('.entry-title').should('contain','Button success')

    })


    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })

})

