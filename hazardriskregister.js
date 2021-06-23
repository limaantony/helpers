import { SignInAsUser } from '../helpers/UserAccessRoles'

export function SignInasUser() {
    cy.get('#modules > .col-6:nth-child(38) .menu-item-img').click();
    cy.get('.input-group > .float-right').click();
    cy.get('.input-group > .float-right').type();
    cy.get('.btnSignIn').click();
    cy.get('.alert-block .alert-danger > .close').click();
    cy.wait(3000)
}

// check consequence drop down option
export function CheckConsequence(consequence) {
    cy.get('.col-6:nth-child(3) .form-control').contains('Low (1)');
    cy.get('.col-6:nth-child(3) .form-control').contains(' Minor (2)');
    cy.get('.col-6:nth-child(3) .form-control').contains('Moderate (3)');
    cy.get('.col-6:nth-child(3) .form-control').contains('Major (4)');
    cy.get('.col-6:nth-child(3) .form-control').contains('Critical (5)');
    cy.get('.col-6:nth-child(3) .form-control').select (consequence);
}
export function CheckLikelihood(likelihood) {
    cy.get('.col-6:nth-child(4) .form-control').contains('Rare (1)');
    cy.get('.col-6:nth-child(4) .form-control').contains('Unlikely (2)');
    cy.get('.col-6:nth-child(4) .form-control').contains('Possible (3)');
    cy.get('.col-6:nth-child(4) .form-control').contains('Likely (4)');
    cy.get('.col-6:nth-child(4) .form-control').contains('Almost Certain (5)');
    cy.get('.col-6:nth-child(4) .form-control').select(likelihood);
}

export function FillHazardForm(hazardname) {
    cy.get('.col-12:nth-child(7) > .form-control').type('TESTING description of Hazard');
    cy.wait(3000)
    cy.get('.pl-0:nth-child(1) .form-control').type(hazardname); 
    cy.wait(4000)
    cy.get('.input-group:nth-child(4) > .form-control').select('Fatigue');
    cy.wait(2000)
    cy.get('.input-group:nth-child(8) > .form-control').select('Fatigue');
    cy.wait(3000)
}

export function ChangeRiskStatus() {
    cy.get('.vertical-center-parent.au-target > .col-3 > .input-group > .form-control').select('Investigating', { force: true });
    cy.wait(4000)
    cy.get('.btnTick').click();
    cy.get('.closeDialogIcon').click();
    cy.wait(3000)
    cy.get('.flex-item:nth-child(3) .font-size28').click();
    cy.get('tr:nth-child(1) > td:nth-child(5)').click();
}
export function SearchandSignin(name) {
    cy.get('#modules > .col-6:nth-child(38) > .home-kiosk-block').click();
    cy.get('.input-group > .float-right').type(name);
    SignInAsUser()
}


