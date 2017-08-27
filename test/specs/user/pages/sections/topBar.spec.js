const assert = require('assert')
const LoginPage = require('../../pageobjects/pages/login.page')
const TopBarSection = require('../../pageobjects/sections/topBar.section')

describe('TopBar', function () {
	beforeEach(function () {
	  LoginPage.login()
	  browser.waitForVisible('#topnav')
	})
	it('should render a Union Logo in the TopBar', function () {
	  assert.equal(TopBarSection.unionLogo.getAttribute('alt'), 'Union manager portal logo link to home page')
	})
	it('should navigate to the Home Page when Union Logo clicked', function () {
	  TopBarSection.urlAssertion(TopBarSection.unionLogo, '')
	})
	it('should toggle a dropdown when User Icon is clicked', function () {
	  assert.equal(TopBarSection.getUserIcon(), 'true')
	})
	it('should navigate to Change Password page when change password is clicked', function () {
		TopBarSection.clickTopBarItem(TopBarSection.userIcon)
		TopBarSection.urlAssertion(TopBarSection.changePasswordLink, 'change-password')
	})
	it('should log a user out when Log Out is clicked', function () {
		TopBarSection.clickTopBarItem(TopBarSection.userIcon)
		TopBarSection.urlAssertion(TopBarSection.logoutLink, 'login')
	})
})
