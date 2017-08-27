class Page {
	open(path) {
		browser.url(path)
	}
	
	getBaseUrl() {
		const url = browser.getUrl()
		let baseUrl = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)
		return baseUrl[0]
	}
}
module.exports = Page
