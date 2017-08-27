// login.page.js

const Page = require('./page')
const secret = require('../../../../../secret').secret

class LoginPage extends Page {
	get username() { return browser.element('input[name="login"]') }
	get password() { return browser.element('input[name="password"]') }
	get loginButton() { return browser.element('button[type="submit"]') }
	
	open() {
		super.open('/login')
	}
	
	submit() {
		this.loginButton.click()
	}
	
	login() {
		this.open()
		this.username.setValue(secret.login)
		this.password.setValue(secret.password)
		this.submit()
		browser.waitForVisible('.js-page-content', 10000)
	}
}
module.exports = new LoginPage()
