const assert = require('assert')
const LoginPage = require('../../pageobjects/pages/login.page')
const HomePage = require('../../pageobjects/pages/home.page')

describe('Union Portal Home page', function () {
	beforeEach(function () {
	  LoginPage.login()
	  browser.waitForVisible('#topnav')
	  browser.waitForVisible('.navbar-custom')
	})
	it('should navigate to the home page url', () => {
		const url = browser.getUrl()
		assert.equal(url, HomePage.getBaseUrl())
	})
})
