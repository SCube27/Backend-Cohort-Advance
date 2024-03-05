const express = require('express'); // This gives a function
const bodyParser = require('body-parser'); // Use to convert incoming json data in JS compatible data

// When we call this express method we get a new express server object
const app = express();

PORT = 3000;

// Registered middleware for every incoming request
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());

// writing middlewares
function m1(req, res, next) {
    console.log("Inside middleware M1");
    console.log("Req.user inside M1", req.user); // undefined

    req.user = {id : 1, mail : "s@s.com"}; // The next middleware will get this update req object
    next();
    console.log("Reverse order m1"); // Next in line for reverse order
}

function m2(req, res, next) {
    console.log("Inside middleware M2");
    console.log("Req.user inside M2", req.user); // updated object {id : 1, mail : "s@s.com"} 
    next();
    console.log("Reverse order m2"); // Calling the functions in reverse order till first middleware
}

const middlewares = [m1, m2]; // For huge number of middlewares we can pass an array of middlewares too

// create the first route for /home using the get request  
app.get('/home', middlewares, (req, res) => {
    console.log("/home route called");
    console.log(req.query); // Shows us the query params passed in URL in form of object

    return res.json({msg : 'ok'});
});

// URL params Static name (products) with its value containing variable (:product_id)
app.get('/products/:product_id/rating/:rate', (req, res) => {
    console.log(req.params);
    const pid = req.params.product_id;

    return res.json({productId: pid, rating : req.params.rate});
});

// Request body
app.post('/data', (req, res) => {
    console.log(req.body);

    return res.json({status : "RECIEVED"});
})

app.listen(PORT, () => {
    console.log(`Listening on the port ${PORT}`);
});