class OrangeHRM {
    elements = {
        UserName: () => cy.xpath("//input[@name='username']"),
        Password: () => cy.xpath("//input[@name='password']"),
        LoginButton: () => cy.xpath("//button[contains(@class,'orangehrm-login-button')]"),
        Dashboard: () => cy.xpath("//h6[text()='Dashboard']"),
        MyInfoTab: () => cy.xpath("//span[text()='My Info']"),
        SaveButton: () => cy.xpath("(//button[@type='submit' and normalize-space()='Save'])[1]"),
        SuccessToast: () => cy.get('.oxd-toast-content--success'),
        ProfileIcon: () => cy.xpath("//span[contains(@class,'oxd-userdropdown-tab')]"),
        Logout: () => cy.xpath("//a[normalize-space()='Logout']"),
    }

    // Visit URL
    visitUrl() {
        cy.log("🚀 Launching OrangeHRM Application");
        cy.visit(Cypress.env('baseUrl'));
    }

    // Login method
    login(username = 'Admin', password = 'admin123') {
        cy.log("🔐 Performing Login");
        this.elements.UserName().should('be.visible').type(username);
        this.elements.Password().should('be.visible').type(password);
        this.elements.LoginButton().click();
        cy.wait(1500);
    }

    // My Info method
    MyinfoPage() {
        cy.log("📂 Navigating to My Info Module");
        cy.wait(1500);
        this.elements.MyInfoTab().click();
        cy.wait(1500);
        this.elements.SaveButton().click();
    }

    // Logout method
    Logout() {
        cy.log("👤 Opening Profile Dropdown");
        this.elements.ProfileIcon().should('be.visible').click();

        cy.log("🚪 Clicking Logout");
        this.elements.Logout().should('be.visible').click();
    }
}

export const orangeHRM = new OrangeHRM();