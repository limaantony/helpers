import { CheckTextNotVisible, XHRWait, CheckContains, CheckNotContains } from "./general"

export function SearchUser(employeeName) {
	cy.wait(5000)
	cy.get('.input-group > .float-right').type(employeeName, {force:true})
	cy.wait(5000)
	//CheckTextNotVisible('loading, please wait...', 60000)
}

export function LoadUserAccessTab() {
	cy.wait(3000)
	cy.get('.au-target:nth-child(2) > .nav-link').click()
}

export function SelectUserAccess(UserAccess) {
	switch (UserAccess) {
		case 'ExpenseClaimApprover':
			cy.contains('Expense Claim Approver').parent().within(() => {
				cy.contains('-').click({ force: true })
			})
			break

		case 'ManagerBasic':
			cy.contains('Manager (Basic)').parent().within(() => {
				cy.contains('-').click({ force: true })
			})
			break

		case 'ExpenseClaims':
			cy.contains('Expense Claims').parent().within({ multiple: true }, () => {
				cy.contains('-').click({ multiple: true, force: true })
			})
			break
		case 'ExpenseFinanceChecker':
			cy.contains('Expense Claims (Finance Checker)').parent().within(() => {
				cy.contains('-').click({ force: true })
			})
			break
		case 'ExpenseFinalApprover':
			cy.contains('Expense Claims (Final Approver)').parent().within(() => {
				cy.contains('-').click({ force: true })
			})
			break
		case 'StaffNotes':
			cy.contains('Staff Notes (Emp Details Page)').parent().within(() => {
				cy.contains('-').click({ force: true })
			})
			break
		case 'Forms':
			cy.contains('Forms').parent().within(() => {
				cy.contains('-').click({ force: true })
			})
			break
		case 'FormAdmin':
			cy.contains('Forms Admin').parent().within(() => {
				cy.contains('-').click({ force: true })

			})
			break
		case 'TimesheetApprovers':
			cy.contains('Timesheet Approvers').parent().within(() => {
				cy.contains('-').click({ force: true })
			})
			break
		case 'TimesheetApproverSubmitOnly':
			cy.contains('Timesheet Approvers').parent().within(() => {
				cy.contains('-').click({ force: true })

				cy.wait(3000)
				cy.contains('-').click({ force: true })

				cy.wait(2000)
				cy.contains('Read Only').click({ force: true })

			})
			break
		case 'Timesheet1stlevelApprover':
			cy.contains('Timesheet Approvers').parent().within(() => {
				cy.contains('-').click({ force: true })

				cy.wait(4000)
				cy.contains('-').click({ force: true })

				cy.wait(4000)
				cy.contains('Read Only').click({ force: true })

				cy.wait(3000)
				cy.contains('Submit Only').click({ force: true })

			})
			break
		case 'TimesheetSubmitThenApprove':
			cy.contains('Timesheet Approvers').parent().within(() => {
				cy.contains('-').click({ force: true })

				cy.wait(5000)
				cy.contains('Read Only').click({ force: true })

				cy.wait(5000)
				cy.contains('Submit Only').click({ force: true })

				cy.contains('1st level approver').click({ force: true })


			})
			break
		case 'LeaveApprover':
			cy.contains('Leave Approver').parent().within(() => {
				cy.contains('-').click({ force: true })

				cy.wait(2000)
			})
			break
		case 'HideReviewer':
			cy.contains('Leave Approver').parent().within(() => {
				cy.contains('-').click({ force: true })

				cy.wait(2000)

			})
			break
		case 'LeaveBackupReviewer':
			cy.contains('Leave Approver').parent().within(() => {
				cy.contains('Hide Reviewer').click({
					force: true
				})

			})
			break
		case '1stlvlReviewer':
			cy.contains('Leave Approver').parent().within(() => {
				cy.contains('Leave Backup Reviewer').click({ force: true })

				cy.wait(2000)
				cy.contains('Review/Adjust').click({ force: true })

				cy.wait(2000)
			})
			break
		case 'ReadyOnlyRosterAdmin':
			cy.contains('Roster Administrators').parent().within(() => {
				cy.contains('-').click({ force: true })

				cy.wait(2000)
				cy.contains('-').click({ force: true })

				cy.wait(2000)
			})
			break
		case 'Recruitment':
			cy.contains('Recruitment').parent().within(() => {
				cy.contains('-').click({ force: true })
				cy.wait(2000)
				//cy.contains('-').click({ force: true })

			})
			break

	}
}


