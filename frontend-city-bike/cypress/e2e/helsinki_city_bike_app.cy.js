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
  })
  it('search trip can be opened', () => {
    cy.get('.button-options').eq(0).contains('Search a trip!').click()
    cy.contains('Departure Station:')
    cy.contains('choose a departure station...')
  })
})
