describe('Tugas 5',()=>{
    it('Tugas 5',()=>{
        cy.openurl()
    })

    it('Isi form',()=>{
        cy.get('#firstName').type('dona').should('have.value','dona')
        cy.get('#lastName').type('nicolas').should('have.value','nicolas')
        cy.get('#userEmail').type('nico@colas.com').should('have.value','nico@colas.com')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
        cy.get('#userNumber').type('12345').should('have.value','12345')
        // cy.get('#dateOfBirthInput').should('be.visible').type('21 Aug 2000',{force:true})
        // cy.get('#dateOfBirthInput').type('21 Aug 2000')
        //cy.get('datepicker__year-select').contains('2000').click()

        // cy.get('#dateOfBirthInput').type('21 Jul 2000')
        //.should('have.value','21 jul 2000')
        cy.get('.subjects-auto-complete__value-container').type('mahasiswa').should('have.value','mahasiswa')
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').click()
        //cy.get('#uploadPicture').attachFile('foto.jpeg')

    })
})