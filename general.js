export function SignIn(view_width = 1280, view_height = 720) {
    cy.viewport(view_width, view_height)
    cy.visit("https://" + Cypress.env("WEBPAGE"))
    cy.url().should("contain", "https://" + Cypress.env("WEBPAGE"))
    ClickButtonByText("Sign In")
    cy.get("[name=username]").clear()
    cy.get("[name=username]").type("Cypress@unittestdb", { delay: 0.5 })
    cy.get("[type=password]").clear()
    cy.get("[type=password]").type(Cypress.env('PASSWORD'), { delay: 0.5 })
    cy.wait(3000)
    cy.get('.signin-card > .col-12 > .user-pin > .vertical-center-parent > .signin-btn').click()
    cy.wait(6000)
    //CheckTextNotVisible("authenticating. please wait..")
    cy.wait(10000)
    //CheckTextNotVisible("loading home, please wait")
    CheckContains("Timesheets", 25000)
    cy.wait(6000)
    //CheckTextNotVisible("loading home, please wait")

}


export function SignInDevtest(view_width = 1280, view_height = 720) {
    cy.viewport(view_width, view_height)
    cy.visit("https://" + Cypress.env("WEBPAGE2"))
    cy.url().should("contain", "https://" + Cypress.env("WEBPAGE2"))
    ClickButtonByText("Sign In")
    cy.get("[name=username]").clear()
    cy.get("[name=username]").type("Cypress@superhero", { delay: 0.3 })
    cy.get("[type=password]").clear()
    cy.get("[type=password]").type(Cypress.env('PASSWORD2'), { delay: 0.3 })
    cy.get('.signin-card > .col-12 > .user-pin > .vertical-center-parent > .signin-btn').click()
    cy.wait(15000)
    //CheckTextNotVisible("authenticating. please wait")
    cy.wait(4000)
    //CheckTextNotVisible("loading home, please wait")
    CheckContains("Timesheets", 23000)
    //CheckTextNotVisible("loading home, please wait")

}




export function SignInUser(User, Pass) {
    cy.viewport(1440, 900)
    cy.visit("https://" + Cypress.env("WEBPAGE"))
    ClickButtonByText("Sign In")
    cy.url().should("contain", "https://" + Cypress.env("WEBPAGE"))
    cy.get("[name=username]").clear()
    cy.get("[name=username]").type(User, { delay: 0.3 })
    cy.get("[type=password]").clear()
    cy.get("[type=password]").type(Pass, { delay: 0.3 })
    cy.get('.signin-card > .col-12 > .user-pin > .vertical-center-parent > .signin-btn').click()
    cy.wait(15000)
    //CheckTextNotVisible("authenticating. please wait..")
    cy.wait(4000)
    //CheckTextNotVisible("loading home, please wait")
    CheckContains("Timesheets", 20000)
}

export function SignOut() {
    ClickButtonByText("Sign Out")
    cy.wait(3000)
}

/* Wait for all XHR requests to finish */
export function XHRWait() {
    cy.window().then({
        timeout: 120000
    }, win => new Cypress.Promise((resolve, reject) => win.requestIdleCallback(resolve)));
}

/* Switch to given department and user */
export function SwitchToUser(department, user) {
    
    cy.wait(1000)
    cy.get('#tab_0 #managerCombobox').select(department)
    cy.wait(19000)
    cy.get('#tab_0 #emplyeeCombobox').select(user)

    //GetElementNoIndex('#tab_0 > .au-target > #breadcrumb-header > .breadcrumb-item > .btn-group > .breadcrumb-select-staff > .ui-widget > #managerCombobox').select(department)
 
    //CheckTextNotVisible("loading, please wait...")
  
   // GetElementNoIndex('#tab_0 > .au-target > #breadcrumb-header > .breadcrumb-item > .btn-group > .breadcrumb-select-staff > .ui-widget > #emplyeeCombobox').select(user)
    cy.wait(38000)
  
}

