const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

// create application/x-www-form-urlencoded parser
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const { isEmpty, isValidEmail } = require('./js/utilities.js')

app.use(express.static('public'));

app.engine('hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'hbs')

// Router
app.get('/', (req,res) => {
    res.render('registerForm');
});

app.post('/register',urlencodedParser, (req,res) => {
    const { name, surname, email } = req.body;
    const errors = {};

    if (isEmpty(name)) errors.name = "Invalid name";
    if (isEmpty(surname)) errors.surname = "Invalid surname";
    if (!isValidEmail(email)) errors.email = "Invalid email";

    if ( Object.keys(errors).length ) {
        return res.status(422).render('registerForm',
         { errors,
           validInputs: { name, surname, email },
           formIsTouched: true
        });
    }

    res.status(200).render('wheelOfFortune', errors);
})

app.listen(8080, () => {
    console.log(`Example app listening on port ${8080}`)
});