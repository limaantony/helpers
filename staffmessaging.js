import { ClickButtonByText, XHRWait } from "./general";

export function Message(Subject, Messagebody, sign) {

    cy.get('#staffMessagingDlg_txtMessageSubject').type(Subject);
    cy.get('.trumbowyg-editor').type(Messagebody);
    cy.get('#staffMessagingDlg_cmbEmailSignature').select(sign);
    cy.get('#staffMessagingDlg_btnSave > .btn-text-width').click();//Save
    cy.get('.alert-block .alert-success > .close').click();

}

export function MessageType(Type) {
    cy.get('.au-target:nth-child(2) > .form-control').select(Type);
}



export function CheckStaffTable(rowNumber,Staff, Message, Type, Status, ScheuledDateTime) {
    cy.wait(4000)
    cy.get('tr:nth-child(' + rowNumber + ') .padding-3').contains(Status);
    cy.get('tr:nth-child(' + rowNumber + ') > td:nth-child(4)').contains(Staff);
    cy.get('tr:nth-child(' + rowNumber + ') > td:nth-child(5)').contains(Message);
    cy.get('tr:nth-child(' + rowNumber + ') .vertical-center-parent > .mb-0').contains(Type);
    cy.get('tr:nth-child(' + rowNumber + ') .vertical-center-parent > .mb-0').contains(Type);
    if (ScheuledDateTime != null) {
        cy.get('tr:nth-child(' + rowNumber + ') > td.text-center').contains(ScheuledDateTime)
    }
       
}

export function SendMessage() {
    cy.get('#staffMessagingDlg_btnSend > .btn-text-width').click();
    cy.wait(2000)
    cy.get('#staffMessagingDlg_btnCloseBot').click();

}

export function AddStaffIndividually(Staff, EmailType, group = false) {
    if (group === true) {
        cy.wait(4000)
        cy.get('#staffMessagingDlg_cmbEmaiMethod').select(EmailType)
        cy.get('#staffMessagingDlg_txtSearchStaff1').clear({ force: true });
        cy.get('#staffMessagingDlg_txtSearchStaff1').type(Staff, { force: true });
        cy.wait(2000)
        cy.get('#staffMessagingDlg_txtSearchStaff1').type('{downarrow}', { force: true });
        cy.get('#staffMessagingDlg_txtSearchStaff1').type('{enter}', { force: true });
        cy.wait(2000)
    }
    else {
        cy.wait(4000)
        cy.get('#staffMessagingDlg_txtSearchStaff1').clear({ force: true });
        cy.get('#staffMessagingDlg_txtSearchStaff1').type(Staff, { force: true });
        cy.wait(2000)
        cy.get('#staffMessagingDlg_txtSearchStaff1').type('{downarrow}', { force: true });
        cy.get('#staffMessagingDlg_txtSearchStaff1').type('{enter}', { force: true });
        cy.wait(2000)
    }
}

export function CheckMessageList(rowNumber, Name, Status, depart, Designation) {
    cy.wait(4000)
    cy.get('.col-12:nth-child(4) tr:nth-child(' + rowNumber + ') > td > .au-target').contains(Status);
    cy.get('.mt-10 tr:nth-child(' + rowNumber + ') > td:nth-child(3)').contains(Name);
    cy.get('.mt-10 tr:nth-child(' + rowNumber + ') > td:nth-child(4)').contains(depart);
    cy.get('tr:nth-child(' + rowNumber + ') > td:nth-child(6) .flex-item').contains(Designation);
}

export function ScheduleMessage(Date, time) {
    cy.get('#staffMessagingDlg_bSendNow1').click({ force: true });
    cy.get('#staffMessagingDlg_dpScheduleDate1 > .form-control').clear({ force: true })
    cy.get('#staffMessagingDlg_dpScheduleDate1 > .form-control').type(Date);
    cy.get('#staffMessagingDlg_dpScheduleTime1 > .form-control').type(time);
    cy.get('#staffMessagingDlg_btnSave').click();
    cy.wait(2000)
    cy.get('#staffMessagingDlg_btnSend').click(); //Send scheduled Message
}

export function AddByDesignation(designation) {
    cy.wait(2000)
    cy.get('#staffMessagingDlg_cmbOperation').select('Add staff by designation');
    cy.get('#staffMessagingDlg_txtSearchDesignation1').clear();
    cy.get('#staffMessagingDlg_txtSearchDesignation1').type(designation);
    cy.wait(4000)
    cy.get('#staffMessagingDlg_txtSearchDesignation1').type('{downarrow}');
    cy.get('#staffMessagingDlg_txtSearchDesignation1').type('{enter}');
    cy.wait(2000)

}

export function AddOneOff(Type, EmailID, Name) {
    cy.wait(3000)
    cy.get('#staffMessagingDlg_cmbOperation').select('Add a one-off address');
    cy.get('#staffMessagingDlg_cmbCommunicationType').select(Type);
    cy.get('#staffMessagingDlg_txtAddress').type(EmailID);
    cy.get('#staffMessagingDlg_txtOneOffAddress').type(Name);
    cy.get('#staffMessagingDlg_btnAddOneOffAddress').click();
    

}

export function AddAllStaff() {
    cy.wait(3000);
    cy.get('#staffMessagingDlg_cmbOperation').select('Add all my staff');
    cy.get('#staffMessagingDlg_cmbCommunicationType').type('Email');
    cy.get('#staffMessagingDlg_btnAddAllStaff').click();
    cy.wait(45000);
    XHRWait();
}

