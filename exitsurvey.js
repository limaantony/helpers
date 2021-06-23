import { XHRWait, CheckTextNotVisible } from "./general";

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
export function ChangeContract() {
    cy.wait(5000)
    cy.get('.btn-sm-yellow-action:nth-child(1)').click(); //edit
    cy.wait(5000)
    cy.get('.row:nth-child(3) .form-control').select('Resigned'); //Reason
    cy.get('.row:nth-child(4) .form-control').type('aaa'); //Comment
    cy.get('#staffTerminationDate > .form-control').type(today) //ChangeDate
    cy.get('.btn-green-fill:nth-child(6)').click(); //save and delete roster
    XHRWait();
    cy.wait(6000)
    //CheckTextNotVisible('saving your changes, please wait...')
    cy.wait(6000)

}

export function EnterExitSurveyDetails() {
    cy.wait(5000)
    cy.get('#tab_0 .notification-item-img').click({ force: true }); //Click on the exit survey notification
    cy.wait(4000)
    cy.get('.au-target:nth-child(2) > .col-12:nth-child(1) .filter-option').eq(1).click();
    cy.get('li:nth-child(2) .text').click();
    cy.get('.show-tick > .btn').click();
    cy.get('li:nth-child(3) .text:nth-child(2)').click();
    cy.get('.show-tick > .btn').click();
    cy.get('.col-12:nth-child(2) > .btn-group > .btn-green').click();
    cy.get('.top-bar-basic-style > .button:nth-child(1)').click();
    cy.get('.col-12 > .dialog-header-content > .fa').click();

    cy.wait(5000)

}

export function EnterTerminationChecklistDetails() {
    cy.get('#dateda281 > .au-target').clear().type(today);
    cy.get('#date2f381 > .au-target').clear().type(today);
    cy.get('.dialog-header-content').click();
    cy.get('.au-target:nth-child(2) > .col-12:nth-child(3) .input-group > .au-target:nth-child(1)').eq(6).click({ force: true });
    cy.wait(2000)
    cy.get('.au-target:nth-child(2) > .col-12:nth-child(3) .input-group > .au-target:nth-child(1)').eq(6).select('Contract Expired');
    cy.get('.au-target:nth-child(2) .filter-option').eq(23).click();
    cy.get('li:nth-child(2) .text').click();
    cy.get('.col-12:nth-child(1) > .btn-group > .btn-green > .btn-text-width').click();
    cy.wait(3000);
    cy.get('.close-footer-btn').click();
    cy.wait(4000)
}

export function CheckSurveyPopulation() {
    
    cy.wait(5000);
    cy.get('.au-target:nth-child(2) > .col-12:nth-child(1) .filter-option').eq(1).contains('Secured a new job')
    cy.get('.show-tick > .btn').contains('Insufficient recognition / appreciation');
    
}

export function CheckSurveyFormPopulated() {
    cy.wait(5000);
    cy.get('.au-target:nth-child(2) > .col-12:nth-child(1) .filter-option').eq(1).click()
    cy.wait(2000)
    cy.get('li:nth-child(2) .text').click();
    cy.wait(2000)
    cy.get('.au-target:nth-child(2) > .col-12:nth-child(1) .filter-option').eq(1).contains('Strongly Agree')
    cy.get('.show-tick > .btn').click();
    cy.wait(2000);
    cy.get('li:nth-child(3) .text').click({ multiple: true, force: true });
    cy.wait(2000)
    cy.get('.show-tick > .btn').contains('Better remuneration / benefits offered elsewhere');
}

export function EditDescription() {
    cy.wait(5000)
    cy.get('.trumbowyg-editor').clear().type('This Is Test Description for Exit Survey');
    cy.get('.btnTick').click();
    cy.wait(4000)
}

export function SortStatus(sort) {
    cy.wait(4000);
    cy.get('.col-2:nth-child(4) > .form-control').select(sort);

}

export function CheckSortedStatus(status) {
    cy.wait(4000)
    cy.get('.table-cell-sm-text > > :nth-child(2) > .au-target').contains(status, {multiple:true})

}


export function LoadNotificationTab() {
    cy.wait(4000)
    cy.get('.nav-item:nth-child(3) > .nav-link').click();

}