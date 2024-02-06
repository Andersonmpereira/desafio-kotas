describe('Server availability test', () => {
  it('Should check if the server is running', () => {
    cy.request('http://localhost:3000/').then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})

describe('Interface interaction test', () => {  
  it('Should loading homepage', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('h1', 'Pokémons')
  })

  it('Should filter pokemon by name', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.search__input').type('squirtle', { delay: 1000 })
    cy.get('.card').should('have.length', 1)
  })

  it('Should filter pokemon by id', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.search__input').type('01', { delay: 1000 })
    cy.get('.card').should('have.length', 12)
  })

  it('Should display all cards after clearing the search input', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.search__input').type('01', { delay: 1000 })
    cy.get('.card').should('have.length', 12)
    cy.get('.search__input').clear()
    cy.get('.card').should('have.length.greaterThan', 1)
  })

  it('should display an error message', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.search__input').type('dasdasd')
    cy.contains('.text-red-500', 'Nenhum resultado encontrado.').should('be.visible')
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