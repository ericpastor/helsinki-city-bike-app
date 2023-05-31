describe('Helsinki City Bike App', () => {
  it('front page can be opened', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Bike Trips')
    cy.contains('Welcome to the City Bike App!')
  })
})

describe('When searching trip', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')

    cy.get('.button-options').contains('Search a trip!').click()
    cy.contains('Departure Station:')
    cy.contains('choose a departure station...')
  })

  it('succeds searching a departure station', () => {
    cy.get('[placeholder="Pasilan Asema, Töölöntulli, Teljäntie,..."]').type('pasila')

    cy.get('#search-trips').click()

    cy.get('html').should('contain', 'loading')

    cy.get('html', { setTimeout: 5000 }).should('contain', 'Pasilan asema')

    cy.contains('Distance').click()

    cy.get('html', { setTimeout: 5000 }).should('contain', '0.01 km')

    cy.get('#next').click()

    cy.get('html', { setTimeout: 5000 }).should('contain', '0.36 km')
  })

  it('fails when departure station doesn\'t exist', () => {
    cy.get('[placeholder="Pasilan Asema, Töölöntulli, Teljäntie,..."]').type('khjvjhvhj')

    cy.get('#search-trips').click()

    cy.get('html').should('contain', 'Sorry')
  })
})
