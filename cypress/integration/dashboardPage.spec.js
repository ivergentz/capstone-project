  context ('DashboardPage', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    
    
    it('has the right App title', () => {
      cy.title().should('contain','Riide')
      }) 
      
      it('has the right text', () => {
        cy.get('*').contains('Fahrt')
        })

        it('shows the rides', () => {
        cy.get('h3')
        .should('have.length.gt', 2)
        .parent('section')
        .find('p')
        .should('have.length.gt', 1)
        })

        it('toggles the details', () => {
        cy.get('section').click({multiple: true}).contains('more')
        })
    }) 