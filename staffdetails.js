import { XHRWait, CheckTextNotVisible } from "./general"

export function CollapseCategories(PersonalDetails = false, PayrollDetails = false, OpDetails = false, KiwiSaver = false, RighttoWork = false) {
    if (PersonalDetails == true) {
        cy.get('.au-target > .col-12 > #groupItem1 > .par:nth-child(1) > .m-0').click()

    }
    if (PayrollDetails == true) {
        cy.get('.au-target > .col-12 > #groupItem1 > .par:nth-child(2) > .m-0').click()
    }
    if (OpDetails == true) {
        cy.get('.au-target > .col-12 > #groupItem1 > .par:nth-child(3) > .m-0').click()

    }
    if (KiwiSaver == true) {
        cy.get('.au-target > .col-12 > #groupItem1 > .par:nth-child(4) > .m-0').click()

    }
    if (RighttoWork == true) {
        cy.get('.au-target > .col-12 > #groupItem1 > .par:nth-child(5) > .m-0').click()
    }
}

export function LoadStaffNotesDocumentsTab() {
    //CheckTextNotVisible("loading, please wait...", 20000)
    cy.wait(20000)
   
    //cy.get('.nav-item:nth-child(2) > .nav-link').click()//Cypress recorder
    //cy.get('.au-target > .nav > .nav-item:nth-child(2) > .nav-link').click()//similar to recruitment.js
    cy.get('.au-target > .au-target > .nav > .nav-item:nth-child(2) > .nav-link').click({ force: true } )
   // CheckTextNotVisible("loading, please wait...", 20000)
    cy.wait(20000)

}

export function AddStaffNote(Category, Subject) {
    cy.get('.col-12:nth-child(1) > .col-12:nth-child(3) > .table .green-td-cell').click({multiple: true})
    cy.get('.p-0 > .input-group:nth-child(2) > .au-target:nth-child(1)').select(Category)
    cy.get('.input-group > .red-border-input').type(Subject)
    cy.get('.float-left > .button:nth-child(1)').click()// Save
    
    cy.get('.fa-times:nth-child(2)').click()//close
}

export function AddPerformanceDetails(Department, StaffName, PerformanceDetails, EventDate, Category, Subcategory) {
    cy.get('.row:nth-child(2) > .col-12 > .table .green-td-cell').click() //CLick Add
    
    cy.get('.col-8 > .d-flex > .padding-right5 > .input-group > .form-control').select(Department)
    cy.get('.col-8 > .d-flex > .padding-left5 > .input-group > .form-control').select(StaffName)
    cy.get('#PerformanceGeneral1 > .col-12 > .col-4 > .input-group:nth-child(3) > .form-control').select(Category)
    cy.get('#PerformanceGeneral1 > .col-12 > .col-4 > .input-group:nth-child(5) > .form-control').select(Subcategory)
    cy.get('.col-4 > .col-12 > .flex-item > #eventDate1 > .form-control').type(EventDate)
    cy.get('.col-12 > .dialog-container > .au-target > .btn-group > .button:nth-child(1)').click()//Save
    cy.get('div > .default-dwidth > .au-target > .dialog-header-content > .fa').click()//Close

}

export function LoadPerformanceMgmttab() {
    
    cy.get('.au-target > .nav > .nav-item:nth-child(3) > .nav-link').click({ force: true })
    

}

export function AddTrainingForm(trainingCourse, subcategory, Date) {
    cy.wait(5000)
    cy.get('.au-target:nth-child(3) > .row .green-td-cell > .fa').click() //Click Add  
    cy.get('.margin-right5 > .form-control').select(trainingCourse) // Traning Course
    cy.get('.flex-item:nth-child(2) > .form-control').select(subcategory) // subCategory
    cy.get('#dpStartDate1 > .form-control').type(Date) // start date
    cy.get('.top-bar-basic-style > .btn-green').click() //Save
    cy.get('.fa-times:nth-child(2)').click() //Close

}

export function LoadTrainingTab() {
    cy.wait(3000)
    
    cy.get('.au-target > .nav > .nav-item:nth-child(4) > .nav-link').click({ force: true })
    
}

export function AddNewStaff(FirstName, LastName, StartDate, Dept) {
    cy.get('.btnAdd').click({ force: true }) // CYPRESS RECORDER
    //cy.get('.au-target > .col-12  > .button > .btnAdd').click() //Click New Staff USING CLASSES
    cy.get('.red-border-input:nth-child(1)').type(FirstName, { force: true })
    cy.get('.red-border-input:nth-child(2)').type(LastName, { force: true })
    cy.get('#addEmployeeDOJ1').type(StartDate, { force: true })
    cy.get('.form-control:nth-child(4)').select(Dept, { force: true })
    cy.get('.button:nth-child(5)').click( { force: true })//Save

}