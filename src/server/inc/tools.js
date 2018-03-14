global.fetch = require('node-fetch')

const cryptonator = require('cryptonator')

const Tools = {
	getCurrencies: function() {
		return Promise.all([
			this.getCurrency('btc-usd'),
			this.getCurrency('eth-usd')
		]);
	},
	getCurrency: function(currency) {
		return cryptonator.simpleTicker(currency);
	},
};

module.exports = Tools;