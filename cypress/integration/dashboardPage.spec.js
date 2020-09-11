  /// <reference types="Cypress" />

  context ('DashboardPage', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    
    
    it('has the right App title', () => {
      cy.title().should('contain','Riide')
      }) 

    })