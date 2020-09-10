  context ('DashboardPage', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
    
    
    it('has the right App title', () => {
      cy.title().should('contain','Riide')
      }) 
    }) 