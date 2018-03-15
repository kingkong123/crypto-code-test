let express = require('express');
let app = express();
let router = express.Router();

let tools = require('./inc/tools');

app.use(express.static(__dirname +'./../../')); //serves the index.html

let rates = [];
let lastUpdate = 0;

router.get('/rates', (req, res) => {
	let time = Math.round((new Date()).getTime() / 1000);

	if (time - 30 > lastUpdate){
		console.log('update rates');
		
		lastUpdate = time;
		tools.getCurrencies(0, (results) => {
			rates = Object.keys(results).map((k) => results[k]);

			res.json(rates);
		});


		// .then((result) => {
		// 	rates = result;
		// 	res.json(result);
		// }).catch(err => {
		// 	console.log(err);
		// });
	}else{
		console.log('old rates');

		res.json(rates);
	}
});

app.use('/api', router);

app.listen(3000);