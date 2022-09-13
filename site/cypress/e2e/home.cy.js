describe('Home Page', () => {
  beforeEach(() => {
    cy.viewport(414, 896)
  })

  it('display all the products on the home page', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="product-tag"]')
      .eq(0)
      .within(() => {
        cy.get('[data-test="product-name"]').should(
          'contain',
          'Reloj Citizen 1'
        )
        cy.get('[data-test="product-price"]').should('contain', '5,500.00 ARS')
      })

    // TODO: add more products and copy/past the test
  })
})
