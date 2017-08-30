const assert = require('assert')
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
	
	get table() {
		return browser.element('table')
	}
	
	get tableHeader() {
		return browser.element('table thead')
	}
	
	get tableHeaderRow() {
		return browser.element('table thead tr')
	}
	
	get tableHeaderRowColumns() {
		return browser.element('table thead tr th')
	}
	
	get tableBody() {
		return browser.element('table tbody')
	}
	
	get tableRowItem() {
		return browser.element('table tbody tr')
	}
	
	get tableRowItemStatus() {
		return browser.element('table tbody tr a[class="item-state"]')
	}
	
	open() {
		super.open('/inventory')
	}
	
	clickItem(item) {
		item.click()
	}
	
	statusColorAssertion(selector, color) {
		this.clickItem(selector)
		this.tableBody.waitForExist()
		const rows = browser.elements('table tbody tr a[class="item-state"]')
		if (rows) {
			return rows.value.forEach((row) => {
				assert.equal(row.getCssProperty('color').value, color)
			})
		}
		assert.equal(rows, 0)
	}
	
	toggleColumnsAssertion() {
		const allColumns = browser.elements('table thead tr th')
		allColumns.value.forEach((singleColumn) => {
			if (singleColumn.getAttribute('class') !== 'sorting_disabled') {
				if(singleColumn.getAttribute('aria-label').includes('Display Name')) {
					assert.equal(singleColumn.getAttribute('class'), 'sorting_asc')
					assert.equal(singleColumn.getAttribute('aria-sort'), 'ascending')
					singleColumn.click()
					assert.equal(singleColumn.getAttribute('class'), 'sorting_desc')
					assert.equal(singleColumn.getAttribute('aria-sort'), 'descending')
				}
				
				singleColumn.click()
				assert.equal(singleColumn.getAttribute('class'), 'sorting_asc')
				assert.equal(singleColumn.getAttribute('aria-sort'), 'ascending')
				singleColumn.click()
				assert.equal(singleColumn.getAttribute('class'), 'sorting_desc')
				assert.equal(singleColumn.getAttribute('aria-sort'), 'descending')
			}
		})
	}
}

module.exports = new InventoryPage()