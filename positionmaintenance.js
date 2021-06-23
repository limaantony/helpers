import { CheckTextNotVisible, GetElement } from "./general";

export function FillInformation(text) {
    cy.wait(15000)
    //CheckTextNotVisible("loading, please wait...", 10000);
    cy.get('.mr-10 .add-on-inputs').type(text, { force: true });
    cy.get('.btnTick > .btn-text-width').click(); //Save the information
   // CheckTextNotVisible("loading, please wait...", 10000);
    cy.wait(10000)
}

export function ClickDelete() {
    cy.wait(10000)
  //  CheckTextNotVisible("loading, please wait...", 10000);
    cy.get('.list-active-view-items .fa').click(); //Click the delete button
}


export function CheckForBullets() {
    cy.wait(10000)
    //CheckTextNotVisible("loading, please wait...", 10000);
    cy.get('.col-12:nth-child(2) > .list-view-add').click();
    cy.get('.p-20 > .input-group > .form-control').click();
    cy.get('.p-20 > .input-group > .form-control').type('abcdefghij');
    cy.get('.trumbowyg-unorderedList-button').click({ multiple: true });
    cy.get('.trumbowyg-box:nth-child(4) > .trumbowyg-editor').find('li');
    cy.get('.trumbowyg-orderedList-button').click({ multiple: true });
    cy.get('.trumbowyg-box:nth-child(4) > .trumbowyg-editor').find('li');
}