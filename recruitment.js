import { XHRWait, CheckContains, CheckTextNotVisible, ClickButtonByText } from "./general";

export function LoadRecruitmentTab() {
	cy.wait(8000);
	//cy.get('#recruitmentTab1').click();
	cy.get('#recruitmentVacanciesTab1').click();

	cy.wait(5000)
	XHRWait
}

export function LoadRecruitmentPlugin() {

	cy.visit('https://plugins.zambion.com/#/JobVacancies?id=092b6548-fe2a-40eb-b63d-38907b61ad3c');
}

export function LoadPage(URL) {
	cy.viewport(1440, 900)
	cy.visit(URL);
	cy.url().should("contain", URL);

}
export function LoadRecruitmentSetting() {
	cy.wait(4000)
	cy.get('.nav-item:nth-child(6) > .au-target').click();
	XHRWait()
}

export function CreateVacancy(Position, ApplicationForm, VacancyTitle, EmploymentForm, PostOnCareer = '30/09/2099', Process = 'CLAAS', AuthSign = 'Cypress Integration tests') {
	cy.wait(9000)
	cy.get('.list-item-absolute-list > .col-12 > .col-12').click(); //Add
	cy.wait(8000)
	cy.get('#recruitment_cmbVacancyProcessName_1').select(Process, { force: true }); //Process
	cy.get('#recruitment_cmbAuthorisedSignature_1').select(AuthSign, { force: true }); // Authorised Signature
	cy.get('#recruitment_cmbPositionName_1').select(Position); // Position
	//cy.get('#recruitment_cmbDepartmentName_1').select(Depart); // Department
	if (ApplicationForm !== 'false') {
		cy.get('#recruitment_cmbApplicationForm_1').select(ApplicationForm); //Application Form
	}

	if (EmploymentForm !== 'false') {
		cy.get('#recruitment_cmbEmploymentForm_1').select(EmploymentForm); //Employment form

	}
	
	cy.get('#recruitment_txtVacancyTitle_1').type(VacancyTitle); //Vacancy Title

	cy.get('#dpVacancyRemoveFromCareersPageOn1 > .form-control').type(PostOnCareer); //post on careers page until
	cy.wait(2000)
	cy.get('.btn-group:nth-child(9) > .switch-btn-active').click(); //Cv optional
	
	cy.get('#recruitmentVacancies1 .btn-group > .btn-green > .btn-text-width').click(); //save
	cy.wait(5000)
	XHRWait()

}

export function LoadDashboardTab() {
	cy.wait(4000)
	cy.get('.nav-item:nth-child(1) > .au-target').click({ multiple: true, force: true });

}

export function ApplyVacancy(rowNumber) {
	if (rowNumber === '1') {
		cy.log('Starts from 2')
	}
	cy.get('.table-container:nth-child(' + rowNumber + ') > .v-bottom > .btn').click();

}

export function EnterFirstFormDetails(FirstName, LastName, Email, Mobile) {
	cy.wait(4000)
	cy.get('#firstname').clear();
	cy.get('#firstname').type(FirstName);
	cy.get('#lastname').clear();
	cy.get('#lastname').type(LastName);
	cy.get('#emailaddr').clear();
	cy.get('#emailaddr').type(Email);
	cy.get('#mobilePh').clear();
	cy.get('#mobilePh').type(Mobile);
	cy.get('.main-btn').click();
	XHRWait()
	cy.wait(4000)
	//CheckTextNotVisible('redirecting to next form. please wait...')


}


