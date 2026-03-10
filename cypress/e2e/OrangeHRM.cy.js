import { orangeHRM } from '../page/OrangeHRMLoginPage';
import assertionHelper from '../page/AssertionHelper';

describe('OrangeHRM Application - Admin Module Validation', () => {

    beforeEach(() => {
        cy.log("Setting viewport and launching application");
        cy.viewport(1530, 900);
        orangeHRM.visitUrl();
    });

    it('TC01 - Verify Admin user can login, update My Info and logout successfully', () => {

        // Login
        cy.log("🔐 Step 1: Login to OrangeHRM");
        orangeHRM.login();
        assertionHelper.verifyDashboardVisible();

        // Save My Info
        cy.log("📂 Step 2: Navigate to My Info and save data");
        orangeHRM.MyinfoPage();
        assertionHelper.verifyMyInfoSaved();

        // Logout
        cy.log("🚪 Step 3: Logout from the application");
        orangeHRM.Logout();
        assertionHelper.verifyUserIsLoggedOut();

        cy.log("✅ Test Case Completed Successfully");
    });

});