export function SignInAsUser() {
	cy.wait(3000)
	cy.get('.btnSignIn > .btn-text-width').click();
	cy.wait(20000)
}

export function SwitchUserAndDept(dept, employeeName) {
	
	//CheckTextNotVisible("loading, please wait...")
	cy.wait(16000)
	cy.get('#tab_0 #managerCombobox').select(dept)
	
	//CheckTextNotVisible("loading, please wait...")
	cy.wait(16000)
	cy.get('#tab_0 #emplyeeCombobox').select(employeeName)
	
	//CheckTextNotVisible("loading, please wait...")
	cy.wait(16000)
}




export function SubmitClaim(ClaimReason) {
	
	cy.wait(5000)
	cy.get('.pl-0 > .form-control').type(ClaimReason)
	cy.get('.btnTick').click()//save
	cy.wait(6000)
	cy.get('.btnSubmit > .btn-text-width').click({force:true})//submit

	
}

export function AddStaffNote(Category, Subject) {
	
	cy.wait(5000)
	cy.get('.col-12:nth-child(1) > .col-12:nth-child(3) > .table .green-td-cell').click({ multiple: true },{ force: true } )
	cy.wait(2000)
	cy.get('.p-0 > .input-group:nth-child(2) > .au-target:nth-child(1)').select(Category)
	cy.wait(2000)
	cy.get('.input-group > .red-border-input').type(Subject)
	cy.get('.float-left > .button:nth-child(1)').click()// Save
	
}

export function CheckDropDown(Role, Switch = 'enabled') {
	cy.wait(3000)
	switch (Role) {
		case 'ManagerCan':
			if (Switch == 'disabled')
				cy.get('.input-group:nth-child(3) > .au-target:nth-child(1)').should('be.disabled')
			else
				cy.get('.input-group:nth-child(3) > .au-target:nth-child(1)').select('Modify/View')
			break
		case 'SeniorManagerCan':
			if (Switch == 'disabled')
				cy.get('.input-group:nth-child(5) > .form-control').should('be.disabled')
			else
				cy.get('.input-group:nth-child(5) > .form-control').select('Modify/View')
			break
		case 'SuperUserCan':
			if (Switch == 'disabled')
				cy.get('.input-group:nth-child(7) > .form-control').should('be.disabled')
			else
				cy.get('.input-group:nth-child(7) > .form-control').select('Modify/View')
			break
		case 'HRSuperUserCan':
			if (Switch == 'disabled')
				cy.get('.input-group:nth-child(9) > .form-control').should('be.disabled')
			else
				cy.get('.input-group:nth-child(9) > .form-control').select('Modify/View')
			break
		case 'PayrollUserCan':
			if (Switch == 'disabled')
				cy.get('.input-group:nth-child(11) > .form-control').should('be.disabled')
			else
				cy.get('.input-group:nth-child(11) > .form-control').select('Modify/View')
			break
	}

}

export function SubmitTimesheet() {
	cy.wait(4000)
	XHRWait
	//CheckTextNotVisible('loading, please wait...')
	cy.get('.table > .thead > .au-target > .au-target:nth-child(1) > .au-target').click()
	CheckContains('Submit')
	cy.get('.btn-blue:nth-child(1)').click({force:true})
	cy.wait(40000)
	//CheckTextNotVisible('submitting the timesheet. please wait..', 30000)
}

