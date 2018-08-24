const express 	 = require('express');
const app		 = express();
const bodyParser = require('body-parser')
const methodOverride = require('method-override');
require('./db/db')

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));
const port = 3000;

const dogController = require('./controllers/dogController.js');
app.use('/dogs', dogController);


app.get('/', (req, res)=> {
	res.render('index.ejs');
})


app.listen(port, () => {
	console.log('I am listening on port' + port);
});