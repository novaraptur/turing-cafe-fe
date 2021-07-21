describe('page is loaded', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should be the correct page', () => {
    cy.contains('Turing Cafe Reservations');
  })

  it('should show an empty form on the page', () => {
    cy.get('input')
      .each((item) => {
        cy.wrap(item).should('have.value', '')
      })
  });

  it('should show a group of reservation cards', () => {
    cy.get('.resy-card')
      .should('exist')
  });

  it('should allow the user to create a new reservation', () => {
    cy.get('input[name=name]')
      .type('Dean')
      .should('have.value', 'Dean')
      .get('input[name=date]')
      .type('7/8')
      .should('have.value', '7/8')
      .get('input[name=time]')
      .type('6:00')
      .should('have.value', '6:00')
      .get('input[name=numGuests]')
      .type('2')
      .should('have.value', '2')
      .get('#makeReservationBtn').click()
    cy.get('.resy-card')
      .contains('Dean')
  });

  it('should not allow you to create a new reservation if all inputs have not been filled', () => {
    cy.get('input[name=name]')
      .type('Dean')
      .should('have.value', 'Dean')
      .get('#makeReservationBtn').click()
    cy.get('.error-message')
      .contains('Please fill out all inputs')
  });
});
