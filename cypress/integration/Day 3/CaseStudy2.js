

describe ( 'Case Study 2', function(){
    it('Submit Nama & Email',function() {
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
        cy.get('#et_pb_contact_name_0').type('Dona').should('have.value','Dona');
        cy.get('#et_pb_contact_email_0').type('dona@saputra.com').should('have.value','dona@saputra.com');
        cy.get('.et_pb_contact_submit').contains('Email Me!');
        cy.get('.et_pb_contact_submit').click();
    })

    it('Select Gender', function(){
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
        cy.get('[value="male"]').check().should('be.checked');
    })

    it('Checkboxes',function(){
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
        cy.get('[value="Bike"]').check().should('be.checked');
        cy.get('[value="Car"]').check().should('be.checked');
    })

    it('Check Audi', function(){
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
        cy.get('select').select('audi').should('have.value','audi')
    })

    it('Click Me Success', function(){
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').click()
        cy.get('.entry-title').contains('Button success')
    })


    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })

})

