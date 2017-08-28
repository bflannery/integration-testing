const assert = require('assert')
const Section = require('./section')

class NavBarSection extends Section {

	// Inventory
	get inventoryLink() {
		return browser.element('#navigation ul.navigation-menu li:nth-child(2) a')
	}
	get itemManagementLink() {
		return browser.element('#navigation li:nth-child(2) ul.submenu li:first-child a')
	}

	// Menu Set-Up
	get menuSetupLink() {
		return browser.element('#navigation li:nth-child(2) ul.submenu li:nth-child(2) a')
	}

	// Menu Set-Up Sub-Menu Items
	get menuScreensLink() {
		return browser.element('#navigation li:nth-child(2) ul.submenu li:nth-child(2) ul.submenu li:first-child a')
	}
	get taxRulesLink() {
		return browser.element('#navigation li:nth-child(2) ul.submenu li:nth-child(2) ul.submenu li:nth-child(2) a')
	}
	get salesCategoriesLink() {
		return browser.element('#navigation li:nth-child(2) ul.submenu li:nth-child(2) ul.submenu li:nth-child(3) a')
	}
	get modifierGroupsLink() {
		return browser.element('#navigation li:nth-child(2) ul.submenu li:nth-child(2) ul.submenu li:nth-child(4) a')
	}
	get pricingEventsLink() {
		return browser.element('#navigation li:nth-child(2) ul.submenu li:nth-child(2) ul.submenu li:nth-child(5) a')
	}

	// Labor
	get laborLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(3) a')
	}
	get addEditEmployeesLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(3) ul.submenu li:first-child a')
	}

	// Labor Set-Up
	get laborSetupLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(3) ul.submenu li:nth-child(2) a')
	}

	// Labor Set-Up Sub-Menu Items
	get jobCodesLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(3) ul.submenu li:nth-child(2) ul.submenu li:first-child a')
	}
	get permissionsLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(3) ul.submenu li:nth-child(2) ul.submenu li:nth-child(2) a')
	}

	// Reports
	get reportsLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(4) a')
	}
	get auditsReportLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(4) ul.submenu li:first-child  a')
	}
	get consumptionReportLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(4) ul.submenu li:nth-child(2) a')
	}
	get salesReportLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(4) ul.submenu li:nth-child(3) a')
	}
	get transactionsReportLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(4) ul.submenu li:nth-child(4) a')
	}
	get laborReportLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(4) ul.submenu li:nth-child(5) a')
	}

	// Settings
	get settingsLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(5) a')
	}

	// General Settings
	get generalSettingsLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(5) ul.submenu li[class="has-submenu"]:first-child a')
	}

	// General Settings Sub-Menu Items
	get generalSettingsCRMLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(5) ul.submenu li[class="has-submenu"]:first-child ul.submenu li:first-child a')
	}
	get generalSettingsLaborLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(5) ul.submenu li[class="has-submenu"]:first-child ul.submenu li:nth-child(2) a')
	}
	get generalSettingsManagerApprovalsLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(5) ul.submenu li[class="has-submenu"]:first-child ul.submenu li:nth-child(3) a')
	}
	get generalSettingsMenuLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(5) ul.submenu li[class="has-submenu"]:first-child ul.submenu li:nth-child(4) a')
	}

	// Venue Set-Up Settings
	get venueSetupLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(5) ul.submenu li[class="has-submenu"]:nth-child(2) a') }

	// Venue Set-Up Sub-Menu Items
	get venueSetupVenueDetailsLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(5) ul.submenu li[class="has-submenu"]:nth-child(2) ul.submenu li:first-child a')
	}
	get venueSetupPaymentsLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(5) ul.submenu li[class="has-submenu"]:nth-child(2) ul.submenu li:nth-child(2) a')
	}
	get venueSetupPOSLayoutLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(5) ul.submenu li[class="has-submenu"]:nth-child(2) ul.submenu li:nth-child(3) a')
	}
	get venueSetupItemizedReceiptLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(5) ul.submenu li[class="has-submenu"]:nth-child(2) ul.submenu li:nth-child(4) a')
	}

	// Hardware Set-Up
	get hardwareSetupLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(5) ul.submenu li[class="has-submenu"]:nth-child(3) a')
	}

	// Hardware Set-Up Sub-Menu Items
	get hardwareSetupPrintersLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(5) ul.submenu li[class="has-submenu"]:nth-child(3) ul.submenu li:first-child a')
	}
	get hardwareSetupStationsLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(5) ul.submenu li[class="has-submenu"]:nth-child(3) ul.submenu li:nth-child(2) a')
	}
	get hardwareSetupRegistersLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(5) ul.submenu li[class="has-submenu"]:nth-child(3) ul.submenu li:nth-child(3) a')
	}
	get hardwareSetupAssignPrintersLink() {
		return browser.element('#navigation ul.navigation-menu li[class="has-submenu"]:nth-child(5) ul.submenu li[class="has-submenu"]:nth-child(3) ul.submenu li:nth-child(4) a')
	}

	//Publish Changes
	get publishChangesButton() {
		return browser.element('#navigation ul.navigation-menu li[class="last-elements"] button')
	}
	get publishChangesModalContent() {
		return browser.element('.modal .modal-backdrop .modal-dialog')
	}
	
	get publishChangesModalCancel() {
		return browser.element('.modal .modal-dialog .modal-content .modal-footer button:first-child')
	}
	get publishChangesModalConfirm() {
		return browser.element('.modal .modal-dialog .modal-content .modal-footer button:nth-of-type(2)')
	}
	
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
		assert.equal(this.returnURL(), (this.getBaseUrl()).concat(path))
	}
}

module.exports = new NavBarSection()