export function EnterApplicationFormDetails(Address, suburb, city, HourlyRate, Salary, TrialPeriodExpiry, HolidayPay, AnnualLeave, saveAndQuit = false) {
	cy.wait(5000)
	XHRWait()
	cy.get('.form-group:nth-child(3) .vertical-center-parent > .form-control').type(Address); //Address
	cy.get('.form-group:nth-child(4) .vertical-center-parent > .form-control').type(suburb);
	cy.get('.mt-20:nth-child(3) > .form-group:nth-child(5) .form-control').type(city);
	cy.get('.form-group:nth-child(6) .add-on-inputs').type(HourlyRate);
	cy.get('.form-group:nth-child(7) .add-on-inputs').type(Salary);
	cy.get('.main-btn:nth-child(1)').click(); //Next
	cy.wait(4000)
	XHRWait()
	cy.get('#date1ae51 > .form-control').type(TrialPeriodExpiry);
	cy.get('.mt-20:nth-child(4) > .form-group:nth-child(5) .form-control').type(HolidayPay);
	cy.get('.form-group:nth-child(6) .selectpicker').select(AnnualLeave);
	cy.get('.main-btn:nth-child(1)').click(); //next
	cy.wait(4000)
	XHRWait()
	if (saveAndQuit) {
		cy.wait(3000)
		cy.get('.txt-btn').click();
		cy.wait(3000)
		cy.get('.fv-center > .form-control').click();
		cy.get('.fa-copy').click();
	}
	else {
		cy.get('.btn:nth-child(2)').click(); //Submit
		cy.wait(15000)
		XHRWait()
		CheckContains('Submit Success');
	}
}

export function CheckRecruitmentTableStatus(Status, rowNumber) {
	switch (Status) {
		case 'Pending': {
			cy.get('.tr:nth-child(' + rowNumber + ') > .purblue-border').click();
			break
		}
		case 'Declined': {
			cy.get('tr:nth-child(' + rowNumber + ') .recruitment-applicant-status:nth-child(8)').contains(Status);
			break
		}
		case 'Archived': {
			cy.get('tr:nth-child(' + rowNumber + ') .recruitment-applicant-status:nth-child(6)').contains(Status);
			break
		}
		case 'In Progress': {
			cy.get('tr:nth-child(' + rowNumber + ') .purblue-border').contains(Status);
			break
		}
		case 'Hired': {
			cy.get('tr:nth-child(' + rowNumber + ') .recruitment-applicant-status:nth-child(4)').contains(Status);
			break
		}
		case 'Incomplete': {
			cy.get('tr:nth-child(' + rowNumber + ') .main-border').contains(Status);
			break
		}
	}
}


export function CheckRecruitmentTable(rowNumber, Status, Name, Mobile, VacancyTags = 'false') {
	cy.wait(5000)
	CheckRecruitmentTableStatus(Status, rowNumber)
	cy.get('tr:nth-child(' + rowNumber + ') .vertical-center-parent > .mb-0').contains(Name);
	cy.get('tr:nth-child(' + rowNumber + ') > td > .mb-0').contains(Mobile);
	if (VacancyTags !== 'false') {
		cy.get('tr:nth-child(' + rowNumber + ') .d-flex > .mb-0').contains(VacancyTags);
	}

}

export function LoadApplicantPoolTab() {
	cy.wait(4000);
	XHRWait()
	//cy.get('.nav > .au-target:nth-child(3) > .au-target').click();
	cy.get('a[href*="applicantPool1"]').click();
	//cy.get('.nav-item:nth-child(3) > .au-target').click({ multiple: true, force: true });
	XHRWait()
	cy.wait(4000);

	//CheckTextNotVisible('loading, please wait...')

}


export function LoadProcessActionTab() {
	cy.wait(4000)
	cy.get('.nav-item:nth-child(5) > .au-target').click();


}

export function LoadProcess() {
	cy.wait(4000)
	//cy.get('.nav-item:nth-child(4) > .au-target').click();
	cy.get('.nav > .au-target:nth-child(4) > .au-target').click();

}

export function SearchApplicant(ApplicantName) {
	cy.wait(4000)
	cy.get('#recruitmentApplicantPool_txtSearchApplicants_1').clear();
	cy.get('#recruitmentApplicantPool_txtSearchApplicants_1').type(ApplicantName);
	
}

