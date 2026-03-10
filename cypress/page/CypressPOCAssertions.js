export class CypressPOCAssertions {

  static verifyTitle(expectedTitle) {
    cy.title().should('include', expectedTitle)
  }

  static verifyTabs(expectedTabs) {

    cy.get('nav a').then($tabs => {

      const actualTabs = [...$tabs].map(el => el.innerText.trim())

      expectedTabs.forEach(tab => {
        expect(actualTabs).to.include(tab)
      })

    })

  }

  static verifyYahooLoaded() {
    cy.title().should('include', 'Yahoo')
  }

  static verifyCypressInResults() {
    cy.contains('h3', 'Cypress').should('be.visible')
  }

}