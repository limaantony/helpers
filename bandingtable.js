import { GetElementNoIndex, CheckContains, CheckTextNotVisible } from "./general"

export function CreateBandingTable(year, name) {
    GetElementNoIndex('.au-target > .au-target > .col-12 > .col-2 > .col-12').click()
    cy.wait(6000)
    
    GetElementNoIndex('.col-12 > .d-flex > .mr-15 > .flex-item > .form-control').click();
    GetElementNoIndex('.col-12 > .d-flex > .mr-15 > .flex-item > .form-control').clear();
    GetElementNoIndex('.col-12 > .d-flex > .mr-15 > .flex-item > .form-control').type(year);
    GetElementNoIndex('.col-12 > .d-flex > .mr-15 > #bandingTableDate1 > .form-control').click();
    GetElementNoIndex('.datepicker-days > .table-condensed > tbody > tr > .today').click();
    GetElementNoIndex('.col-12 > .d-flex > .flex-item > .flex-item > .form-control').click();
    GetElementNoIndex('.col-12 > .d-flex > .flex-item > .flex-item > .form-control').clear();
    GetElementNoIndex('.col-12 > .d-flex > .flex-item > .flex-item > .form-control').type(name);
    GetElementNoIndex('.au-target > .au-target > .col-12 > .btn-group > .btn-green').click();
    CheckContains("saved");
}

export function DeleteBandingtable() {
    GetElementNoIndex('.col-2 > .au-target > .au-target > .au-target > .fa').click();
    CheckContains("deleted");
}

export function FillTableElement(level, baseSalary, midPoint, openBandingItem = true) {
    if (openBandingItem == true) {
        GetElementNoIndex('.table > thead > tr > .green-td-cell > div').click();
    }

    GetElementNoIndex('.table > .table-cell-sm-text > .au-target > .text-center > .form-control').clear();
    GetElementNoIndex('.table > .table-cell-sm-text > .au-target > .text-center > .form-control').type(level);
    GetElementNoIndex('.table > .table-cell-sm-text > .au-target > .text-right:nth-child(3) > .form-control').click();
    GetElementNoIndex('.table > .table-cell-sm-text > .au-target > .text-right:nth-child(3) > .form-control').clear();
    GetElementNoIndex('.table > .table-cell-sm-text > .au-target > .text-right:nth-child(3) > .form-control').type(baseSalary);
    GetElementNoIndex('.table > .table-cell-sm-text > .au-target > .text-right:nth-child(4) > .form-control').click();
    GetElementNoIndex('.table > .table-cell-sm-text > .au-target > .text-right:nth-child(4) > .form-control').clear();
    GetElementNoIndex('.table > .table-cell-sm-text > .au-target > .text-right:nth-child(4) > .form-control').type(midPoint);
    GetElementNoIndex('.table-cell-sm-text > .au-target > td > .d-flex > .fa-check').click();
    cy.wait(3000);
    //CheckTextNotVisible("saving your changes. please wait...")
}

export function ClearLevel() {
    GetElementNoIndex('.table-cell-sm-text > .au-target:nth-child(2) > td > .d-flex > .fa-pencil').click()
    GetElementNoIndex('.table > .table-cell-sm-text > .au-target > .text-center > .form-control').clear();
    GetElementNoIndex('.table-cell-sm-text > .au-target > td > .d-flex > .fa-check').click();
}

export function ClearBaseSalary() {
    GetElementNoIndex('.table-cell-sm-text > .au-target:nth-child(2) > td > .d-flex > .fa-pencil').click()
    GetElementNoIndex('.table > .table-cell-sm-text > .au-target > .text-right:nth-child(3) > .form-control').clear();
    GetElementNoIndex('.table-cell-sm-text > .au-target > td > .d-flex > .fa-check').click();
}

export function ClearMidPoint() {
    GetElementNoIndex('.table-cell-sm-text > .au-target:nth-child(2) > td > .d-flex > .fa-pencil').click()
    GetElementNoIndex('.table > .table-cell-sm-text > .au-target > .text-right:nth-child(4) > .form-control').clear();
    GetElementNoIndex('.table-cell-sm-text > .au-target > td > .d-flex > .fa-check').click();
}

export function CheckLevelOrder() {
    cy.get('.au-target:nth-child(2) > .text-center > div').contains('1');
    cy.get('.au-target:nth-child(3) > .text-center > div').contains('5');
    cy.get('.au-target:nth-child(4) > .text-center > div').contains('10');
    cy.get('.au-target:nth-child(5) > .text-center > div').contains('15');
}