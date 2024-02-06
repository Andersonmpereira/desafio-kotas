describe('Interface interaction test', () => {  
  it('Should loading homepage', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('h1', 'Pokémons')
  })

  it('Should filter pokemon by name', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.search__input').type('squirtle', { delay: 500 })
    cy.get('.card').should('have.length', 1)
  })

  it('Should filter pokemon by id', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.search__input').type('01')
    cy.get('.card').should('have.length', 1)
  })

  it('Should display all cards after clearing the search input', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.search__input').type('01')
    cy.get('.card').should('have.length', 1)
    cy.get('.search__input').clear()
    cy.get('.card').should('have.length.greaterThan', 1)
  })

  it('Should load more cards when scrolling down the page', () => {
    let initialCardCount
    cy.visit('http://localhost:3000/')
    cy.get('.card').should('have.length.greaterThan', 0)
    cy.get('.card').then($initialCards => {
      initialCardCount = $initialCards.length
      cy.scrollTo('bottom')
      cy.get('.card').should('have.length.greaterThan', initialCardCount)
    })
  })

  it('Should open pokemon page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.search__input').type('01')
    cy.get('.card').should('have.length', 1)
  })  

  it('Should open pokemon bulbasaur page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.card').first().click()
    cy.url().should('include', '/bulbasaur')
  })
})