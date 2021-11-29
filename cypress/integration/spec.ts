describe('Home Page', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('LocalCast Weather')
    cy.contains('Current Weather')
  })
})