export function CheckInApplicantPoolTableForApplicant(ApplicantName, PositionApplied) {
	SearchApplicant(ApplicantName)
	cy.wait(4000)
	XHRWait()
	cy.get('.au-target:nth-child(1) > td:nth-child(2)').contains(ApplicantName);
	if (PositionApplied !== '') {
		cy.get('.au-target:nth-child(1) > td:nth-child(4)').contains(PositionApplied);
	}
}

export function AddCandidateFromApplicantPool(FirstName, LastName, Email, Mobile) {
	cy.wait(4000)
	XHRWait()
	cy.get('.col-12:nth-child(3) > .table .green-td-cell .fa').click(); //Add
	cy.wait(4000)
	cy.get('.flex-item > :nth-child(1) > .pl-0 > .input-group > .form-control').type(FirstName);
	cy.get('.flex-item > :nth-child(1) > .p-0 > .input-group > .form-control').type(LastName);
	cy.get('#recruitmentApplicantDLG_txtEmail_-1').type(Email);
	cy.get('#recruitmentApplicantDLG_txtMobile_-1').type(Mobile);
	cy.get('.vertical-center-parent > .btn-group > .btn-green').click();
	cy.wait(8000)
	XHRWait()
	//CheckTextNotVisible('saving, please wait...')
}

export function CreateApplication(Position) {
	cy.wait(4000)
	
	cy.get('#recruitmentApplicantDLG_cmbAddApplication_-1').select(Position);
	//cy.get('#recruitmentApplicantDLG_cmbAddApplication_-1').click();
	cy.get('#recruitmentApplicantDLG_buttonAddApplication_-1').click();
	XHRWait();

}


export function TransferApplication() {
	cy.wait(4000)
	cy.get('#recruitmentApplicantPool_buttonGoToApplicant_1_1').click(); //CLick on third applicant
	cy.wait(4000)
	XHRWait()
	cy.get('#recruitmentApplicantDLG_buttonApplicationItem_-1_0 > .fa-pencil').click(); //Click on first vacancy
	cy.wait(8000)
	cy.get('#recruitmentApplicationDetailsDLG_cmbRecruitmentVacancyTransfer_-1').select('Engineer');// transfer which new vacancy
  
	cy.get('.fa-share').click();//clicking on transfer symbol
	cy.wait(4000)
	cy.get('.close-footer-btn').click();
	cy.wait(3000)
	//cy.get('.au-target:nth-child(1) > .text-center > .fa').click();
	cy.get('#recruitmentApplicantPool_buttonGoToApplicant_1_1').click();
	cy.wait(4000)
	cy.get('#recruitmentApplicantDLG_buttonApplicationItem_-1_0').contains('Engineer');
}

export function CreateProcessAction(Name, candidateStatus, FormName, EmailMessage, subject) {
	cy.wait(5000)
	cy.get('#processSteps > .col-2 > .p-0 > .list-view-add').click()
	cy.wait(4000)
	XHRWait();
	cy.get('.pr-20 > .input-group > .add-on-inputs').type(Name, { force: true }); //Process Action name
	cy.get('.pr-20 > :nth-child(5) > .form-control').select(candidateStatus, { force: true });
	//cy.get('.d-flex:nth-child(6) > .flex-item .form-control').select(VacancyTag, { force: true });
	//cy.get('.d-flex:nth-child(6) .col-4 > .au-target:nth-child(2)').click(); // replace existing Task
	cy.get('#bWipePreviousTags1').click({ force: true }); // replace existing Task
	cy.get('.col-12 > .flex-item > .input-group > .form-control').select(FormName, { force: true }); //onboarding form
	//cy.get('.flex-item > .col-4 > .switch-btn-inactive').click();
	//cy.get('#bAllFormsMustBeApproved1').click({ force: true });
	//cy.get('.col-8 > .input-group:nth-child(2) > .form-control').click();
	cy.get('.pr-10 > .form-control').type("Please check your email for the link. "); //SMS message
	cy.get('.pl-10 > .form-control').type('Sent Test');//descripton
	cy.get('.input-group:nth-child(5) > .add-on-inputs').type(subject); //Email Subject
	cy.get('.trumbowyg-editor').type(EmailMessage); //Email message
	
	cy.get('#processSteps .btn-green').click(); //save
	cy.wait(4000)
	XHRWait();


}

