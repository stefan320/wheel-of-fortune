const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.use(express.static('public'));

app.engine('hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'hbs')

// Router
app.get('/', (req,res) => {
    res.render('registerForm');
})

app.listen(8080, () => {
    console.log(`Example app listening on port ${8080}`)
});