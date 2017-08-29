const assert = require('assert')
const LoginPage = require('../../pageobjects/pages/login.page')
const InventoryPage = require('../../pageobjects/pages/inventory.page')

describe('Union Portal Inventory page', function () {
	beforeEach(function () {
		LoginPage.login()
		browser.waitForVisible('#topnav')
		browser.waitForVisible('.navbar-custom')
		InventoryPage.open()
		InventoryPage.statusButtonsContainer.waitForExist()
		
	})
	// it('should navigate to the inventory page url', () => {
	// 	const url = browser.getUrl()
	// 	assert.equal(url, InventoryPage.getBaseUrl().concat('inventory'))
	// })
	it('should display all items when page is loaded', () => {
		browser.waitForExist('table tbody')
		const allRows = browser.elements('a[class="item-state"]')
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
		InventoryPage.activeStatusButton.click()
		browser.waitForExist('table tbody')
		const activeRows = browser.elements('a[class="item-state"]')
		if(activeRows) {
			return activeRows.value.forEach((activeRow) => {
				assert.equal(activeRow.getCssProperty('color').value, 'rgba(37,172,90,1)')
			})
		}
		assert.equal(activeRows, 0)
	})
	it('should only display inactive inventory items when inactive is clicked', () => {
		InventoryPage.inactiveStatusButton.click()
		browser.waitForExist('table tbody')
		const inactiveRows = browser.elements('a[class="item-state"]')
		if(inactiveRows) {
			return inactiveRows.value.forEach((inactiveRow) => {
				assert.equal(inactiveRow.getCssProperty('color').value, 'rgba(238,28,37,1)')
			})
		}
		assert.equal(inactiveRows, 0)
	})
	it('should only display pending inventory items when pending is clicked', () => {
		InventoryPage.pendingStatusButton.click()
		browser.waitForExist('table tbody')
		const pendingRows = browser.elements('a[class="item-state"]')
		if(pendingRows) {
			return pendingRows.value.forEach((pendingRow) => {
				assert.equal(pendingRow.getCssProperty('color').value, 'rgba(216,200,44,1)')
			})
		}
		assert.equal(pendingRows, 0, 'pendingRows are zero')
	})
})
