// describe('test',() => {
//    it('test', ()=>{
//        cy.login()
//    }),
//    it('test',()=>{
//        cy.login()
//    }) 
// })

const { it } = require("mocha")

describe('Case Study 3',() => {
   it('Pembelian Handphone', () =>{
       cy.visit('https://www.demoblaze.com/index.html')
       cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
       cy.get('.col-sm-12 > .btn').contains('Add to cart').click()

   })
   it('Registrasi Website',() => {
       cy.visit('https://www.demoblaze.com/index.html')
       cy.get('#signin2').click()
       
   })



})
//    it('test',()=>{
//        cy.login()
//    }) 

