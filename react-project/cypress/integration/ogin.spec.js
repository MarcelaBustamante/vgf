describe('Flujo de Login y redirección de usuarios no autenticados', () => {

    it('Debería redirigir al usuario no autenticado al intentar acceder al panel de usuario', () => {
      cy.visit('http://localhost:3000/'); // Intentar acceder al panel sin estar autenticado
      cy.url().should('include', '/login'); // Verificar redirección a la página de login
    });
  
    it('Debería permitir iniciar sesión con credenciales válidas', () => {
      cy.visit('/login');
      cy.get('input[name=email]').type('user@example.com');
      cy.get('input[name=password]').type('123');
      cy.get('button[type=submit]').click();
      
      // Verificar que después de iniciar sesión, el usuario es redirigido al panel
      cy.url().should('include', '/panel');
      cy.get('h1').should('contain', 'Bienvenido al panel de usuario');
    });
  });
  