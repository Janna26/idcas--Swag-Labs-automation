import loginPage from './pages/loginPage.js'

describe ('Browsing',()=>{
    beforeEach('Precondition',()=>{
        cy.visit('/')
        const user1 = 'standard_user' 
        const pass ='secret_sauce'

        loginPage.userInput().type(user1)
        loginPage.passInput().type(pass)
        loginPage.submit().click()
        cy.get('.title').should('have.text', 'Products')

    })
    context('Burger Menu test',()=>{
        it('TC1: Visit the section of all items',()=>{
            cy.fixture('dataLinks').then((link)=>{

                cy.get(link.burgerMenu).click({force:true});
                cy.get(link.allItemLink).click({force:true});
                cy.url().should('eq','https://www.saucedemo.com/inventory.html')

            })
    })

    it('TC2:Visit the About section',()=>{

        cy.fixture('dataLinks').then((link)=>{

            cy.get(link.burgerMenu).click({force:true});
            cy.get(link.aboutLink).then(($el)=>{
            $el.attr('target','_blank');
             }).click({force:true});
            cy.url().should('eq','https://www.saucedemo.com/inventory.html')

        })

    })

   //This option only works if already you have selected items in the cart
   it('TC3:Visit the Reset App State section',()=>{

    cy.fixture('dataLinks').then((link)=>{   
        cy.get(link.burgerMenu).click({force:true});
        cy.get(link.resetLink).click({force:true});
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
        cy.get('#react-burger-cross-btn').click({force:true});
        cy.go(-1)

    })

    })

})
    
   
    context('Social Media test',()=>{
       it('TC4:Visit Twitter Page',()=>{

        cy.get('.footer').
        should('have.text', 'TwitterFacebookLinkedIn© 2022 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
        cy.get('.social_twitter > a').click({force:true})
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
        
    })

    it('TC5:Visit Facebook Page',()=>{

        cy.get('.footer').
        should('have.text', 'TwitterFacebookLinkedIn© 2022 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
        cy.get('.social_facebook > a').click({force:true})
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
       
    })

    it('TC6:Visit Linkedin Page',()=>{

        cy.get('.footer').
        should('have.text', 'TwitterFacebookLinkedIn© 2022 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
        cy.get('.social_linkedin > a').click({force:true})
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
       
    }) 
 })
    
    

})