/* Changes the status of all shifts in the timesheet to pending */
export function TimesheetToPending() {
   // CheckTextNotVisible("loading, please wait...", 30000)
    cy.wait(30000)
    cy.get('.table > .thead > .au-target > .au-target:nth-child(1) > .au-target').click()
    cy.wait(3000)
    cy.get('.btnEdit > div').click()
    cy.wait(20000)
    CheckNotContains("/^Approved$/", 120000)
    ClickButtonByText("Refresh")
    
}

/* Approve all shift in a timeshift */
export function ApproveTimesheet(wait = true) {
    XHRWait();
    cy.wait(30000)
    //CheckTextNotVisible("loading, please wait...", 30000)
    cy.get('.table > .thead > .au-target > .au-target:nth-child(1) > .au-target').click()
    cy.get('.btn-green:nth-child(3) > div').click();
    
    if (wait == true) { cy.wait(10000) }
   // CheckTextNotVisible("/^Pending$/", 60000)
   // cy.contains("/^Pending$/").should("not.be.visible")
    cy.get('#TimeSheet1 > .container-bg > :nth-child(1)').should('not.contain', '/^Pending$/')
    cy.wait(75000)
    //CheckTextNotVisible("approving the timesheet. please wait..", 60000)
    
}

/* Checks that the given text exists in the HTML file */
export function CheckContains(text, waitTime = 20000) {
    
    return cy.contains(text, { timeout: waitTime })
}

/* Checks that the given text does not exist in the HTML file */
export function CheckNotContains(text, waitTime = 20000) {
    CheckContains(text).should('not.exist', { timeout: waitTime })
}

/* Find and click button based on given text input. Accepts strings
 * and regular expressions as input types
 */
export function ClickButtonByText(text, waitTime = 20000, posttimeout = 2000) {
    CheckContains(text).click({ timeout: waitTime })
    
}

export function ClickButtonByElement(element, waitTime = 20000, posttimeout = 2000) {
    element.click({ timeout: waitTime })
    
}

export function CheckTextNotVisible(text, wait=40000) {
    CheckContains(text, wait).should('not.be.visible', { timeout: wait })
}

/* Searches and returns the specified element */
export function GetElement(text, id = 0) {
    return cy.get(text, { timeout: 20000 }).eq(id)
}

export function GetElementNoIndex(text) {
    return cy.get(text, { timeout: 20000 })
}

export function ElementFind(element, text, id = 0) {
    return element.find(text, { timeout: 20000 }).eq(id)
}

export function GetDateArray() {
    var d = new Date()
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var month = months[d.getMonth()]
    var day = days[d.getDay()]
    var date = ("0" + d.getDate()).slice(-2)
    return { Day: day, Month: month, Date: date }
    //return day + " " + month + " " + date
}

export function GoHome() {
    cy.get('#zambion-cloud-content > .au-target > .hamburger > .ul-no-style > .interaction-yellow').click()
    cy.wait(4000)
}

export function CloseCheckinPopup() {
    cy.get('.float-right').click();

}


export function SearchTheUser(Name) {
    cy.get('#tab_0 .breadcrumb-item:nth-child(2) .breadcrumb-group-item').click() // click search
    cy.get('.ml-15').type(Name) 
    cy.get('.btn-green-fill').click() //search
    cy.wait(5000)
    cy.get('tr:nth-child(1) > .au-target > .vertical-center-parent').click() //view
    cy.get('.show > li:nth-child(1) > .au-target').click() // leftpane
    
    CheckTextNotVisible('loading security profile...')
    cy.wait(5000)

}

export function AddCostCode(CostCode, Description, Owner) {
    cy.wait(4000)
    cy.get('.text-nowrap > div').click({ force: true }) //Add
    cy.wait(3000)
    cy.get('td:nth-child(2) > .form-control').type(CostCode)
    cy.wait(2000)
    cy.get('td:nth-child(3) > .add-on-inputs').type(Description)
    cy.wait(2000)
    cy.get('td:nth-child(14) > .form-control').select(Owner)
    cy.wait(2000)
    cy.get('.fa-check').click()
    
    cy.wait(2000)

}