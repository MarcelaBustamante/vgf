describe('Login tests', () => {
  let url = 'http://localhost:3000/login';
  let panelUrl = 'http://localhost:3000/user-panel';

  it('Create an E2E test for the login flow', () => { 
    let user = 'user@example.com';
    let pass = '123';
    cy.visit(url);
    cy.get('[type="email"]').type(user);
    cy.get('[type="password"]').type(pass);
    cy.get('button').click();

    //check the user is redirectet tu the panel user
    cy.url().should('include', panelUrl);
  });

  it('Verify that an unauthenticated user is redirected to the login page when attempting to access the user panel.', () => {
    cy.visit(url);
    cy.url().should('eq', url);
  });
})