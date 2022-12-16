// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//import cypress from "cypress";
import loginPage  from "../e2e/pages/loginPage";


Cypress.Commands.add('login',(user1, pass)=>{
    loginPage.userInput().type(user1)
    loginPage.passInput().type(pass)
    loginPage.submit().click()
   
});


Cypress.Commands.add('logout',()=>{
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
});