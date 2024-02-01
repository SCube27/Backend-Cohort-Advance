# MVC Architecture

1. In software development we can have many diff kind of problems such as Code Organization, Code Structuring, Object Creation and many more. These problems as solved using a concept of patterns in sofware engineering such as **Design Patterns**.

2. To resolve one of such issues of code organization we use a method called ***MVC***. Hence MVC is a **architectural pattern**.

3. We call MVC an architectural pattern because, MVC defines how the backend architecture of out application works. The full-form of MVC is as follows M -> Model, V -> View, C -> Controller.

4. Let's take the example of Restaurant (As Bhaiya proposed) :
    - Suppose there's a restaurant. We go to the restaurant and there's a menu through which we can see all the dishes available in the restaurant.
    - After that we call the waiter and tell them what dishes we want to order to eat. So here the responsibility of the waiter is to take the order from us(customer) and give it to the kitchen.
    - Now inside the kitchen lies the chef and its the chef who knows the logic to cook the food. So here the responsibility of the chef is to take the input from the waiter of what dishes to be made and start preparing the dishes.
    - Now once the dish is prepared its again the responsibility of the waiter to take the dishes from the kitchen and serve them to the customer. So here there's another responsibility of taking the food from kitchen and serving them to the customers upon the waiter. 
    - The moral of the given example is every entity has a single responsibility to take care of:
        * *The Menu* : Shows whatever is available and prepared in the restaurant.
        * *The Waiter* : Take the order of the customer give it to kitchen, take the prepared food from the kitchen and give it to customer.
        * *The Chef* : To take the input from the waiter and run the logic over it to prepare the food as asked in the input.
    - For preparing newbie level projects such examples can be related while writing the backend of the project. But there are multiple questions to answer and gaps tp fill in such architecture. 

5. Hence according the the above example we can say that in MVC it can be related as :
    * **Models** -> *Chefs* -> The models contain the code actual business logic to be processed on certain types of inputs, same done by chefs while preparing the food according to waiter's input.

    * **Views** -> *Menu* -> The menu shows the user that what kind of services are available on the application. Its on the frontend part and hence deals with the users same as menu is shown to customers.

    * **Controllers** -> *Waiters* -> The controllers takes the input given by the view layer based on the user input and passes it down to the model to process it and whatever response the model gives is returned to the user again by controller, same as waiters.

6. Here the views reside on the client layer i.e what the user can see is the client side and hence views usually contain the frontend part.

7. So when any process occurs on the client part it send a request (all the network processes occur in between like going to DNS getting IP directing to site making requests) and this request is taken by the backend of the application.

8. The backend is where the server is present, a server is a machine or a piece of code running on a machine that can give us response on a given request.

9. Now on the server (backend) we'll have two layers :
    - Controller Layer :
        * The controller layer is the first layer that encounters the request when the request enters the backend. The controller here is a simple piece of code.
        * The sole purpose of the controller is to take the request and pass it to the model layer.

    - Model Layer :
        * The model layer is where the actual business logic of the application resides. The model reacts to the request sent by the client based on its type.
        * The model layer takes the request as the input processes it and returns a output to the client back based on the request sent by the client.
(If the controller is absent then the client might directly come in contact with the model(the biz logic) which is quite dangerous and it can be hampered upon by the client)

## Why MVC Architecture doesnt work?

1. Now creating such a code structure for a application which doesnt have much of processes (some kind of a mini project) running in the backend would work quite well.

2. But incase of large sytems such as bhaiya suggested **GPay**, this wont work. As there are many more things to handle just beside these mainframe processes. So *scaling* in a MVC Architecture is one of the main issues.

3. If we wrote all our business logic and other process handling in one folder and suppose in future we want to change something, then we are working with the code that is crucial for the application and if something goes wrong the whole application can crash.

4. So MVC makes the backend part of the applications quite bloated & tightly bound with each other. Such a bloated backend cant even be tested properly, debugging becomes impossible in such code.

## The Remedy :

