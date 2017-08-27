const assert = require('assert')
const LoginPage = require('../../pageobjects/pages/login.page')
const secret = require('../../../../../secret').secret

describe('Union Portal Login page', function () {
	beforeEach(function () {
		LoginPage.open()
	})
	it('should have a Union Manager Portal Logo', function () {
	  const logo = $('img')
	  const attr = logo.getAttribute('alt')
	  assert.equal(attr, 'Union manager portal logo')
	})
	it('should navigate to home when valid credentials are submitted', function () {
	  LoginPage.username.setValue(secret.login)
	  LoginPage.password.setValue(secret.password)
	  LoginPage.submit()
	  browser.waitForVisible('.js-page-content')

	  const homeURL = browser.getUrl()
	  const baseUrl = LoginPage.getBaseUrl()
	  assert.equal(homeURL, baseUrl)

	})
	it('should not change routes when invalid credentials are submitted ', function () {
		LoginPage.username.setValue('test@email.com')
		LoginPage.password.setValue('password')
	  LoginPage.submit()

	  const loginUrL = browser.getUrl()
	  const baseUrl = LoginPage.getBaseUrl()
	  assert.equal(loginUrL, baseUrl.concat('login'))
	})
	it('should display a error pop-up on failed log in', function () {
	  const errorBefore = browser.isExisting('.notifyjs-wrapper')
	  assert.equal(errorBefore, false)

	  LoginPage.username.setValue('test@email')
	  LoginPage.password.setValue('password')
	  LoginPage.submit()

	  const errorAfter = browser.isExisting('.notifyjs-wrapper')
	  assert.equal(errorAfter, true)
	})
})
