describe('Login and redirection of users', () => {

  it('Given user visits the url then redirect to login', () => {
    cy.visit('http://localhost:3000/'); 
    cy.url().should('include', '/'); 
  });

  it('When user types valid email and password then should redirect to home', () => {
    cy.visit('http://localhost:3000/'); 
    cy.get('input[name=email]').type('user@example.com');
    cy.get('input[name=password]').type('123');
    cy.get('button[type=submit]').click();
    
    // Check after login that the user is redirected to home
    cy.url().should('include', '/');
    cy.get('h1').should('contain', 'Welcome to my little app');
  });

  it('When user types invalid email and password then show an error', () => {
    cy.visit('http://localhost:3000/'); 
    cy.get('input[name=email]').type('wrong@example.com');
    cy.get('input[name=password]').type('incorrect');
    cy.get('button[type=submit]').click();
    
    // Check wrong credentials
    cy.url().should('include', '/');
    cy.get('p').should('contain', 'Incorrect credentials');
  });
});
