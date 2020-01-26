const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

// Static cntent

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Set handlebars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
    defaultLayout: 'main' }));
    app.set('view engine', 'handlebars');

// import routes and give server access
const routes = require('./controllers/burgers_controller');

app.use(routes);

// start server to start listening to requests
app.listen(PORT, function() {
    console.log('Server listening on: http://localhost:' + PORT);
});

