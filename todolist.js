import { CheckTextNotVisible, ClickButtonByText, CheckContains } from './general'

export function LoadToDoListModule() {
    ClickButtonByText("To Do List")
    cy.wait(2000)
    CheckTextNotVisible('loading, please wait...')
}

export function AddTask(name) {
    ClickButtonByText("Add", 5000)
    cy.get('.table-cell-sm-text > tr > .au-target > .vertical-center-parent > .form-control').click()
    cy.get('.table-cell-sm-text > tr > .au-target > .vertical-center-parent > .form-control').type(name)
    cy.get('.table-cell-sm-text > tr > .au-target > .text-center > .fa-check').click()
    cy.wait(1000)
    CheckTextNotVisible('saving changes, please wait...')
    CheckContains(name)
}

export function DeleteTask(name) {
    cy.contains(name).parent().parent().parent().within(() => {
        cy.get('.flex-item.text-center.fa.fa-trash.red-text.editable-text.padding-5.au-target').click()
    })
    cy.wait(5000)
    CheckTextNotVisible(name)
}

export function CompleteTask(name) {
    cy.contains(name).parent().parent().parent().within(() => {
        cy.get('.mb-0.text-center.padding-2.text-sm.au-target').click()
    })
    cy.wait(1000)
}

export function ToggleShowCompleted() {
    ClickButtonByText("Show")
    cy.wait(1000)
    CheckContains("Completed")
}

export function ToggleHideCompleted() {
    ClickButtonByText("Hide")
    cy.wait(1000)
}

export function AddNoteToTask(name, note) {
    ClickButtonByText(name)
    cy.get('.col-12 > .col-12 > .col-12 > .p-10 > .form-control:nth-child(2)').click()
    cy.get('.col-12 > .col-12 > .col-12 > .p-10 > .form-control:nth-child(1)').click()
    cy.get('.col-12 > .col-12 > .col-12 > .p-10 > .form-control:nth-child(1)').type(note)
    ClickButtonByText("Save")
    cy.get('.table-cell-sm-text > tr > .au-target > .text-center > .fa-check').click()
    cy.wait(2000)
}

export function FavouriteTask(name) {
    cy.contains(name).parent().parent().parent().within(() => {
        cy.get('.au-target.flex-item.text-center.padding-5.editable-text.fa.fa-star-o').click()
    })
    cy.wait(1000)
}

export function UnfavouriteTask(name) {
    cy.contains(name).parent().parent().parent().within(() => {
        cy.get('.au-target.flex-item.text-center.padding-5.editable-text.fa.fa-star').click()
        cy.wait(4000)
    })
}

export function UpdateTaskName(name, newName) {
    ClickButtonByText(name)
    cy.get('.table-cell-sm-text > tr > .au-target > .vertical-center-parent > .form-control').clear()
    cy.get('.table-cell-sm-text > tr > .au-target > .vertical-center-parent > .form-control').type(newName)
    cy.get('.table-cell-sm-text > tr > .au-target > .text-center > .fa-check').click()
    cy.wait(2000)
}

export function UpdateTaskDate(name, newDate) {
    ClickButtonByText(name)
    cy.get('.table > .table-cell-sm-text > tr > .text-center > .form-control').clear()
    cy.get('.table > .table-cell-sm-text > tr > .text-center > .form-control').type(newDate)
    cy.get('.table-cell-sm-text > tr > .au-target > .text-center > .fa-check').click()
    cy.wait(2000)
}

export function AddTaskWithoutName(date) {
    ClickButtonByText("Add");
    cy.get('.text-center > .form-control').type(date);
    cy.get('.fa-check').click();

}