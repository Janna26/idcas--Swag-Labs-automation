
import User from './pages/data.js'
import loginPage from './pages/loginPage.js'

describe ('Login test', ()=>{
//Hooks
beforeEach('Precondition',()=>{
    cy.visit('/')
})

    
    context('Login test',()=>{
        it('TC1:Login succesfully',()=>{
            //arragement
            const user1 = 'standard_user' 
            const pass ='secret_sauce'
            //action
            loginPage.userInput().type(user1)
            loginPage.passInput().type(pass)
            loginPage.submit().click()
    
            //assert
        cy.get('.title').should('have.text', 'Products')
    
        })
    
        it('TC2:Login without entering the username',()=>{
            //arragement
          
            const pass ='secret_sauce'
    
            //action
          
            loginPage.passInput().type(pass)
            loginPage.submit().click()
    
            //assert
            loginPage.checkMessage('Epic sadface: Username is required')
    
        })
    
        it('TC3:Login without entering password',()=>{
            //arragement
          
            const user1 = 'standard_user'
    
            //action
          
            loginPage.userInput().type(user1)
            loginPage.submit().click()
    
            //assert
            loginPage.checkMessage('Epic sadface: Password is required')
            //cy.wait(3000);
    
        })
    
        it('TC4:Login without entering credentials',()=>{
            //arragement
          
            //action
          
           loginPage.submit().click()
    
            //assert
            loginPage.checkMessage('Epic sadface: Username is required')
    
        })
    
        it('TC5:Login with invalid credentials',()=>{
            //arragement
          
            const user1 = 'Janna'
            const pass ='test'
    
            //action
            loginPage.userInput().type(user1)
            loginPage.passInput().type(pass)
            loginPage.submit().click()
    
            //assert
            loginPage.checkMessage('Epic sadface: Username and password do not match any user in this service')
        })
        
    
        it('TC6:Login with locked User',()=>{
            //arragement
          
            const user3 = 'locked_out_user' 
            const pass ='secret_sauce'
    
            //action
            loginPage.userInput().type(user3)
            loginPage.passInput().type(pass)
            loginPage.submit().click()
    
            //assert
            loginPage.checkMessage('Epic sadface: Sorry, this user has been locked out.')
        })
    })

    context('Logout test',()=>{
        it('TC7: Logout',()=>{
        const user1 = 'standard_user' 
        const pass ='secret_sauce'
        loginPage.userInput().type(user1)
        loginPage.passInput().type(pass)
        loginPage.submit().click()
        cy.get('.title').should('contain.text', 'Products');
        cy.logout();
        cy.url().should('eq','https://www.saucedemo.com/')
        
      

    })

 })
    
})

    