export function AddProcessActionToProcess(ProcessAction) {
	cy.wait(5000)
	cy.get('.col-12:nth-child(4) > .col-12 .green-td-cell > div').click();
	cy.wait(2000)
	cy.get('#recruitmentProcess_cmbProcessStepItemProcessStepList_1_0').select(ProcessAction);
	cy.wait(2000)
	cy.get('#recruitmentProcess_buttonProcessStepItemSave_1_0').click();
	cy.get('#recruitmentProcess_liProcessStepItem_1_0 > .text-left > .au-target:nth-child(2)').contains(ProcessAction)


}

export function  ChangeProcessAction(ProcessAction, ApplyAction = false) {
	
	cy.get('#recruitmentApplicationDetailsDLG_cmbProcessActions_1').select(ProcessAction);
	/*cy.get('#recruitmentApplicationDetailsDLG_cmbProcessActions_1').within(() => {
		//cy.get('recruitmentApplicationDetailsDLG_liProcessActionItem_-1_6').select(ProcessAction);
	})*/
	cy.wait(8000)
	if (ApplyAction === true) {
		//cy.get('.mt-20 > span').click();
		cy.get('#recruitmentApplicationDetailsDLG_buttonApplyAction_1 > span').click();
		cy.wait(4000)
		XHRWait()
	}

}

export function CheckCommunicationHistortyTable(Position, ProcessAction, Sender) {
	cy.wait(5000)
	cy.get('.au-target:nth-child(7) > .col-12 td:nth-child(1)').contains(Position);
	cy.get('.au-target:nth-child(7) > .col-12 td:nth-child(2)').contains(ProcessAction);
	cy.get('.col-12:nth-child(2) > .table td:nth-child(5)').contains(Sender);
}

export function AddApplication(VacancyName) {
	cy.wait(5000)
	//cy.get('.col-12 > .vertical-center-parent > .form-control').select(VacancyName);
	cy.get('#recruitmentApplicantDLG_cmbAddApplication_-1').select(VacancyName);
	cy.get('#recruitmentApplicantDLG_buttonAddApplication_-1 > span').click();


	cy.wait(2000)
	XHRWait()
}

export function AddAllVariable() {
	cy.wait(5000)
	cy.get('#recruitmentStep_textareaEmailMessage_1').clear();


	//cy.get('.trumbowyg-editor').clear();
	cy.get('#recruitmentStep_liVariableList_1_0').click();
	cy.get('.blue-btn-color:nth-child(2)').click();
	cy.get('#recruitmentStep_textareaEmailMessage_1').type('{enter}');
	cy.get('#recruitmentStep_liVariableList_1_1').click();
	cy.get('.blue-btn-color:nth-child(2)').click();
	cy.get('#recruitmentStep_textareaEmailMessage_1').type('{enter}');
	cy.get('#recruitmentStep_liVariableList_1_2').click();
	cy.get('.blue-btn-color:nth-child(2)').click();
	cy.get('#recruitmentStep_textareaEmailMessage_1').type('{enter}');
	cy.get('#recruitmentStep_liVariableList_1_3').click();
	cy.get('.blue-btn-color:nth-child(2)').click();
	cy.get('#recruitmentStep_textareaEmailMessage_1').type('{enter}');
	cy.get('#recruitmentStep_liVariableList_1_4').click();
	cy.get('.blue-btn-color:nth-child(2)').click();
	cy.get('#recruitmentStep_textareaEmailMessage_1').type('{enter}');
	cy.get('#recruitmentStep_liVariableList_1_5').click();
	cy.get('.blue-btn-color:nth-child(2)').click();
	cy.get('#recruitmentStep_textareaEmailMessage_1').type('{enter}');
	cy.get('#recruitmentStep_liVariableList_1_6').click();
	cy.get('.blue-btn-color:nth-child(2)').click();
	cy.get('#recruitmentStep_textareaEmailMessage_1').type('{enter}');
	cy.get('#recruitmentStep_liVariableList_1_7').click();
	cy.get('.blue-btn-color:nth-child(2)').click();
	cy.get('#recruitmentStep_textareaEmailMessage_1').type('{enter}');
	cy.get('#recruitmentStep_liVariableList_1_8').click();
	cy.get('.blue-btn-color:nth-child(2)').click();
	cy.get('#recruitmentStep_textareaEmailMessage_1').type('{enter}');
	cy.get('#recruitmentStep_liVariableList_1_9').click();
	cy.get('.blue-btn-color:nth-child(2)').click();
	cy.get('#recruitmentStep_textareaEmailMessage_1').type('{enter}');
	cy.get('#recruitmentStep_txtEmailSubject_1').type('hello Subject');//Email Subject
	cy.get('#processSteps .btn-green').click();//Save

	//cy.get('#processSteps > .modifying-bar-with-tab > .btn-group > .btn-green > .btn-text-width').click()
	XHRWait()
}

