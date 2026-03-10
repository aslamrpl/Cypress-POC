import { CypressPOCPage } from '../page/CypressPOCPage'
import { CypressPOCAssertions } from '../page/CypressPOCAssertions'
import { POCTestData } from '../fixtures/POCTestData'

describe('Yahoo search → Cypress → verify UI with step assertions', () => {

  const pocPage = new CypressPOCPage()

  it('Run Cypress POC test', () => {

    // Step 1: Open Yahoo
    pocPage.openYahoo()
    CypressPOCAssertions.verifyYahooLoaded()

    // Step 2: Search Cypress
    pocPage.searchText(POCTestData.searchText)
    CypressPOCAssertions.verifyCypressInResults()

    // Step 3: Open Cypress site
    pocPage.openCypressSite()

    // Step 4: Verify title
    CypressPOCAssertions.verifyTitle(POCTestData.expectedTitle)

    // Step 5: Verify header tabs
    CypressPOCAssertions.verifyTabs(POCTestData.expectedTabs)
  })
})