export function AddStaffByDepartment(depart) {
    cy.wait(3000)
    cy.get('#staffMessagingDlg_cmbOperation').select('Add staff by department');
    cy.wait(2000)
    cy.get('#staffMessagingDlg_txtSearchDepartment1').clear();
    cy.get('#staffMessagingDlg_txtSearchDepartment1').type(depart);
    cy.wait(2000)
    cy.get('#staffMessagingDlg_txtSearchDepartment1').type('{downarrow}');
    cy.get('#staffMessagingDlg_txtSearchDepartment1').type('{enter}');
    

}

export function AddStaffByGroup() {
    cy.wait(3000)
    cy.get('#staffMessagingDlg_cmbOperation').select('Add staff by group');
    cy.wait(4000)
    cy.get('#staffMessagingDlg_btnEditGroup > .fa').click();
    cy.wait(4000)
    //cy.get('.col-12:nth-child(2) > .input-group:nth-child(2) > .form-control').click();
    cy.get('.col-9 > .col-12:nth-child(2)').click();
    cy.get('.col-12:nth-child(2) > .input-group:nth-child(2) > .form-control').clear();
    cy.get('.col-12:nth-child(2) > .input-group:nth-child(2) > .form-control').type('Testing group1');
    cy.wait(3000)
    cy.get('.col-12:nth-child(2) > .input-group:nth-child(4) > .form-control').clear();
    cy.get('.col-12:nth-child(2) > .input-group:nth-child(4) > .form-control').type('group created for testing purpose')
    cy.wait(3000)
    //ClickButtonByText('Save')
    cy.get('.btn-group > .btn-green > .btn-text-width').click();
   // cy.get('.btn-green:nth-child(1)').click();
    cy.wait(3000)
    cy.get('#quickSearchEmployeeGroup1').clear();
    cy.get('#quickSearchEmployeeGroup1').type('Sarah Lock');
    cy.wait(2000)
    cy.get('#quickSearchEmployeeGroup1').type('{downarrow}');
    cy.get('#quickSearchEmployeeGroup1').type('{enter}');
    cy.wait(4000)
 
}


export function AddStaffInGroup(name) {
    cy.get('#quickSearchEmployeeGroup1').type(name);
    cy.get('#quickSearchEmployeeGroup1').type('{downarrow}');
    cy.get('#quickSearchEmployeeGroup1').type('{enter}');
    
}

export function AddOneOffAddressGroup() {
    cy.wait(3000)
    cy.get('.col-12 > .vertical-center-parent > .au-target:nth-child(1) > .form-control').select('Add a one-off address');

    cy.get('.mt-25:nth-child(2) > .form-control').select('Email');
    cy.get('.flex-item:nth-child(4) > .input-group > .form-control').type('aaazzzddd@asdfd.com'); //email
    cy.get('.flex-item:nth-child(5) > .d-flex .form-control').type('carlos'); //name
    cy.get('.flex-item:nth-child(5) .btn > .fa').click(); //Add
    cy.get('.mt-25:nth-child(2) > .form-control').select('SMS');
    cy.get('.flex-item:nth-child(4) > .input-group > .form-control').type('123123123'); //mobile
    cy.get('.flex-item:nth-child(5) > .d-flex .form-control').type('Deep'); //name
    cy.get('.flex-item:nth-child(5) .btn').click(); //Add

}

export function CheckGroupTable(rowNumber, Staff, Details, Type) {
    cy.wait(3000)
    cy.get('.mt-20 tr:nth-child(' + rowNumber + ') > td:nth-child(2)').contains(Staff);
    cy.get('.mt-20 tr:nth-child(' + rowNumber + ') > td:nth-child(3)').contains(Details);
    cy.get('.mt-20 tr:nth-child(' + rowNumber + ') > td:nth-child(4)').contains(Type);

}

export function DeleteFromGroupTable() {
    cy.get('tr:nth-child(1) > td > .d-flex > .fa').click(); //Delete the first anme in the table

}
export function AddSign(name, signature) {
    cy.get('.interaction-green:nth-child(2) > .fa').click()
    cy.wait(4000)
    cy.get('.list-view-add').click();
    cy.wait(5000)
    cy.get('.p-0:nth-child(1) > .flex-item .form-control').type(name);
    cy.get('.margin-right5 .form-control').type('abc@test.com');
    cy.get('.margin-left5 .form-control').type('Abc');
    cy.get('.col-12 > .trumbowyg-box > .trumbowyg-editor').type(signature);
    //cy.get('.btn-green:nth-child(1)').click();
    cy.get('.btn-group > .btn-green').click();

    cy.get('.col-12 > .dialog-header-content > .fa').click();
    cy.get('#staffMessagingDlg_btnCancel').click();

}
export function AddGroup(GroupName) {
    cy.get('#staffMessagingDlg_txtSearchGroup1').clear();
    cy.get('#staffMessagingDlg_txtSearchGroup1').type(GroupName);
    cy.wait(2000)
    cy.get('#staffMessagingDlg_txtSearchGroup1').type('{downarrow}');
    cy.get('#staffMessagingDlg_txtSearchGroup1').type('{enter}');
   
    cy.wait(2000)
    XHRWait()

}