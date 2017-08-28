const assert = require('assert')
const LoginPage = require('../../pageobjects/pages/login.page')
const NavBarSection = require('../../pageobjects/sections/navBar.section')

describe('NavBar', () => {
	beforeEach(() => {
	  LoginPage.login()
	  browser.waitForVisible('.navbar-custom')
	})

	// Nav > Inventory
	describe('Inventory', () => {
	  beforeEach(() => {
		  NavBarSection.clickNavItem(NavBarSection.inventoryLink)
	  })

		// Nav > Inventory > Item Management
		describe('Inventory > Item Management', () => {
			it('should navigate to Inventory > Item Management page from Home Page when clicked', () => {
				NavBarSection.urlAssertion((NavBarSection.itemManagementLink), 'inventory')
			})
		})

		// Nav > Inventory > Menu-Setup
	  describe('Inventory > Menu-Setup', () => {
		  beforeEach(() => {
		  	NavBarSection.menuSetupLink.waitForExist()
			  NavBarSection.clickNavItem(NavBarSection.menuSetupLink)
		  })
		  it('should navigate to Inventory > Menu-Setup > Menu Screens page from Home Page when clicked', () => {
			  NavBarSection.urlAssertion((NavBarSection.menuScreensLink), 'inventory/menu')
		  })
		  it('should navigate to Inventory > Menu-Setup > Tax Rules page from Home Page when clicked', () => {
			  NavBarSection.urlAssertion((NavBarSection.taxRulesLink), 'inventory/taxes')
		  })
		  it('should navigate to Inventory > Menu-Setup > Sales Categories page from Home Page when clicked', () => {
			  NavBarSection.urlAssertion((NavBarSection.salesCategoriesLink), 'inventory/sales-categories')
		  })
		  it('should navigate to Inventory > Menu-Setup > Modifier Groups page from Home Page when clicked', () => {
			  NavBarSection.urlAssertion((NavBarSection.modifierGroupsLink), 'inventory/modifier-groups')
		  })
		  it('should navigate to Inventory > Menu-Setup > Pricing Events page from Home Page when clicked', () => {
			  NavBarSection.urlAssertion((NavBarSection.pricingEventsLink), 'inventory/pricing-events')
		  })
	  })
	})

	// Nav > Labor
	describe('Labor', () => {
	  beforeEach(() => {
			NavBarSection.clickNavItem(NavBarSection.laborLink)
	  })

		// Nav > Add/Edit Employees
		describe('Labor > Add/Edit Employees', () => {
			it('should navigate to Labor > Add/Edit Employees page from Home Page when clicked', () => {
				NavBarSection.urlAssertion((NavBarSection.addEditEmployeesLink), 'labor/employees')
			})
		})

		// Nav > Labor > Labor Set-Up
	  describe('Labor > Labor Set-Up', () => {
			beforeEach(() => {
		   NavBarSection.clickNavItem(NavBarSection.laborSetupLink)
			})
			it('should navigate to Labor > Labor Set-Up > Job Codes page from Home Page when clicked', () => {
				NavBarSection.urlAssertion((NavBarSection.jobCodesLink), 'labor/job-codes')
			})
			it('should navigate to Labor > Labor Set-Up > Permissions page from Home Page when clicked', () => {
				NavBarSection.urlAssertion((NavBarSection.permissionsLink), 'labor/permissions')
			})
	  })
	})

	// Nav > Reports
	describe('Reports', () => {
	  beforeEach(() => {
		  NavBarSection.clickNavItem(NavBarSection.reportsLink)
	  })
	  it('should navigate to Reports > Audits Report page from Home Page when clicked', () => {
		  NavBarSection.urlAssertion((NavBarSection.auditsReportLink), 'reports/audits')
	  })
	  it('should navigate to Reports > Consumption Report page from Home Page when clicked', () => {
		  NavBarSection.urlAssertion((NavBarSection.consumptionReportLink), 'reports/consumption/create')
	  })
	  it('should navigate to Reports > Sales Report page from Home Page when clicked', () => {
		  NavBarSection.urlAssertion((NavBarSection.salesReportLink), 'reports/sales/create')
	  })
	  it('should navigate to Reports > Transactions Report page from Home Page when clicked', () => {
		  NavBarSection.urlAssertion((NavBarSection.transactionsReportLink), 'reports/transaction/create')
	  })
	  it('should navigate to Reports > Labor Report page from Home Page when clicked', () => {
		  NavBarSection.urlAssertion((NavBarSection.laborReportLink), 'reports/labor/create')
	  })
	})

	// Nav > Settings
	describe('Settings', () => {
	  beforeEach(() => {
		  NavBarSection.clickNavItem(NavBarSection.settingsLink)
	  })
		// Nav > Settings > General Settings
	  describe('Settings > General Settings', () => {
	    beforeEach(() => {
		    NavBarSection.clickNavItem(NavBarSection.generalSettingsLink)
	    })
	    it('should navigate to Settings > General Settings > CRM page from Home Page when clicked', () => {
		    NavBarSection.urlAssertion((NavBarSection.generalSettingsCRMLink), 'settings/crm')
	    })
	    it('should navigate to Settings > General Settings > Labor page from Home Page when clicked', () => {
		    NavBarSection.urlAssertion((NavBarSection.generalSettingsLaborLink), 'settings/labor')
	    })
	    it('should navigate to Settings > General Settings > Manager Approvals page from Home Page when clicked', () => {
		    NavBarSection.urlAssertion((NavBarSection.generalSettingsManagerApprovalsLink), 'settings/manager')
	    })
	    it('should navigate to Settings > General Settings > Menu page from Home Page when clicked', () => {
		    NavBarSection.urlAssertion((NavBarSection.generalSettingsMenuLink), 'settings/menu')
	    })
	  })

		// Nav > Settings > Venue Set-Up
	  describe('Settings > Venue Set-Up', () => {
	    beforeEach(() => {
		    NavBarSection.clickNavItem(NavBarSection.venueSetupLink)
	    })
	    it('should navigate to Settings > Venue Set-Up > Venue Details page from Home Page when clicked', () => {
		    NavBarSection.urlAssertion((NavBarSection.venueSetupVenueDetailsLink), 'settings/venue')
	    })
	    it('should navigate to Settings > Venue Set-Up > Payments page from Home Page when clicked', () => {
		    NavBarSection.urlAssertion((NavBarSection.venueSetupPaymentsLink), 'settings/payment')
	    })
	    it('should navigate to Settings > Venue Set-Up > POS Layout page from Home Page when clicked', () => {
		    NavBarSection.urlAssertion((NavBarSection.venueSetupPOSLayoutLink), 'settings/layout')
	    })
	    it('should navigate to Settings > Venue Set-Up > Itemized Receipt page from Home Page when clicked', () => {
		    NavBarSection.urlAssertion((NavBarSection.venueSetupItemizedReceiptLink), 'settings/receipt')
	    })
	  })

		// Nav > Settings > Hardware Set-Up
		describe('Settings > Hardware Set-Up', () => {
			beforeEach(() => {
				NavBarSection.clickNavItem(NavBarSection.hardwareSetupLink)
			})
			it('should navigate to Settings > Hardware Set-Up > Add Printers page from Home Page when clicked', () => {
				NavBarSection.urlAssertion((NavBarSection.hardwareSetupPrintersLink), 'settings/printers')
			})
			it('should navigate to Settings > Hardware Set-Up > Add Stations page from Home Page when clicked', () => {
				NavBarSection.urlAssertion((NavBarSection.hardwareSetupStationsLink), 'settings/stations')
			})
			it('should navigate to Settings > Hardware Set-Up > Add Registers page from Home Page when clicked', () => {
				NavBarSection.urlAssertion((NavBarSection.hardwareSetupRegistersLink), 'settings/registers')
			})
			it('should navigate to Settings > Hardware Set-Up > Assign Printers page from Home Page when clicked', () => {
				NavBarSection.urlAssertion((NavBarSection.hardwareSetupAssignPrintersLink), 'settings/assign-printers')
			})
		})
	})
	
	// Publish Changes
	describe('Publish Changes', () => {
		beforeEach(() => {
			NavBarSection.clickNavItem(NavBarSection.publishChangesButton)
		})
		it('should display a confirmation modal when publish button is clicked from Home Page', () => {
			assert.equal((NavBarSection.publishChangesModalContent.isExisting()), true)
		})
		it('should close modal when cancel is clicked', function () {
			NavBarSection.clickNavItem(NavBarSection.publishChangesModalCancel)
			assert.equal((NavBarSection.publishChangesModalContent.isExisting()), false)
		})
		it('should close modal when confirm is clicked', function () {
			NavBarSection.clickNavItem(NavBarSection.publishChangesModalConfirm)
			assert.equal((NavBarSection.publishChangesModalContent.isExisting()), false)
		})
	})
})
