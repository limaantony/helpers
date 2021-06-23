import { CheckNotContains, XHRWait, CheckTextNotVisible, SwitchToUser, CheckContains, ClickButtonByText, GetElement } from "./general"

export function EnterNewFormInformation(FormTitle, DefaultName, AccessLevel) {
    cy.wait(30000)
   // CheckTextNotVisible("loading, please wait...", 30000)
    cy.wait(3000)
    cy.get('.d-flex:nth-child(2) > .pr-10 .form-control').type(FormTitle);
    cy.wait(2000)
    cy.get('.dropdown > .input-group > .form-control').type(DefaultName);
    cy.wait(2000)
    cy.get('.d-flex:nth-child(3) > .pl-10 .form-control').select(AccessLevel);
    cy.wait(3000)
    cy.get('.btnTick > .btn-text-width').click()
    cy.wait(2000)
    XHRWait()

}

export function CheckONFormOption(Option) {
    switch (Option) {
        case "Pre/Post Approval Access":
            cy.get('.padding-left .fa-times').click()
            break
        case "Requires Employee":
            cy.get('.au-target:nth-child(3) > .editable-text > .au-target:nth-child(2)').click()
            break
        case "Managers can view staff with form":
            cy.get('.au-target:nth-child(4) > .editable-text > .au-target:nth-child(2)').click()
            break
        case "Limit To User Security":
            cy.get('.au-target:nth-child(6) > .editable-text > .au-target:nth-child(2)').click()
            break
        case "Hide Pending Forms":
            cy.get('.au-target:nth-child(7) > .editable-text > .au-target:nth-child(2)').click()
            break
        case "Mandatory Document":
            cy.get('.au-target:nth-child(10) > .editable-text').click()
            break
        case "One Active Form Per Employee":
            cy.get('.au-target:nth-child(13) > .editable-text').click()
            break
        case "Only Senior Managers Can Transfer":
            cy.get('.au-target:nth-child(14) > .editable-text > .au-target:nth-child(2)').click()
            break
        case "Can Amend Approved Forms":
            cy.get('.au-target:nth-child(15) > .editable-text').click()
            break
        case "Hide Form":
            cy.get('.au-target:nth-child(16) > .editable-text > .au-target:nth-child(2)').click()
            break
        case "Make As Home Menu Item":
            cy.get('.au-target:nth-child(17) > .editable-text > .au-target:nth-child(2)').click()
            break
        case "Clone Form":
            cy.get('.au-target:nth-child(18) .fa-times').click()
            break

    }

}

export function SwitchOFFFormOption(Option) {
    switch (Option) {
        case "Pre/Post Approval Access":
            cy.get('.padding-left > .au-target:nth-child(1)').click()
            break
        case "Requires Employee":
            cy.get('.au-target:nth-child(3) > .editable-text > .au-target:nth-child(1)').click()
            break
        case "Managers can view staff with form":
            cy.get('.au-target:nth-child(4) > .au-target > .au-target:nth-child(1)').click()
            break
        case "Limit To User Security":
            cy.get('.au-target:nth-child(6) .fa-check').click()
            break
        case "Hide Pending Forms":
            cy.get('.au-target:nth-child(7) > .au-target > .au-target:nth-child(1)').click()
            break
        case "Mandatory Document":
            cy.get('.au-target:nth-child(10) > .au-target > .au-target:nth-child(1)').click()
            break
        case "One Active Form Per Employee":
            cy.get('.au-target:nth-child(13) .fa-check').click()
            break
        case "Only Senior Managers Can Transfer":
            cy.get('.au-target:nth-child(14) .fa-check').click()
            break
        case "Can Amend Approved Forms":
            cy.get('.au-target:nth-child(15) .fa-check').click()
            break
        case "Hide Form":
            cy.get('.au-target:nth-child(16) .fa-check').click()
            break
        case "Make As Home Menu Item":
            cy.get('.au-target:nth-child(17) .fa-check').click()
            break
        case "Clone Form":
            cy.get('.au-target:nth-child(18) .fa-check').click()
            break
    }
}

export function CheckTableNotContains(FormName) {
    cy.wait(2000)
    cy.get('td:nth-child(5)').should('to.be.visible', { multiple: true }).contains(FormName).should("not.exist", {timeout: 10000})
}