export function ApplyLeave(StartDate, EndDate, Reviewer = 'Cypress Integration tests') {
	cy.wait(5000)
	cy.get('.btn-text-width').click()
	cy.wait(3000)
	cy.get('.display-table-cell:nth-child(1) .form-control').select('Annual Leave (AL)')
	cy.get('#dpRequestStartDate1 > .form-control').clear({ force: true})
	cy.get('#dpRequestStartDate1 > .form-control').type(StartDate)
	cy.get('#dpRequestEndDate1 > .form-control').clear({ force: true })
	cy.get('#dpRequestEndDate1 > .form-control').type(EndDate)
	cy.get('.col-12 > .form-control').click()
	cy.get('.pl-15 .form-control').select(Reviewer, { force: true })

}

export function SubmitLeave() {
	cy.wait(3000)
	cy.get('.btn-green > .btn-text-width').click()
	cy.wait(15000)
	
	//CheckTextNotVisible('saving, please wait...')
}

export function ApproveLeave() {
	cy.wait(5000)
	cy.get('.au-target:nth-child(1) > .dropdown .fa-thumbs-o-up').click()
	cy.wait(13000)
	
	//CheckTextNotVisible('working, please wait...')
}

export function CheckApproved(StaffName, StartDate, EndDate, Status, reviewer, Type = 'Annual Leave') {
	cy.wait(5000)
	cy.get('.au-target:nth-child(1) > .height100 > .height100 > .width100 > .flex-item').contains(StaffName)
	cy.get('.au-target:nth-child(1) > td:nth-child(3) > .text-center').contains(StartDate)
	cy.get('.au-target:nth-child(1) > td > .sec-text').contains(EndDate)
	cy.get('.au-target:nth-child(1) > .position-relative .m-0').contains(Type)
	cy.get('.au-target:nth-child(1) > .position-relative .mb-0').contains(Status)
	cy.get('.au-target:nth-child(1) > .height100 > .height100 > .padding-left5').contains(reviewer)
}

export function CheckReviewerNotExist(reviewer) {
	cy.wait(5000)
	cy.get('.pl-15 .form-control').select('Cypress Integration tests').contains(reviewer).should("not.exist")

}

export function ApproveTimesheetSubmitthenApprove() {
	//CheckTextNotVisible("loading, please wait...", 30000)
	cy.wait(10000)
	cy.get('.table > .thead > .au-target > .au-target:nth-child(1) > .au-target').click()
	cy.wait(2000)
	cy.get('.table > .thead > .au-target > .au-target:nth-child(1) > .au-target').click()
	cy.contains("Approve", { force: true }).click({ force: true })
	
	cy.wait(10000)
	//CheckNotContains("/^Pending$/")
	cy.get('#TimeSheet1 > .container-bg > :nth-child(1)').should('not.contain', '/^Pending$/')
	cy.wait(75000)
	cy.wait(10000)
	
}

export function AddTags(TagName, DisplayOrder) {
	cy.wait(5000)
	cy.get('.flex-wrap > .fa').click() //Click Pencil
	
	cy.wait(5000)
	XHRWait()
	cy.get('.col-3 > .col-12 > .col-12').click() // Click Add
	cy.get('.col-12 > .input-group:nth-child(2) > .add-on-inputs').type(TagName)
	cy.get('.btn-group > .mr-10:nth-child(1)').click(); //save
	cy.wait(5000)
	cy.get('.close-footer-btn').click() //Close
}

export function ApplyTagOnUser(TagName) {
	cy.wait(6000)
	XHRWait()
	cy.get('.mr-10 > .fa').click(); //Add
	cy.get('.no-border').clear();
	cy.get('.no-border').type(TagName);
	cy.wait(2000)
	XHRWait()
	cy.get('.no-border').type('{downarrow}');
	cy.wait(2000)
	XHRWait()
	cy.get('.no-border').type('{enter}');
	cy.wait(2000)
	XHRWait();
}
