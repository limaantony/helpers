import { CheckContains, ClickButtonByText } from './general'

export function LoadExpenseClaimModule() {
    ClickButtonByText('Expense Claims')
    cy.wait(4000)
}

export function AddExpenseClaim() {
    cy.get('.au-target > .col-12 > .col-2 > .col-12 > .col-12:nth-child(1)').click()
    cy.wait(3000)
    cy.get('.au-target > .col-12 > .col-2 > .col-12 > .col-12:nth-child(2)').click({ force: true })
    cy.wait(2000)
}

export function AddFlightClaim(origin, destination, flightno, ticket, startCheck, endCheck, amount, gst) {
    cy.get('.row > .col-12 > .au-target:nth-child(1) > .col-12 > .fa').click()
    cy.wait(1000)
    cy.get('.col-6 > .col-12 > .flex-item > .input-group > #stationFromQuickSearch1').type(origin + "\n")
    cy.wait(4000)
    cy.get('.col-6 > .col-12 > .flex-item > .input-group > #stationToQuickSearch1').type(destination + "\n")
    cy.wait(4000)
    cy.get('.col-12 > .col-12 > .flex-item:nth-child(1) > .input-group > .form-control').type(flightno + "\n")
    cy.get('.col-12 > .col-12:nth-child(4) > .flex-item:nth-child(2) > .input-group > .form-control').type(ticket + "\n")
    cy.get('.col-12 > .dialog-container > .au-target > .btn-group > .button:nth-child(1)').click()
    cy.wait(2000)
    cy.get('.close-footer-btn').click();


    CheckContains(startCheck)
    CheckContains(endCheck)
    CheckContains(amount)
    CheckContains(gst)
}

export function AddGeneralClaim(amount, description, pregst, gst) {
    cy.get('.row > .col-12 > .au-target:nth-child(5) > .col-12 > .fa').click()
    cy.wait(1000)
    cy.get('.col-12 > .row > .col-4 > .input-group:nth-child(2) > .form-control').clear()
    cy.get('.col-12 > .row > .col-4 > .input-group:nth-child(2) > .form-control').type(amount)
    cy.get('.col-8 > .col-12:nth-child(3) > .flex-item > .input-group > .form-control').type(description)
    cy.get('.col-12 > .dialog-container > .au-target > .btn-group > .button:nth-child(1)').click()
    cy.wait(2000)
    cy.get('.close-footer-btn').click();
    cy.wait(1000)
    CheckContains(description)
    CheckContains(amount)
    CheckContains(pregst)
    CheckContains(gst)
}

export function AddMileageClaim(origin, destination, reason, odostart, odoend, distance) {
    cy.get('.row > .col-12 > .au-target:nth-child(3) > .col-12 > .fa').click()
    cy.wait(1000)
    cy.get('.col-12 > .col-8 > .col-12 > .flex-item:nth-child(1) > .form-control').type(origin) // travel origin
    cy.get('.col-12 > .col-8 > .col-12 > .flex-item:nth-child(2) > .form-control').type(destination) // travel destination
    cy.get('.dialog-container > .col-12 > .col-8 > .col-12 > .form-control').type(reason) // travel reason
    cy.get('.col-8 > .col-12:nth-child(1) > .flex-item:nth-child(2) > .input-group > .form-control').clear()
    cy.get('.col-8 > .col-12:nth-child(1) > .flex-item:nth-child(2) > .input-group > .form-control').type(odostart) // enter odometer start
    cy.get('.col-8 > .col-12 > .flex-item:nth-child(3) > .input-group > .form-control').clear()
    cy.get('.col-8 > .col-12 > .flex-item:nth-child(3) > .input-group > .form-control').type(odoend) // enter odometer end 
    cy.get('.col-12 > .dialog-container > .au-target > .btn-group > .button:nth-child(1)').click() // save
    cy.wait(1000)
    cy.get('.close-footer-btn').click(); // close
    cy.wait(1000)
    CheckContains(origin)
    CheckContains(destination)
    CheckContains(reason)
    CheckContains(odostart)
    CheckContains(odoend)
    CheckContains(distance)
}

export function AddEntertainmentClaim(amount, description) {
    cy.get('.row > .col-12 > .au-target:nth-child(6) > .col-12 > .fa').click()
    cy.wait(1000)
    cy.get('.col-4 > .row > .col-6 > .input-group > .form-control').clear({ force: true })
    cy.get('.col-4 > .row > .col-6 > .input-group > .form-control').type(amount, { force: true })
    cy.get('.col-8 > .col-12 > .flex-item > .input-group > .form-control').type(description)
    cy.get('.col-12 > .dialog-container > .au-target > .btn-group > .button:nth-child(1)').click()
    cy.wait(1000)
    cy.get('.close-footer-btn').click();
    cy.wait(1000)
    CheckContains(description)
    CheckContains(amount)
    cy.wait(5000)
}