export function HireCandidate() {
	cy.wait(4000)
	cy.get('#recruitment_RecruitmentApplicantNode_1_0 .fa-pencil').click();
	//cy.get('#recruitment_RecruitmentApplicantNode_1_0 .d-flex > .au-target').click();

	cy.wait(5000)
	XHRWait()
	cy.get('#recruitmentApplicantNodeDOJ1 > .form-control').clear().type('03/06/2021',{ force: true });
	//cy.get('.au-target > .btnTick').click({ force: true });
	cy.wait(3000)
	cy.get('#recruitmentApplicationDetailsDLG_buttonApplicationSave1_1 > .btn-text-width').click({ force: true });//Save
	cy.wait(3000)
	cy.get('#recruitmentApplicationDetailsDLG_buttonApplicationClose2_1').click();//close

	//cy.get('.au-target > .btnTick').click({ force: true });
	cy.wait(5000)
	//cy.get('.close-footer-btn').click();
	cy.wait(5000);
	//cy.get('tr:nth-child(' + position + ') .fa-lg').click();
	cy.get('#recruitment_RecruitmentApplicantNode_1_0 > .text-center > .fa').click();//Click on candidate check box

	cy.get('.btnUserAdd > .btn-text-width').click();//Hire candidate
	cy.wait(5000)
	XHRWait()

}

export function ArchiveCandidate(position) {
	cy.wait(4000)
	cy.get('tr:nth-child(' + position + ') .fa-lg').click();
	cy.get('.btnArchive').click();
	cy.wait(3000)
	XHRWait()

}

export function DeclineCandidate(position) {
	cy.wait(4000)
	cy.get('tr:nth-child(' + position + ') .fa-lg').click();
	cy.get('.btnBan > .btn-text-width').click();
	cy.wait(3000)
	XHRWait()
}

export function AddOnbordingForm(FormName) {
	cy.wait(4000)
	cy.get('.col-12 > .flex-item > .input-group > .form-control').select('Onboarding Form 1st Interview');
	cy.get('#processSteps .btn-green').click();
	XHRWait()

}

export function CheckAssociatedFormTableStatus(rowNumber, Status) {
	switch (Status) {
		case 'Pending': {
			cy.get('.au-target:nth-child(1) > .text-center > .purblue-border').contains(Status);
			break
		}
		case 'Submitted': {
			cy.get('.au-target:nth-child(2) > .text-center > .light-purple-border').contains(Status);
			break
		}
	}
}

export function CheckAssociatedFormTable(rowNumber, Status, FormName, FormTemplateType) {
	cy.wait(5000)
	CheckAssociatedFormTableStatus(Status, rowNumber)
	cy.get('.au-target:nth-child(' + rowNumber + ') > td:nth-child(2)').contains(FormName);
	cy.get('.au-target:nth-child(' + rowNumber + ') > td .mb-0').contains(FormTemplateType);

}

