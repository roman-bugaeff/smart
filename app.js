let express = require('express');
let app = express();

app.use(express.static('public'));

app.set('view engine', 'pug');

app.listen(3000, () => {
    console.log('Server work on port 3000');
});

app.get('/', function(req, res) {
    res.render('main');
});

app.get('/about', (req, res)=>{
    res.render('about');
});