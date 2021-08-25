

describe('Test Registrasi Mahasiswa Form',()=>{
    it('TC001 Input Form Registration',()=>{
        //kunjungi alamat
        cy.visit('https://demoqa.com/automation-practice-form');
        
        //input firstname
        cy.get('#firstName').type('Dona');

        //input lastname
        cy.get('#lastName').type('Saputra');

        //input email
        cy.get('#userEmail').type('dona@yahoo.com');

        //pilih gender Male
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();

        //pilih phone number
        cy.get('#userNumber').type('081234567');

        //pilih hobbies
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click();

        //pilih alamat 
        cy.get('#currentAddress').type('Jakarta, Jakarta Selatan');

        //submit
        cy.get('#submit').click();
    })

    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })
})