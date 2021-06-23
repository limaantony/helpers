import { SignIn, SignOut, SwitchToUser } from './general'
import { CheckTextNotVisible, ClickButtonByText } from '../helpers/general'

export function loadUserSecurity() {
    cy.wait(2000)
    cy.get('.ml-10 > .accordion > #modules > .col-6:nth-child(37) > .home-kiosk-block').click()
    cy.wait(3000)
}

export function loadUserAccessTab() {
    cy.get('.col-12 > .col-10 > .col-12 > .nav-item:nth-child(2) > .nav-link').click()
    cy.wait(3000)
}

export function loadEmployeeSettings(employee) {
    cy.get('.au-target > .col-12 > .col-2 > .input-group > .float-right').click()
    cy.get('.au-target > .col-12 > .col-2 > .input-group > .float-right').type(employee)
    cy.wait(5000)
}

export function signInSecurityTest(username, password, view_width = 1280, view_height = 720) {
    cy.viewport(view_width, view_height)
    cy.visit("https://alpha.zambion.com");
    cy.url().should("contain", "https://alpha.zambion.com");
    ClickButtonByText("Sign In");
    cy.get("[name=username]").clear();
    cy.get("[name=username]").type(username, { delay: 0.3 });
    cy.get("[type=password]").clear();
    cy.get("[type=password]").type(password, { delay: 0.3 });
    cy.get('.signin-card > .col-12 > .user-pin > .vertical-center-parent > .signin-btn').click()
    cy.wait(5000)
    CheckTextNotVisible("loading home, please wait", 60000);
    CheckTextNotVisible("authenticating", 120000);
}

export function addAccess(id) {
    cy.get('.table > .au-target > .table-row:nth-child(' + id + ') > .au-target:nth-child(2) > .font-weight-bold').click()
    cy.wait(3000)
}

export function runEnableAccessTest(id) {
    SignIn(2880, 1800)
    loadUserSecurity()
    loadEmployeeSettings("Test User")
    loadUserAccessTab()

    addAccess(id)
    SignOut()

    signInSecurityTest("test@unittestdb", "Zambion@1", 2880, 1800)
    SwitchToUser("Contracting", "Aaron (Bones) HALES (4630)-F")
}