export function SearchCandidateInRecruimentTab(FormName) {
	cy.wait(3000)
	cy.get('.pl-0:nth-child(2) > .input-group > .form-control').clear().type(FormName);
	XHRWait()

}


export function ChangeEmployeeLinkingThreshold() {
	cy.wait(4000)
	cy.get('.pr-0 .pl-0 .form-control').clear().type('50');
	cy.get('#settings1 .btn-green > .btn-text-width').click(); //save
	cy.wait(2000)
	XHRWait()
	//Email Threshold
	cy.get('#recruitmentAdminSettings_buttonReturneeMatchTemplateItemEdit_1_0').click();
	cy.get('#recruitmentAdminSettings_txtReturneeMatchTemplatePoints_1_0').type('50');
	cy.get('#recruitmentAdminSettings_buttonReturneeMatchTemplateItemSave_1_0').click();
	cy.wait(4000)
	//First Name Threshold
	cy.get('#recruitmentAdminSettings_buttonReturneeMatchTemplateItemEdit_1_1').click();
	cy.get('#recruitmentAdminSettings_txtReturneeMatchTemplatePoints_1_1').type('20');
	cy.get('#recruitmentAdminSettings_buttonReturneeMatchTemplateItemSave_1_1').click();
	cy.wait(4000)
	//Last Name Threshold
	cy.get('#recruitmentAdminSettings_buttonReturneeMatchTemplateItemEdit_1_2').click();
	cy.get('#recruitmentAdminSettings_txtReturneeMatchTemplatePoints_1_2').type('20');
	cy.get('#recruitmentAdminSettings_buttonReturneeMatchTemplateItemSave_1_2').click();
	cy.wait(4000)
	//Mobile Threshold
	cy.get('#recruitmentAdminSettings_buttonReturneeMatchTemplateItemEdit_1_3').click();
	cy.get('#recruitmentAdminSettings_txtReturneeMatchTemplatePoints_1_3').type('10');
	cy.get('#recruitmentAdminSettings_buttonReturneeMatchTemplateItemSave_1_3').click();
}

export function CheckStatusInRecruitmentTable(Status) {
	cy.wait(4000)
	cy.get('tr > .text-center:nth-child(3)').contains(Status)
}

export function OpenCandidate(rowNumber) {
	cy.wait(4000)
	cy.get('.au-target:nth-child(' + rowNumber + ') > .text-center > .fa').click();

}

export function ChangeDuplicateThreshold() {
	cy.wait(5000)
	cy.get('.p-0 > .col-12 > .pl-0 .form-control').clear().type('50');
	cy.wait(2000)
	cy.get('#settings1 .btn-group > .btn-green').click();
	cy.wait(4000)
	cy.get('.col-6:nth-child(1) > .table .au-target:nth-child(1) .flex-item').click();
	cy.get('td > .form-control').clear().type('50');
	//cy.get('.fa-check').click();
	cy.get('#recruitmentAdminSettings_buttonDuplicateMatchTemplateItemSave_1_0').click();

	cy.wait(2000)
	cy.get('.col-6:nth-child(1) .au-target:nth-child(2) .flex-item').click();
	cy.get('td > .form-control').clear().type('20');
	cy.get('#recruitmentAdminSettings_buttonDuplicateMatchTemplateItemSave_1_1').click();

	cy.wait(2000)
	cy.get('.col-6:nth-child(1) .au-target:nth-child(3) .flex-item').click();
	cy.get('td > .form-control').clear().type('20');
	cy.get('#recruitmentAdminSettings_buttonDuplicateMatchTemplateItemSave_1_2').click();
	cy.wait(2000)
	cy.get('.col-6:nth-child(1) .au-target:nth-child(4) .flex-item').click();
	cy.get('td > .form-control').clear().type('20');
	cy.get('#recruitmentAdminSettings_buttonDuplicateMatchTemplateItemSave_1_3').click();
	cy.wait(2000)

}

export function HireAllCandidate() {
	cy.wait(3000)
	cy.get('thead .text-center > .au-target').click();
	cy.get('.btnUserAdd > .btn-text-width').click();
	
}

