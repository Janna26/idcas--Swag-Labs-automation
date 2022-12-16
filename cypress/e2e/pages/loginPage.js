

 const userInput = ()=>{
    return cy.get('[data-test="username"]')
    
}


const passInput = ()=>{
    return cy.get('[data-test="password"]')
    
}

const submit = ()=>{
    return cy.get('[data-test="login-button"]')
    
}

const logout = ()=>{
    cy.get('#logout_sidebar_link').click();
    
}

const checkMessage =(message)=>{
    cy.get('.error-message-container').should('have.text', message)

}

const checkMessage2 =()=>{
    cy.get('#continue').click();

}


const userName =()=>{
    return cy.get('#first-name')
}

const lastName =()=>{
    return cy.get('#last-name')
}

const zipCode =()=>{
    return cy.get('#postal-code')
}

export default {
    userInput,
    passInput,
    submit,
    logout,
    checkMessage,
    checkMessage2,
    userName,
    lastName,
    zipCode
}