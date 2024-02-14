# LibUV Library in NodeJS

**Some Questions** :
- Is NodeJs single threaded?
- Is the Event Loop part of Node or someone else?

## What is LibUV?
- The LibUV is a prebuilt library present in the NodeJs environment and is used of several sync and async processes using Javascript.
- Some key points & characteristics of LibUV :
    1. It is written in C langusge
    2. It provides cross platform support. i.e can be used for development and usages in windows, mac and linux
    3. This library is the main driving force to make NodeJs support asynchronous programming
    4. One of the main features of LibUV is the support of event loop, yes that is its the LibUV that provides us with the event loop that manages all our tasks in the JS code.
    5. LibUV also supports functions of transport layer (of sending and recieving data packets), by allowing to prepare and create TCP connections / TCP sockets.
    6. Similarly along with TCP, LibUV also allows preparation of UDP connections.
    7. File System Management processes like Input & Output of files i.e File I/O is also supported by LibUV. In Node they have a **fs** package or module that is used for File I/O.
    8. LibUV also supports many other things like Timers (using setTimeout, setInterval) & child processes. 
    [**NOTE** : Refer the LibUV repo and read the code & readme throughly to understand the characteristics of LibUV
    Repo Link : https://github.com/libuv/libuv]

- LibUV enables the access to the Operating Systems for the Javascript code. In the below architecture the components such as **epoll(Linux)**, **k-queue(MacOS)** & **IOCP(Windows)** are the event handlers in LibUV that help in accessing the OS differentiated by the type of OS being used.

- **LibUV Architecture** :
![LibUV Architecture](https://docs.libuv.org/en/v1.x/_images/architecture.png)

### Thread Pooling in NodeJs (LibUV) :
- Now some people say that "NodeJs is single threaded in nature" this is a half truth or we can say a myth in itself.
- NodeJs is extremely powerful and can harness every single capability of Operating Systems(OS) depending on case to case.
- The another prominent feature that NodeJs provides is Thread Pooling which is one of the highlights of it. 
- So **LibUV** enables not all but some relevant operations in NodeJS to utilize and perform the power of multi threading using thread pooling. 
- The default number of threads allocated for using thread pooling is 4, but this can be configured as per the user requirement. 
- *NOTE* : The basic vanilla Javascript is single threaded in nature i.e all the processes in a .js file are done on a single thread, thus justifies the blocking nature of JS too. Hence JS harnesses the multi threading based on the runtime its being running in such as Node, Browser etc
- In the above architecture of LibUV the *Thread Pool* allows the Javascript to access Operating System. So this Thread Pool allows the JS code for managing, accessing and configuring threads.
- By default LibUV gives access to 4 threads from this Thread Pool but we can configure this number as per the operational requirement and process handling. For configuration of the threads there's a *Environment Variable* named ```UV_THREADPOOL_SIZE``` which allows us to access the number of threads and configure their number.
- Some Keypoints of Thread Pool :
    * Not every operation of LibUV us going to use multithreading, few of hte operations that need some kind of OS interaction use multithreading for performing multiple processes parallely.
    * For an instance suppose we have to create TCP sockets for cliet server interaction, in such use cases there is no OS interaction done, rather it is totally based on networking and hence multi threads are not accessed in this case. (Same goes for File I/O)
- Following is a medium article differentiating the tasks on which LibUV supports multithreading using thread pool and how much time does it take for a number of processes to complete
(https://medium.com/softup-technologies/node-js-internals-not-everything-happens-on-the-thread-pool-a14d0a286efb)

### Components of LibUV :
- LibUV has mainly three components, namely :
    * Event Loop (Discussed in next lec)
    * Handles
    * Requests 

- Handles :
    * These are long lived resources e.g *TCP socket*, *Timers*
    * If you prepare a server that listens for TCP connections, then its a long lived resource i.e it stays in the memory for a longer period of time.
    * Since a server can constantly get TCP connection requests, it has to be up and running for a longer period of time which serves the purpose of an actual server.
    * So such long lived resources / servers are called as handles.
    * Handles are the main objects that keep NodeJs alive. So even though the whole code gets executed still it doesnt stop due to handles present in it.

- Requests :
    * These are short lived resources e.g *File I/O*
    * If we create an object in the file to read or write some other files, then the object will be alive till the file is read or written, once the task is complete the file and processes end.
    * So such processes where the operations have a definite amount of time bound with them to complete the operation come under the requests.
    * So such short lived / time bound operations are called as requests.

### Modules in JS :
1. Now whatever NodeJs code that we write in Javascript is interacting with the JS part of the Node Architecture.
2. This Node Architecture contains something called as modules that are accessed by the file to perform various other operations. A module is a piece of reusable code used for performing a particular task.
3. There are a) Inbuilt Modules b) User Created Modules (That we can create)
4. Some of the prominent modules present in Node are the **fs** module use for File I/O using Node, similarly for setting up TCP connections / TCP sockets we have **net** module.  

### Summary of Link on 39 & Thread Pool in Node :
1. The main gist of the blog post was that the APIs provide two types of function for same purpose, they are either synchronous or asynchronous. 
2. For the synchronous function the graph can be seen that the first process starts and get complete later after that the second process starts to work and gets completed. So basically here code blocking can be seen happening.
3. For the acynchronous function the processes start concurrently at the *0ms* mark and gets completed according to their time, this shows that multithreading happend in JS also the processes consume less time and get the work done.
4. Above experiments were done for 2 processes each, so in the async case two threads were utilized, the same experimentation is done on 4 & 6 processes(same no of threads to be used) separately and this works quite properly, **this shows that the number of threads can be configured as per the requirement of the user**
6. For configuring the number of threads we need to setup and update an environment variable named `UV_THREADPOOL_SIZE` this helps to configure the number of threads to be utilized to complete all the tasks.
7. The experiment of 6 processes was done using both 4 threads and 6 threads,
    - Using 4 threads the first four process worked fine for the remaining two had to wait for others to complete or for context switching between processes. Hence last two processes took a bit more time.
    - Using 6 threads all the processes we running separately on their different threads and hence got completed on their usual time, rather than being waiting for one another.

**Some terms to Study for Self**:
1. Instruction 
2. Iteration
3. Experimental Analysis
4. Asymptotic Analysis
5. Context Switching
6. CPU Core
7. Process