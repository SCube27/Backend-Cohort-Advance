### File I/O in Node
1. File I/O is kind of most expensive operations in a computer.
2. The implementations of I/O can be of 2 types :
    - blocky code :
        * Suppose we are implementing a thread, it does some process and then it goes to take input from the user.
        * Till then the remaining set of code is going to get blocked / or in easy words it has to wait.
        * So once the user gives the input then it will come back and remaining part of thread will be implemented.
        * For this if you want to run the code parallely multiple threads have to be used.

    - non blocky code :
        * This type of implementation is actually based on asynchronous programming in JS, hence this will include interaction with runtime & using diff queues, event loop etc
        * In the runtime there is a thing called **Event Demultiplexer**, now all the heavy operations or I/O operations are termed as events, so when the end application (such as JS) triggers that this is a runtime feature, it registers a new operation inside the event demultiplexer.
        * So what this does is that instead of blocking the code once a set of code ( processes ) is completes it takes it and pushes it inside one of its suitable queues till other part isn't completed.
        * This helps in avoiding the blockage of code.

3. Many external features are available using external runtimes and one of the prominent of those is Node. Node contains a library developed by the core team of Node that provides different features to implement.
4. The special pieces of code / programs that help the Node to interact with the LibUV library are called as **Bindings**.

### Globals in Node :
1. In Node, globals refer to some predefined global variables that are present inside the Node and can be accessed everywhere inside the code using Node.
2. Some of the prominent globals are :
    - *process* : If we want to see the processes running, the env variables associated with the current running process etc then we can use the process global to access those info.
    - *__dirname* : This shows the name of the current directory from which we are trying to execute the code.
    - *require* : This global is use to require the modules associated with node & npm. Same as import in python.
    - *module* : This is used to access the module design pattern of Node.

## Module Pattern in NodeJS :

1. A Module is a mechanism for splitting JS programs into separate manageable chunk called as module, that can be imported wherever needed. For e.g In rough basis the header files in C++ ```#include <bits/stdc++.h>```, the library imports in Python ```import tensorflow as tf``` etc.

2. Now suppose you are writing your own modules that are going to be used in your own project. And if you write the files of different modules supporting diff featuers as well as the main functional code of the project in the same directory then this can become quite messy.

3. So this pattern suggests that club all the files revolving around same functionality in a separate file or chunk. So whenever we want to implement some functionality present in our modules then we can directly import them in our main code and can use it.

4. This Module Pattern is more about code splitting, increasing code redability and making the code more manageable making the development process seamless.

5. Even to prepare packages (kind of similar to the libraries in Python), we need to setup modules.

6. [**VERY IMP**] Now in NodeJS we have two mechanisms throught which we can prepare modules :
    - **CJS (CommonJS modules)** : Quite of a old & traditional mechanism.
        * This is usually used in Express based codebases where for using modules we use *require*.
        * This uses creation of a ```module.exports``` object in the file from which functions are to be exported.
        * In the main file we use the word ```require``` for importing the modules in structured or destructured way. (also using aliases)

    - **ESM (ES6 modules)** : Recently added and new method implementation.
        * This is usually used in React based projects where for using modules we use *import* & *export*.
        * For writing files in this pattern we need to keep the file extension type to ```.mjs``` of the JS files.
        * This uses writing ```export``` keyword before the writing the function to be exported.
        * For using the exported functions in the main file we use te word ```import``` and the file name with .mjs extension.
        * There are two types of imports and exports here : 1. named 2. default
            1. named : These can be used directly by giving the name of function in {} during import
            2. default : For these first the functions under deafult exports should have keywords **export** & **default** before writing the function. And for imports we can define any name and using that name.function_name we access the function.

    [**CJS Module Documentation** : https://nodejs.org/api/modules.html]
    [**ES6 Module Documentation** : https://nodejs.org/api/esm.html]

7. Node supports both of the mechanisms & ES6 is quite of a modern way of handling modules.

### NPM (Node Package Manager) :
1. There can be modules that other people have wrote and have pushed publicly to make available for other people to use it, these are generally termed as packages.

2. There is a thing called **npm** which can be used for using packages published by other people on npm site.
[**NPM** : https://www.npmjs.com/]

3. You can generally install a package using the command ```npm i package_name```

4. When you execute the above command for any package, there is a file and a folder appearing. The file is named as ```package.json``` and the folder is **node_modules**.

5. The *package.json* file is a file that contains the metadata about our node project, such as dependencies (dependent packages), application for which this node project is created for, what scripts are used .etc

6. The *node_modules* folder contains the modules on which the package installed depends. Usually we dont push this folder in public as its heavy and of no use as others can simply type the command and install packages for themselves.

7. Besides these there can be another file too named ```package-lock.json```, this file contains metadata (info) list about whatever dependencies the installed packages also downloaded with them.

8. [**IMP**] Now this happened for the installed packages, but we can create our own configurable *package.json* by using the command ```npm init```. This command creates a new *package.json* file for you in your project folder marking it as a new node project.

9. Once this command is run then we are asked for several prompts to fill and make it configurable for our project requirements as we need.

10. So a ```.json``` file is called as **Javascript Object Notation** File as it looks like a object but this is not a normal Javascript file.