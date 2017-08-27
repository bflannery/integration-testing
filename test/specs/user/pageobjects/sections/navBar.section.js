const assert = require('assert')
const Section = require('./section')

class NavBarSection extends Section {

	// Inventory
	get inventoryLink() { return browser.element('#nav-inventory a') }
	get itemManagementLink() { return browser.element('#nav-inventory #nav-view_inventory a') }

	// Menu Set-Up
	get menuSetupLink() { return browser.element('#nav-inventory #nav-menu_setup a') }

	// Menu Set-Up Sub-Menu Items
	get menuScreensLink() { return browser.element('#nav-inventory #nav-menu a') }
	get taxRulesLink() { return browser.element('#nav-inventory #nav-taxes a') }
	get salesCategoriesLink() { return browser.element('#nav-inventory #nav-sales_categories a') }
	get modifierGroupsLink() { return browser.element('#nav-inventory #nav-modifier_groups a') }
	get pricingEventsLink() { return browser.element('#nav-inventory #nav-pricing_events a') }

	// Labor
	get laborLink() { return browser.element('#nav-labor a') }
	get addEditEmployeesLink() { return browser.element('#nav-labor #nav-employees a') }

	// Labor Set-Up
	get laborSetupLink() { return browser.element('#nav-labor #nav-labor_setup a') }

	// Labor Set-Up Sub-Menu Items
	get jobCodesLink() { return browser.element('#nav-labor #nav-job_codes a') }
	get permissionsLink() { return browser.element('#nav-labor #nav-permissions a') }

	// Reports
	get reportsLink() { return browser.element('#nav-reports a') }
	get auditsReportLink() { return browser.element('#nav-reports #nav-audits a') }
	get consumptionReportLink() { return browser.element('#nav-reports #nav-consumption a') }
	get salesReportLink() { return browser.element('#nav-reports #nav-sales a') }
	get transactionsReportLink() { return browser.element('#nav-reports #nav-transaction a') }
	get laborReportLink() { return browser.element('#nav-reports #nav-labor a') }

	// Settings
	get settingsLink() { return browser.element('#nav-settings a') }

	// General Settings
	get generalSettingsLink() { return browser.element('#nav-general_settings a') }

	// General Settings Sub-Menu Items
	get generalSettingsCRMLink() { return browser.element('#nav-general_settings #nav-crm a') }
	get generalSettingsLaborLink() { return browser.element('#nav-general_settings #nav-labor a') }
	get generalSettingsManagerApprovalsLink() { return browser.element('#nav-general_settings #nav-manager a') }
	get generalSettingsMenuLink() { return browser.element('#nav-general_settings #nav-menu a') }

	// Venue Set-Up Settings
	get venueSetupLink() { return browser.element('#nav-venue_setup a') }

	// Venue Set-Up Sub-Menu Items
	get venueSetupVenueDetailsLink() { return browser.element('#nav-venue_setup #nav-venue a') }
	get venueSetupPaymentsLink() { return browser.element('#nav-venue_setup #nav-payment a') }
	get venueSetupPOSLayoutLink() { return browser.element('#nav-venue_setup #nav-layout a') }
	get venueSetupItemizedReceiptLink() { return browser.element('#nav-venue_setup #nav-receipt a') }

	// Hardware Set-Up
	get hardwareSetupLink() { return browser.element('#nav-hardware_setup a') }

	// Hardware Set-Up Sub-Menu Items
	get hardwareSetupPrintersLink() { return browser.element('#nav-hardware_setup #nav-printers a') }
	get hardwareSetupStationsLink() { return browser.element('#nav-hardware_setup #nav-stations a') }
	get hardwareSetupRegistersLink() { return browser.element('#nav-hardware_setup #nav-registers a') }
	get hardwareSetupAssignPrintersLink() { return browser.element('#nav-hardware_setup #nav-assignPrinters a') }

	//Publish Changes
	get publishChangesButton() { return browser.element('#nav-publish button')}
	get publishChangesModal() { return browser.element('#modal-confirm-publish')}
	get publishChangesModalCancel() { return browser.element('#modal-confirm-publish .modal-footer button:first-child')}
	get publishChangesModalConfirm() { return browser.element('#modal-confirm-publish .modal-footer button:nth-of-type(2)')}
	get publishChangesButtonSaving() {return browser.element('#nav-publish button .fa-spinner')}

	// Clicks a Nav Item
	clickNavItem(item) {
	  item.click()
	}

	// Returns the current url
	returnURL() {
	  return browser.getUrl()
	}

	// Checks if Nav Route matches the correct url
	urlAssertion(selector, path) {
  	this.clickNavItem(selector)
		assert.equal(this.returnURL(), (this.getBaseUrl() + path))
	}
}

module.exports = new NavBarSection()