export function CheckTableContains(FormName) {
    cy.wait(2000)
    cy.get('.au-target:nth-child(1) > td #formChecklist_lbFormTemplateName_1').should('to.be.visible', { multiple: true }).contains(FormName)
}
export function CreateFormByManager(FormName) {
    cy.get('#formChecklist_btnAddForm_1').click();// Click Add 
    cy.wait(5000)
    //CheckTextNotVisible("loading, please wait...", 5000)
    //CheckTextNotVisible("You do not have access to any form templates.", 10000)
    cy.get('#formChecklistDlg_cmbFormTemplateName').select(FormName)//Select Form
    cy.wait(5000)

    cy.get('#formChecklistDlg_btnSave_2 > .btn-text-width').click();//Click Create

    
   

}

export function CreateNewForm(FormTitle, DefaultName, AccessLevel) {
    cy.wait(6000)
    cy.get('.list-view-add').click({ force: true })
    cy.wait(3000)
    EnterNewFormInformation(FormTitle, DefaultName, AccessLevel)
}


export function AddUserToViewersList(UserName) {
    cy.wait(5000)
    XHRWait()
    cy.get('.flex-item .table div').click();//Click Add
    cy.get('.horizontal-fill-parent > .form-control').select("User")
    cy.get('.horizontal-fill-parent > div > .form-control').select(UserName)
    cy.get('.table-control-height:nth-child(1)').click() //Click the tick
}

export function AddUserToApproversList(UserName) {
    cy.wait(5000)
    XHRWait()
    cy.get('.col-12:nth-child(11) .green-td-cell:nth-child(1) .fa:nth-child(1)').click(); //Click Add
    cy.get('.horizontal-fill-parent > .form-control').select("User")
    cy.get('.horizontal-fill-parent > div > .form-control').select(UserName)
    cy.get('.table-control-height:nth-child(1)').click() //Click the tick
}

export function CopyFormTemplate(FormName) {
    cy.wait(3000)
    ClickButtonByText(FormName)
    CheckTextNotVisible("loading, please wait...")
    cy.wait(4000)
    cy.get('.btnCopy:nth-child(2)').click(); //Copy Button    
    //CheckTextNotVisible("loading, please wait...")
    XHRWait()
    cy.wait(15000)
}

export function EditFormName(Name) {
    cy.get('.d-flex:nth-child(2) > .pr-10 .form-control').clear().type(Name);
    
    cy.get('.btnTick').click() //Save
    

}

export function AddFollowOnItems(selector, staffCan) {
    cy.wait(5000)
    cy.get('.mr-10 > .right-side-radius').click()
    cy.wait(4000)
    cy.get('.ml-15 .form-control').select(selector)
    cy.wait(2000)
    //cy.get('.overflow-auto > .au-target:nth-child(4)').click({force: true}) //select front office item of the drop down 
    cy.get('.overflow-auto:nth-child(1)').select('Front Office')
    cy.wait(2000)
    cy.get('.dialog-content-wrapper > .input-group:nth-child(2) > .form-control').select(staffCan)
    cy.wait(3000)
    cy.get('.float-left > .btn-green > .btn-text-width').click() //save 
    
    cy.wait(6000)
}

export function CreateReportanAccidentForm() {
    cy.wait(5000)
    ClickButtonByText("Create")
    cy.wait(13000)
    //CheckTextNotVisible('loading, please wait...')
    GetElement('.col-12:nth-child(3) .input-group > .au-target:nth-child(1)', 0).type('Accident',{ force: true })
    GetElement('.au-target .col-12:nth-child(2) > .col-12:nth-child(2) .input-group > .au-target:nth-child(1)', 0).click({ force: true })
    cy.wait(3000)
    GetElement('.au-target .col-12:nth-child(2) > .col-12:nth-child(2) .input-group > .au-target:nth-child(1)').select('Injured Person')
    cy.get('#date688b1 > .au-target').type('10/06/2020')
    cy.get('.col-12:nth-child(9) .input-group > .au-target:nth-child(1)').type('12.00')
    cy.get('.col-12:nth-child(11) > .au-target > .input-group > .au-target:nth-child(1)').type('hamilton')
    cy.get('.button:nth-child(8)').click();//save
    cy.wait(3000)
    cy.get('.btn-group > .flex-item > .button:nth-child(1) > .btn-text-width').click()//submit
    cy.wait(4000)
    ClickButtonByText('Approve');
    

}

