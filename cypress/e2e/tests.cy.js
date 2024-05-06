describe('sign up page', () => {
    it('successful sign up', () => {
        cy.visit('/')
        cy.get('#signin2').click()
        cy.get('input#sign-username').type('ozzyosbou', { force: true })
        cy.get('input#sign-password').type('Pa$$word123!', { force: true })
        cy.get('button:contains("Sign up")').click()
    })

    it('successful log in', () => {
        cy.visit('/') 
        cy.get('#login2').click()
        cy.get('input#sign-username').type('ozzyosbou', { force: true })
        cy.get('input#sign-password').type('Pa$$word123!', { force: true })
        cy.get('button.btn.btn-primary').eq(0).click({ force: true })
    })

    it('add product to the card', () => {
        cy.visit('/')
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();  
        cy.get('a.btn.btn-success.btn-lg').should('be.visible').click();
    })
})
