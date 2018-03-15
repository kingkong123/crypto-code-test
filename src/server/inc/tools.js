global.fetch = require('node-fetch')

const cryptonator = require('cryptonator');

const currencies = [
	'btc', 'eth', 'ltc', 'xmr', 'xrp', 'doge', 'dash', 'maid', 'lsk', 'sjcx'
];

const baseRate = {
	ticker: {
		base: '',
		change: 0,
		price: 0,
		target: 'USD',
		volume: 0
	},
	timestamp: 0
};

let rates = {};

const Tools = {
	getCurrencies: function(idx, cb) {
		if(idx < currencies.length){
			console.log(idx);
			this.getCurrency(currencies[idx]+'-usd')
				.then(result => {
					rates[ currencies[idx] ] = Object.assign({}, baseRate, result);

					this.getCurrencies(++idx, cb);
				})
				.catch(err => {
					console.log('err');
					rates[ currencies[idx] ] = Object.assign({}, baseRate);
					this.getCurrencies(++idx, cb);
				});
		}else{
			console.log('got all rates');
			return cb(rates);
		}
	},
	getCurrency: function(currency) {
		return cryptonator.simpleTicker(currency);
	},
};

module.exports = Tools;