1. The architectural pattern used to solve such problems is a kind of **Enhanced MVC**. There are more types of such architectural patterns used such as Data Driven Design(DDD), Hexagonal Pattern which will see in future and has their specific use cases. This Enhanced MVC is the best of all worlds!

2. So now let's see the ***Components of this Enhanced MVC***:
    - **Routing Layer** :
        * The routing layer decides where the incoming requests are going to be handled.
        * This layer moves or forwards the incoming requests to their specific loactions based on their types and state.
        * Basically this layer manages all the pages of the web app such as home page, about page etc.
        * So in short and easy words we can say that the routing layer decides who all can handle the incoming requests. For e.g "/user", "/home", "/home/careers" etc

    - **Validation Layer** :
        * The validation layer checks whether the incoming request is valid or not.
        * Suppose there's a request incoming to the backend, then we have to check if the request is valid or not, or are we going to let them directly interact with the backend of the application.
        * So this layer validates whether the incoming request is genuine or not.

    - **Controller Layer** :
        * The request now is collected by the routing and validation layer already so this function of the controller is already handled.
        * The controller layer has now the responsibility of taking the requests from these layers and send the request to the business logic part of the backend.
        * The another function of controller is to prepare the response provided by the logic, and send it to its proper destination for the user to see & recieve it.

    - **Services Layer** :
        * The primary function of the services is to handle our business logic of the application in the backend.
        * So the service layer takes the requests brought up by the previous three layers and then processes the request, identifies the requirements and in return sends the response fulfilling the requirement accordingly.
        * In this architecture the services will just handle the core business logic and nothing else. For e.g in conventional MVC the Models layer handled the business logic, interaction with the database, API communication etc.
        * In this architecture all these things are segregated and hence the services will only handle the business logic.

    - **DAO / Repository Layer** :
        * The DAO or Repository layer has the main function to interact with the database integrated with the backend of application.
        * Anything or any process that requires DB interation goes to the DAO layer and then the process is carried out accordingly.
        * The DB interaction refers, from DB if the process wants to get something, create something, update someting, delete something all of that will happen through the repository or DAO layer.
        * So if for some huge company someday if the database has to be migrated, then the changes only happen to the DAO / Repository layer and we don't even need to change or touch the business logic.

    - **Model / Entities Layer** :
        * The model layer contains the logic to how the data is represented inside the databse of the application.
        * This layer represents the logical view of schema of the database being used. 
        * Suppose the database used stores the record of the data in tabular format and the language the backend is written in is Javascript / Java. Then these languages doesnt understand tables, they just understand classes and objects.
        * So those classes and representation of data is present in the entity layer, so even if the data comes in other format it would be converted by theses classes and returned in valid format.

    - **Clients / External Layer** :
        * These layers are use to integrate preexisting services that need not to be developed and can be easily integrated using the API of the service to be integrated.
        * Supppose there is a need of payments gateway in a sysetem for making in app purchases, for this we don't need to write separate logic of payments gateway rather we can use the pre-existing services like RazorPay, Stripe etc that manage our payments.
        * These services usually have their APIs present we just have to integrate these APIs in the Clients / External Layer.

3. So these are some main prominent layers present in the Enhanced MVC architecture that can be seen in any production level backend system. There are some more layers here & there depending on the structure, functioning and objectives of the system. Those layers are :
    - *DTO* (Data Transfer Object)
    - *Adapters* (To write the adapter design pattern)
    - *Configs* (To contain configurations)
    - *Constants* (To store constant values)
    - *Errors* (To store the error classes, to handle errors)
    - *Utils* (To store utilities i.e any reusable helper functions / methods)
    - *Tests* (To write the unit tests for testing the components of backend)

[**NOTE** : The segregation of the layers is quite necessary for avoiding the tight coupling of the code. Tight coupling refers to integrating the processes with so much dependency that some minor change can make your whole system fail.
Tight coupling involves writing all the code in usually the same file. So for some reason if a system wants to migrate from SQL to MongoDB and if the backend is tightly coupled then it would give hard time to migrate and this make tests fail, system to breakdown etc.] 
