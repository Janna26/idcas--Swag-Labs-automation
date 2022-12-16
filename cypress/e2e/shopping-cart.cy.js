
import { lastName, name, zip } from './pages/data.js'
import loginPage from './pages/loginPage.js'

describe ('Purchase flow',()=>{
    beforeEach('Precondition',()=>{
        cy.visit('/')
        
        const user4 = 'performance_glitch_user' 
        const pass ='secret_sauce'
    

        loginPage.userInput().type(user4)
        loginPage.passInput().type(pass)
        loginPage.submit().click()
        cy.get('.title').should('have.text', 'Products')

    })

    it('TC1: Carry out the purchase flow by selecting one item.',()=>{

       cy.fixture('items').then((item)=>{

            for (let key = 0; key <1; key++) {

              cy.get(item[Object.keys(item)[key]]).click();
             }    
        })
        
        cy.fixture('cart').then((cart)=>{
            cy.get(cart.cartLink).click();
            cy.get(cart.checkoutBtt).click();

        cy.fixture('infoUser').then((info)=>{
            loginPage.userName(info.userName).type(name)
            loginPage.lastName(info.lastName).type(lastName)
            loginPage.zipCode(info.zipCode).type(zip)
            })
           
            cy.get(cart.continueBtt).click();
            cy.get(cart.finishBtt).click();
            cy.get(cart.backHome).click();

            cy.get('.title').should('have.text', 'Products')

        })
       
    })

    it('TC2: Carry out purchase flow by selecting more than one item.',()=>{

        cy.fixture('items').then((item)=>{

            for (var key = 0; key < 2; key++) {

              cy.get(item[Object.keys(item)[key]]).click();
             }    
        })

        cy.fixture('cart').then((cart)=>{
            cy.get(cart.cartLink).click();
            cy.get(cart.checkoutBtt).click();

        cy.fixture('infoUser').then((info)=>{
            loginPage.userName(info.userName).type(name)
            loginPage.lastName(info.lastName).type(lastName)
            loginPage.zipCode(info.zipCode).type(zip)
        })
           
            cy.get(cart.continueBtt).click();
            cy.get(cart.finishBtt).click();
            cy.get(cart.backHome).click();

            cy.get('.title').should('have.text', 'Products')

        })

    })


    it('TC3:Carry out the purchase flow by selecting more than one item and closing the session.',
    ()=>{

        cy.fixture('items').then((item)=>{

            for (var key = 0; key < 2; key++) {

              cy.get(item[Object.keys(item)[key]]).click();
             }    
        })

        cy.fixture('cart').then((cart)=>{
            cy.get(cart.cartLink).click();
            cy.get(cart.checkoutBtt).click();

         cy.fixture('infoUser').then((info)=>{
            loginPage.userName(info.userName).type(name)
            loginPage.lastName(info.lastName).type(lastName)
            loginPage.zipCode(info.zipCode).type(zip)
        })

            cy.get(cart.continueBtt).click();
            cy.get(cart.finishBtt).click();
            cy.get(cart.backHome).click();
            cy.logout();

            cy.get('#login_credentials').should('have.class', 'login_credentials')
            
        })

    })

    it('TC4:Select more than one item and remove one or more from the cart.',
    ()=>{

        cy.fixture('items').then((item)=>{

            for (let key = 0; key <4; key++) {

              cy.get(item[Object.keys(item)[key]]).click();
             }    
        })

        cy.fixture('removeItems').then((remove)=>{

            for (let key = 0; key <2; key++) {

                cy.get(remove[Object.keys(remove)[key]]).click();
               }         
        })

        cy.get('.title').should('have.text', 'Products')

    })

    it('TC5: Select more than one item, remove from Description page and return to Products page.',
    ()=>{
        cy.fixture('items').then((item)=>{

            for (let key = 0; key <4; key++) {

              cy.get(item[Object.keys(item)[key]]).click();
             }    
        })

        cy.fixture('cart').then((cart)=>{
            cy.get(cart.cartLink).click();
            cy.fixture('removeItems').then((remove)=>{

                for (let key = 0; key <2; key++) {
    
                    cy.get(remove[Object.keys(remove)[key]]).click();
                   }         
            })

            cy.get(cart.contShopping).click();
            cy.get('.title').should('have.text', 'Products')

        })

    })

    it('TC6: Select more than one item, cancel in Checkout page, continue shopping, and complete the flow.',()=>{
        
        cy.fixture('items').then((item)=>{

            for (var key = 0; key <3; key++) {

              cy.get(item[Object.keys(item)[key]]).click();
             }    
        })

        cy.fixture('cart').then((cart)=>{
            cy.get(cart.cartLink).click();
            cy.get(cart.checkoutBtt).click();
            cy.get(cart.cancelBtt).click();
            cy.get(cart.contShopping).click();


          cy.fixture('removeItems').then((remove)=>{

                for (let key = 0; key <2; key++) {
    
                    cy.get(remove[Object.keys(remove)[key]]).click();
                   }         
            })

            cy.fixture('items').then((item)=>{

                for (var key = 2; key < 1; key++) {
    
                  cy.get(item[Object.keys(item)[key]]).click();
                 } 
            })
        })

        cy.fixture('cart').then((cart)=>{
            cy.get(cart.cartLink).click();
            cy.get(cart.checkoutBtt).click();

        cy.fixture('infoUser').then((info)=>{
            loginPage.userName(info.userName).type(name)
            loginPage.lastName(info.lastName).type(lastName)
            loginPage.zipCode(info.zipCode).type(zip)
        })

         cy.get(cart.continueBtt).click();
                cy.get(cart.finishBtt).click();
                cy.get(cart.backHome).click();
                cy.logout();

        })

        cy.get('#login_credentials').should('have.class', 'login_credentials')
            
    })

    it('TC7: Carry out the purchase flow and do not enter the name in Checkout.',()=>{

        cy.fixture('cart').then((cart)=>{
            
            cy.get('.inventory_item_label').contains('Sauce Labs Backpack')
            cy.get(cart.add).first().click();
            cy.get(cart.cartLink).click();
            cy.get(cart.checkoutBtt).click();

            cy.fixture('infoUser').then((info)=>{
                loginPage.lastName(info.lastName).type(lastName)
                loginPage.zipCode(info.zipCode).type(zip)
            })
            cy.get(cart.continueBtt).click();
            loginPage.checkMessage2('Error: First Name is required')

            cy.get('.title').should('have.text', 'Checkout: Your Information')
        
        })

    })

    it('TC8:Carry out the purchase flow and do not enter the last name in Checkout.',()=>{

        cy.fixture('cart').then((cart)=>{
            cy.get('.inventory_item_label').contains('Sauce Labs Backpack')
            cy.get(cart.add).first().click();
            cy.get(cart.cartLink).click();
            cy.get(cart.checkoutBtt).click();

        cy.fixture('infoUser').then((info)=>{
            loginPage.userName(info.userName).type(name)
            loginPage.zipCode(info.zipCode).type(zip)
            })

            cy.get(cart.continueBtt).click();
            loginPage.checkMessage2('Error: Last Name is required')
            
            cy.get('.title').should('have.text', 'Checkout: Your Information')
            
        })

    })

    it('TC9: Carry out the purchase flow and do not enter the zip code at Checkout.',()=>{

        cy.fixture('cart').then((cart)=>{
            
            cy.get('.inventory_item_label').contains('Sauce Labs Backpack')
            cy.get(cart.add).first().click();
            cy.get(cart.cartLink).click();
            cy.get(cart.checkoutBtt).click();

        cy.fixture('infoUser').then((info)=>{
            loginPage.userName(info.userName).type(name)
            loginPage.lastName(info.lastName).type(lastName)
            })

            cy.get(cart.continueBtt).click();
            loginPage.checkMessage2('Error: Postal Code is required')
            
            cy.get('.title').should('have.text', 'Checkout: Your Information')
        })

    })

    it('TC10: Select multiple items and refresh the page clicking "Reset App State" option, and complete the flow.',
    ()=>{

        cy.fixture('items').then((item)=>{

            for (var key = 0; key < 2; key++) {

              cy.get(item[Object.keys(item)[key]]).click();
             }
             
             cy.get('#react-burger-menu-btn').click({force:true});
             cy.get('#reset_sidebar_link').click({force:true});
             cy.url().should('eq','https://www.saucedemo.com/inventory.html')
             cy.get('#react-burger-cross-btn').click({force:true}); 
             cy.wait(3000);
             cy.reload();

             for (var key = 0; key < 2; key++) {

                cy.get(item[Object.keys(item)[key]]).click();
               }
    
        })

        cy.fixture('cart').then((cart)=>{
            cy.get(cart.cartLink).click();
            cy.get(cart.checkoutBtt).click();

         cy.fixture('infoUser').then((info)=>{
            loginPage.userName(info.userName).type(name)
            loginPage.lastName(info.lastName).type(lastName)
            loginPage.zipCode(info.zipCode).type(zip)
        })

            cy.get(cart.continueBtt).click();
            cy.get(cart.finishBtt).click();
            cy.get(cart.backHome).click();
            cy.logout();

            cy.get('#login_credentials').should('have.class', 'login_credentials')
            
        })


    })

    
})