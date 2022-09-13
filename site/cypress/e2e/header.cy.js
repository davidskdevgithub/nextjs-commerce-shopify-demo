import { a } from '@react-spring/web'

describe('Header', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('links to the correct pages', () => {
    cy.getBySel('logo').click()
    cy.location('pathname').should('eq', '/')

    cy.getBySel('nav-link-search').click()
    cy.location('pathname').should('eq', '/search')

    cy.getBySel('nav-link-home-page').eq(0).click()
    cy.location('pathname').should('eq', '/search/frontpage')
  })

  it('the search bar returns the correct search results', () => {
    cy.getBySel('search-input').eq(0).type('reloj{enter}')

    cy.getBySel('product-card').within(() => {
      cy.getBySel('product-name').should('contain', 'Reloj Citizen 1')
    })
  })
})
