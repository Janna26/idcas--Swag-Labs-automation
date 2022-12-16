import loginPage from './pages/loginPage.js'

describe ('Filter test',()=>{
    beforeEach('Precondition',()=>{
        cy.visit('/')
        const user1 = 'standard_user' 
        const pass ='secret_sauce'

        loginPage.userInput().type(user1)
        loginPage.passInput().type(pass)
        loginPage.submit().click()

        cy.get('.header_secondary_container').should('exist')

    })

    it('TC1: Visit Home page',()=>{
        cy.get('.title').should('have.text', 'Products')
        //cy.wait(3000);
    })

    it('TC2: Filter articles Name (A to Z)',()=>{ 
       cy.get('.product_sort_container').select('Name (A to Z)')
      // cy.wait(3000);
    })

    it('TC3: Filter articles Name (Z to A)',()=>{ 
        cy.get('.product_sort_container').select('Name (Z to A)')
        //cy.wait(3000);
     })

    it('TC4: Filter articles Price (low to high)',()=>{ 
        cy.get('.product_sort_container').select('Price (low to high)')
        //cy.wait(3000);
     })

    it('TC5: Filter articles Price (high to low)',()=>{ 
       cy.get('.product_sort_container').select('Price (high to low)')

     })
})