export function ConfirmReportAnAccident() {
    cy.wait(5000)
    cy.get('tr > td:nth-child(5)').contains('(6147) Nicola SMITH')
    cy.get('tr > td:nth-child(6)').contains('NZY Admin')

}


export function SearchForm(FormName) {
    cy.wait(4000)
    cy.get('.col-2 > .input-group > .form-control').type(FormName, { force: true });
    
}

export function LoadCommunicationTab() {
    cy.wait(4000);
    cy.get('.nav-item:nth-child(2) > .nav-link').click();
}

export function AddNotification(NotiName, type, subject, emailSignature) {
    cy.wait(5000)
    cy.get('.table-padding > thead .au-target > div').click(); //Add
    cy.wait(3000)
    cy.get('.mt-15 > .col-6 .form-control').type(NotiName); //Notification Name
    cy.get('.mt-25 > .pl-0 .form-control').select(type); //Type
    cy.get('.col-12:nth-child(4) > .input-group > .form-control').type(subject); //Subject
    cy.get('.pr-0 .form-control').select(emailSignature); //Email Signature

    cy.get('.lg-item-purple:nth-child(1)').click(); //Form name
    cy.get('.blue-btn-color:nth-child(2)').click(); //Left Arrow
    cy.get('.flex-item .trumbowyg-editor').type('{enter}'); //New Line
    cy.get('.lg-item-purple:nth-child(3)').click(); //Created Date
    cy.get('.fa-arrow-left').click(); // Left arrow
    cy.get('.flex-item .trumbowyg-editor').type('{enter}'); //New Line
    cy.get('.lg-item-purple:nth-child(10)').click(); //Employee Name
    cy.get('.blue-btn-color:nth-child(2)').click();
    cy.get('.btn-group > .btn-green > .btn-text-width').click(); //Save
    ClickButtonByText('Close')

}


export function ATRFormDetails(Position, Dept, Reason = 'New Position', ContractType = 'Permanent', Salary = '50000') {
    cy.wait(5000)
    XHRWait()
    cy.get('.au-target > .input-group:nth-child(1) > .form-control:nth-child(1)').eq(1).click()
    cy.wait(1000)
    cy.get('.au-target > .input-group:nth-child(1) > .form-control:nth-child(1)').eq(1).select(Dept)
    cy.get('.au-target > .input-group:nth-child(1) > .form-control:nth-child(1)').eq(0).click()
    cy.wait(1000);
    cy.get('.au-target > .input-group:nth-child(1) > .form-control:nth-child(1)').eq(0).select(Position)
    cy.wait(1000)
    cy.get('.par:nth-child(3) > .au-target:nth-child(2) > .col-12:nth-child(1) .input-group > .au-target:nth-child(1)').type(Salary)
    cy.wait(1000)
    cy.get(' .par:nth-child(2) > .au-target:nth-child(2) > .col-12:nth() > .col-4:nth-child(3) > .input-group:nth-child(1) > .form-control:nth-child(1)').click(); //Contract
    switch (ContractType) {
        case 'Permanent': {
            cy.get('li:nth-child(3) .text').click();
            break
        }
        case 'Fixed Term Contract': {
            cy.get('li:nth-child(2) .text').click();
            break
        }
        case 'Casual': {
            cy.get('li:nth-child(4) .text').click();
            break
        } 
    }
    cy.wait(2000)
    cy.get('.col-12:nth-child(3) > .au-target > .input-group .filter-option').click(); //Reason
    switch (Reason) {
        case 'Replacement': {
            cy.get('li:nth-child(1) > .dropdown-item').click({ multiple: true, force: true });
            break
        }
        case 'To cover leave': {
            cy.get('li:nth-child(2) > .dropdown-item').click({ multiple: true, force: true });
            break
        }
        case 'Busy Season': {
            cy.get('li:nth-child(3) > .dropdown-item').click({ multiple: true, force: true });
            break
        }
        case 'New Position': {
            cy.get('li:nth-child(4) > .dropdown-item').click({ multiple: true, force: true });
            break
        }
        case 'Additional Resource': {
            cy.get('li:nth-child(5) > .dropdown-item').click({ multiple: true, force: true });
            break
        }
        case 'Other': {
            cy.get('li:nth-child(6) > .dropdown-item').click({ multiple: true, force: true });
            break
        }
    }
    cy.wait(2000)
    cy.get('.button:nth-child(8)').click();


}
