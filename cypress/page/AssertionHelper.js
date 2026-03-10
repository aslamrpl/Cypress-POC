import { orangeHRM } from "./OrangeHRMLoginPage";

export default {

    verifyDashboardVisible() {
        cy.log("✅ Verifying Dashboard is visible");
        orangeHRM.elements.Dashboard()
            .should('be.visible')
            .and('contain.text', 'Dashboard');
    },

    verifyMyInfoSaved() {
        cy.log("✅ Verifying My Info Save Success Toast");
        orangeHRM.elements.SuccessToast()
            .should('exist')
            .and('have.css', 'opacity', '1') 
            .and('contain.text', 'Successfully Updated');
    },

    verifyUserIsLoggedOut() {
        cy.log("⏳ Verifying Logout");
        cy.url({ timeout: 10000 }).should('include', 'login');
        cy.log("✅ Logout Successful - Back to Login Page");
    }
}

