
describe ( 'My 2nd Test Suite', function(){
    it('my second test case',function() {
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
        cy.get('#et_pb_contact_name_0').type('Dona');
        cy.get('#et_pb_contact_email_0').type('dona@saputra.com');
        cy.get('.et_pb_contact_submit').click();
        cy.get('[value="male"]').check();
        cy.get('.et_pb_blurb_7 > .et_pb_blurb_content > .et_pb_blurb_container > .et_pb_blurb_description > form').click();
        cy.get('select').select('Audi')

        // cy.contains('Daftar').click()
        // cy.get('.bl-text-field__inner')
    })


    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })

})