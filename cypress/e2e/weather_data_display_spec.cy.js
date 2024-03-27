describe('Weather App E2E Tests', () => {
    it('Displays weather data after valid city is submitted', () => {
      cy.visit('http://localhost:3000');
  
      // Komunikat powitalny
      cy.contains('Welcome in my weather app!').should('exist');
  
      // Wprowadź nazwę miasta "New York" w polu wyszukiwania
      cy.get('input[placeholder="Search city"]').type('New York');
  
      // Kliknij przycisk wyszukiwania
      cy.get('button[type="search"]').click();
  
      // Sprawdź, czy wpisana wartość została wyczyszczona po wyszukaniu
      cy.get('input[placeholder="Search city"]').should('have.value', '');
  
      // Spróbuj wyszukać z pustym polem wyszukiwania
      cy.get('button[type="search"]').click();
  
      // Oczekuj na wyświetlenie komunikatu o błędzie
      cy.contains('Please enter a city name.').should('exist');
  
      // Wpisz inną nazwę miasta - "Warsaw"
      cy.get('input[placeholder="Search city"]').type('Warsaw');
  
      // Kliknij przycisk wyszukiwania ponownie
      cy.get('button[type="search"]').click();
  
      // Oczekuj na wyświetlenie danych pogodowych i sprawdź czy nie są puste
      cy.get('#weather-container').within(() => {
        cy.get('#main-feel').should('not.be.empty');
        cy.get('#humidity').should('not.be.empty');
        cy.get('#wind-speed').should('not.be.empty'); 
        cy.get('#pressure').should('not.be.empty');
        cy.get('#country').should('not.be.empty');
      });
    });
  });
  