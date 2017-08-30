const assert = require('assert')
const LoginPage = require('../../pageobjects/pages/login.page')
const InventoryPage = require('../../pageobjects/pages/inventory.page')

describe('Union Portal Inventory page', function () {
	beforeEach(function () {
		LoginPage.login()
		browser.waitForVisible('#topnav')
		browser.waitForVisible('.navbar-custom')
		InventoryPage.open()
		InventoryPage.table.waitForExist()
	})
	describe('Item Status', () => {
		it('should navigate to the inventory page url', () => {
			const url = browser.getUrl()
			assert.equal(url, InventoryPage.getBaseUrl().concat('inventory'))
		})
		it('should display all items when page is loaded', () => {
			const allRows = InventoryPage.tableRowItemStatus.elements()
			if(allRows) {
				return allRows.value.forEach((allRow) => {
					assert.equal((
						allRow.getCssProperty('color').value === 'rgba(37,172,90,1)' ||
						allRow.getCssProperty('color').value === 'rgba(238,28,37,1)' ||
						allRow.getCssProperty('color').value === 'rgba(216,200,44,1)'), true)
				})
			}
			assert.equal(allRows, 0)
		})
		it('should only display only active inventory items when active is clicked', () => {
			InventoryPage.statusColorAssertion(InventoryPage.activeStatusButton, 'rgba(37,172,90,1)')
		})
		it('should only display inactive inventory items when inactive is clicked', () => {
			InventoryPage.statusColorAssertion(InventoryPage.inactiveStatusButton, 'rgba(238,28,37,1)')
		})
		it('should only display pending inventory items when pending is clicked', () => {
			InventoryPage.statusColorAssertion(InventoryPage.pendingStatusButton, 'rgba(216,200,44,1)')
		})
	})
	
	describe('Column Toggle' , () => {
		it.only('should toggle the order of items when header column is clicked', () => {
			InventoryPage.toggleColumnsAssertion()
		})
	})
	
})
