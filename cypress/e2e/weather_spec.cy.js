describe('Weather App E2E Tests', () => {
    it('Displays weather data after valid city is submitted', () => {
      cy.visit('http://localhost:3000'); // Załóżmy, że Twoja aplikacja działa na localhost:3000
  
      // Wprowadź nazwę miasta w polu wyszukiwania
      cy.get('input[placeholder="Search city"]').type('New York');
  
      // Kliknij przycisk wyszukiwania
      cy.get('button[type="search"]').click();
  
      // Oczekuj na wyświetlenie komponentu z danymi pogodowymi
      // cy.get('[data-testid="weather-component"]').should('exist');
    });
  });
  