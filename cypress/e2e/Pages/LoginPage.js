import 'cypress-iframe';

export class Login {
    username_locator= 'input#username'
    password_locator= ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button= '.oxd-button'
    logo_image= '.oxd-brand-banner > img'
    signin_button= '[style="display: flex; flex-direction: column; gap: 16px;"] > .r-transitionProperty-1i6wzkk'
    
    setViewPort()
    {
        cy.viewport(1440, 768);
    }
    navigate()
    {
        cy.visit('https://develop-marketplace.pairedasset.com/login')

        // Add assertions to check title
        cy.title().should('eq', 'Marketplace')
    }
    clickSigninbutton()
    {
        cy.get(this.signin_button).should('exist').click();
    }
    enterUsername(username)
    {
           cy.frameLoaded("#Your project: 'Test Project'");
        cy.get('#username')
  .should('be.visible') // Ensure the element is visible
  .type('Hello World'); // Type "Hello World" into the input field
    }
    enterPassword(password)
    {
        cy.get(this.password_locator).type(password)
    }
    clickLoginbutton()
    {
        cy.get(this.login_button).should('exist').click();
    }
    verifyLogin()
    {
        cy.get(this.logo_image).should('exist');
    }
}