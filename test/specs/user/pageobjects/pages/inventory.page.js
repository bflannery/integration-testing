const Page = require('./page')

class InventoryPage extends Page {
	
	get statusButtonsContainer() {
		return browser.element('.btn-group')
	}
	
	get allStatusButton() {
		return browser.element('div.btn-group button:first-child')
	}
	get activeStatusButton() {
		return browser.element('div.btn-group button:nth-child(2)')
	}
	get inactiveStatusButton() {
		return browser.element('.btn-group button:nth-child(3)')
	}
	get pendingStatusButton() {
		return browser.element('.btn-group button:nth-child(4)')
	}
	get tableRowItem() {
		return browser.element('table tbody tr')
	}
	get tableActionButton() {
		return browser.element('.actions div a:nth-child(3)')
	}
	open() {
		super.open('/inventory')
	}
}

module.exports = new InventoryPage()