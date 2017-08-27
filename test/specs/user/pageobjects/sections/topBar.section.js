const assert = require('assert')
const Section = require('./section')

class TopBarSection extends Section {
	
	get unionLogo() { return browser.element('div.logo-div a img') }
	get userIcon() { return browser.element('a.dropdown-toggle') }
	get changePasswordLink() { return browser.element('.dropdown-menu li:first-child a') }
	get logoutLink() { return browser.element('.dropdown-menu li:nth-child(2)') }
	
	// Clicks a Nav Item
	clickTopBarItem(item) {
		item.click()
	}
	
	// Returns the current url
	returnURL() {
		return browser.getUrl()
	}
	
	// Checks if Nav Route matches the correct url
	urlAssertion(selector, path) {
		this.clickTopBarItem(selector)
		assert.equal(this.returnURL(), (this.getBaseUrl() + path))
	}
	
	getUserIcon() {
	  this.clickTopBarItem(this.userIcon)
	  return this.userIcon.getAttribute('aria-expanded')
	}
}

module.exports = new TopBarSection()
