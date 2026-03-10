export class CypressPOCPage {

  searchBox = 'input[name="p"]'
  cypressResult = 'a[href*="cypress.io"]'
  headerTabs = 'nav a'

  openYahoo() {
    cy.visit('/')
  }

  searchText(text) {
    cy.get(this.searchBox).click().type(`${text}{enter}`)
  }

  openCypressSite() {
    cy.contains('h3', 'Cypress')
      .closest('a')
      .invoke('attr', 'href')
      .then((url) => {
        cy.visit(url)
      })
  }

  getTabs() {
    return cy.get(this.headerTabs).then($tabs => {
      return [...$tabs].map(el => el.innerText.trim())
    })
  }

}