# Express JS

1. Express is a light weight, fast and unopinionated JavaScript based framework used for developing sever side frameworks.

2. Express is unopinionated, that means it has no rules and no set parameters to obey while development. We are free to customize and create it the way we want to.

## Getting started with Express

- To create a express we first have to create a node project. Done as following steps :
    1. Create a folder / directory of the project.
    2. Open the directory in command line and create a node project by following command ```npm init```
    3. Configure the project according to your requirements
    4. Install Express in the project by following command ```npm i express```

- Finally a *package.json*, *package-lock.json* and a folder of **node_modules** will be created. The package.json contains all the dependencies for the given project such as packages, moduling pattern, scripts etc.

- **listen()** :
    * The listen function is used by the express server to listen for the incoming requests and send them for processing.

- **use()** :
    * The use function sets the passed callback function in it as a middleware for every incoming request.
    * So basically the use() function has a callback as an argument and this callback acts as a middleware for every request that comes to the backend.

- **get()** :
    * The get function is used to create a get request and create a route for entered request route.
    * Args :
        - *route* : This argument takes a string of the route name for e.g *'/about'*, *'/home'*
        - *callback* : The callback function has two args (req : request, res : response). This function is called when the associated route is accessed and returns a response.
        - The data is response is generally sent in the form of a .json object.

## Middlewares :
1. Express supports and promotes a feature called as Middlewares.

2. Middlewares are same like just another function, which takes in arguments as inputs and returns some outputs.

3. The speciality of middleware is that it has access to the next middleware. So basically middlewares are chained functions that execute one after other in the sequence they are present.

4. [**IMP**] The callbacks associated with the request methods such as get() are also middlewares, besides we can explicitely create more middlewares and add them in such request methods.

5. Middleware functions can perform the following tasks:
    - Execute any code.
    - Make changes to the request and the response objects.
    - End the request-response cycle.
    - Call the next middleware in the stack.

6. Every middleware has 3 arguments, basically access to 3 things :
    - request object
    - response object
    - next : This gives the access to the next middleware in line. So after implementation of every middleware we call the next method which will automatically execute the next middleware method in line.

7. Some prominent examples of middlewares in application would be validating data sent by the user on the application layer for e.g checking if the entered email by the user is valid or not.

8. The validation layer in the Enhanced MVC can be easily implemented using the Middlewares. So we can use the multiple function to carry out different validations and checks on the entered data.

9. After the end callback in the middleware chain is executed, the flow goes in the reverse direction i.e the sequence in which the middlewares were called its exact opposite sequence will be executed again.

10. So if there is some piece of code after the next() call in the middlewares then it will be executed in this reverse order chain of middlewares till the first middleware in line is met. 

### Client to Server Data Transport :

1. There are 3 ways in which client can send data to the server :
    - **URL Params** :
        * The url params are set to transmit data in the URL in form of a static part followed by a variable.
        * The format of the url is like abc.com/products/:productid/shoes/:shoeid...and so on.
        * Sn in above format the product is a static part and the :id part followed by it is a variable.
        * An example can be the following url from the imdb website :
            https://www.imdb.com/list/ls529796274
        * We can see after the list route there is a number which is a variable and it can be followed by multiple routes or static parts and their variables.
        * URL params can be read, when in the request methods we add routes with their associated variable i.e ```app.get('/products/:product_id', () => {});```
        * The variables are marked using the colon ':'. In the callbacks these parameters can be accessed using request object's params attribute i.e ```console.log(req.params)```  

    - **Query Params** :
        * The query params are set to transmit data in the URL in form of key-value pairs.
        * The format of the url is like /routes?key1=value1&key2=value2&key3=value3....and so on.
        * An example can be the following url from the flipkart website :
            https://www.flipkart.com/computers/monitors/pr?sid=6bo,9no&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_164e5eb4
        * We can see that after the question mark there are key-value pairs separated by the '&' symbol.
        * So if I pass localhost:3000/home?name=Sahil&age=21 and if I access the req object with query parameter (```console.log(req.query);```) then I'll get the object as { name: 'Sahil', age: '21' }

    - **Request Body** : 
        * There is some kind of data that can't be propagated through URLs from client to server. This data can be anykind of sensitive data that the user provides on the client side and is sent to the server side.
        * Such data can include personal information of the users, their passwords, financial details.
        * In such can the data is sent using the request body present on the client side. The data can be sent in any kind of format such as JSON, HTML, XML, Text, url-encoded, binary, QL(GraphQL) etc.
        * Such kind of data is usually sent through frontend but since we dont have one, we can use tools like ***Postman*** to send data on specified url and the backend gets it using get request method.
        * Now to access this data we use the body parameter of the request object, but this will show undefined since the data sent is incompatible for JS to read.
        * So we use a pre-installed package named **body-parser** in use() method to set a middleware for every incoming request.
        * So whenever request comes to the backend then this middleware present in use() would run and convert the JSON data in JS compatible format.

[**NOTE IMP** : Check what is URL encoded format on internet and check why it is used and its examples.]