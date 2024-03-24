# NoSQL Databases :

1. Now we've already talked about the relational databases & systems (RDBMS) which have tables and are related to each other in some way or the other. Prominent relational databases are MySQL, PostgreSQL etc.

2. NoSQL basically means that you can do all the db related operations without using the SQL queries. Hence the full form of NoSQL is *Not only SQL*.

3. NoSQL stores the data in a non relational model. So instead of tables the prominent ways the NoSQL databases store their data is :
    - Graph Based Form (NeoForge)
    - Key Value Pair (Redis)
    - Document Based Form (MongoDB)
    etc.

## MongoDB :

1. **Properties of MongoDB** :
    - *Cross Platform* : Database is compatible with all types of OS platforms. Even if the project is migrated to Linux from Windows the things won't break and work as they are.
    - *Open Source* : Big part of the database is open sourced and hence alot of things can be seen and can be contributed to.
    - *NoSQL* : Hence no intervention of SQL Queries.
    - *Document Based Database* : Just like **MySQL stores data in tables similarly MongoDB stores data in collections**. A **Collection contains multiple documents, just like a table contains multiple records (rows)**. Documents stores data in the form of key-value pairs just like JSON object (There's no JS running at the backend its just the syntax of the DB).

2. **Flexibility of MongoDB**: 
    - MongoDB is quite flexible in comparison of MySQL. In MySQL suppose if a table contains 4 columns (Name, Age, Number & Address) then every new record entered in the table should contain all the 4 columns even if a single column is NULL we have to write some value to it.
    - In this case, MongoDB documents can be changed from each other, there can be a document containing 4 fields { name, age, number, address }, but this doesn't mean other documents would contain the same as some other document may contain fields like { name, birth_date, income }. So we can see that both the documents are totally different and fields may vary for every document.
    - So every document can possess its own documents and fields. Hence the data might vary from document to document.

3. MongoDB possesses a distributed architecture and hence the database is highly scalable and handle a huge amount of queries without getting crashed. So on a overview MongoDB is :
    - High Performance
    - Flexible
    - Scalable
    - Well suited for wide resources

- [**IMP**: Just for information, the SQL RDBMS are generally used in the cases where vertical scaling is possible, while the NoSQL DBMS are used where horizontal scaling is preferred.] 

4. To understand how MongoDB stores the data internally, we've to understand two main concepts first :
    - ***JSON (JavaScript Object Notation)*** :
        * JSON stores data in the form of Javascript objects, they are not actually JS objects just takes inspiration from the JS objects hence the name JSON.
        * MongoDB also stores its data in the form of documents, these documents are nothing but JSON objects. This says that MongoDB heavily relies on JSON.
    
    - ***BSON (Binary JSON)*** :
        * BSON stands for Binary JSON, this is the binary form of normal JSON. 
        * BSON has a upper hand over JSON as it also stores the length of the stored data, the encoding type of the stored data.
        * Basically MongoDB internally stores the data in BSON format, but later it loads it and shows the data in the form of JSON.

5. So MongoDB stores the data in the form of 

## MongoDB Queries :

1. To show all the databases we can either do ```show dbs;``` or ```show databases;```

2. To create or use a database the command is same ```use <database-name>```

3. To create a collection in a database use the command ```db.createCollection("collection-name");```

4. To show the documents present inside a collection (just like showing table contents we used select *) we can use the command ```db.<collection-name>.find();```

5. To insert a document inside a collection we use the command ```db.<collection-name>.insertOne({JSON object key-value pairs})```. The JSON object will have key-value pairs separated by commas and key & values separated by colons.

- [**NOTE** : Every document on creation is assigned with a 'id' field by default too. This id is unique for all documents.]

6. To bulk insert documents in a collection we can use the command ```db.<collection-name>.insertMany([{}, {}])``` here we can pass an array of multiple JSON objects separated by a comma.

7. There is a ```findOne()``` method that gives the first document present in the collection.

8. To find documents with specific constraints we can use the find() method and pass in the object with key-value pairs we want to be present in the document.

9. The ```count()``` (deprecated) or ```countDocuments()``` function is used to retrieve the count of the documents present in a collection.

10. To import already present data we can use the MongoDB Compass. We can just open the database & collection where we want to import the data. Above in the collections tab select import, select the file to be imported and click upload.

11. The ```limit()``` function is use to limit any operation to a certain number of records. It accepts a parameter number which will be the limit of operation. For example ```db.Students.find().limit(3)``` this query will only show 3 documents.

12. The ```find()``` function actually takes 2 parameters, both are objects i.e ```find({}, {})```
    - The first object is the filteration parameter. Basically it puts constraints on what kind of data to show. (Documents with what key-value pairs to be shown)
    - In the second parameter we can mention the name of particular properties / attributes we need from a document. (Which all attributes of the filtered documents to be shown)

13. The ```toArray()``` function retrieves the data asked for in the form of an Array. Basically this function converts the object into an Array.

14. The ```sort()``` function is used to sort the documents in a collection. This takes an object as a parameter, inside the object we pass the attribute on whose basis we want to sort the data. The attribute key has values :
    - **1** : For ascending order 
    - **-1** : For descending order

15. The ```deleteOne()``` function deletes a document from the collection specified. The function accepts a parameter as JSON object, we can pass any single attribute of the document we want to delete and it deletes that particular document. 

- [**IMP** : It is recommended to pass ID of the object here rather than passing any other attribute as in a large db many attributes would have same value.]

16. There's a ```deleteMany()``` function too which deletes all records with the same attribute & value as mentioned in the parameter of the function.

17. We have a ```updateOne()``` function to update values of a single document present in the collection. Just like the find function this function takes two arguments :
    - The first parameter is an object that can contain any unique attribute of the document to be update. This is basically filteration parameter. (can be _id of document)
    - In the second parameter, the key should be always an operator (e.g $set) and the value is an object that contains the attribute and the new updated value assigned to it.

18. The ```updateMany()``` function is quite same as the previous function. Here we just have to update the filteration criteria and hence all the documents that meet the filteration criteria will be updated with the values in second parameter. 

19. The ```distinct()``` function takes in an attribute and returns an array of all possible values that attribute can have checking all the documents.

### Operators in MongoDB :

1. The **$ne** operator is used as for *not-equal to*. For e.g if we want to find all the courses that are not equal to Practical then : ```db.Courses.find({type : {$ne : "Practical"}}, {name : 1, marks : 1, type : 0});```. The opposite of this is **$eq** stands for *equal to*.

2. The **$lt** operator is used as for *less than*. For e.g if we want to find all the courses that have marks less than 150 then : ```db.Courses.find({marks : {$lt : 150}});```

3. Similarly **$gt** : *greater than*, **$gte** : *greater than equal to*, **$lte** : *less than equal to*

4. The **$and** operator works similar to AND operator in any other programming language. It clubs two conditions together. Simlarly we have **$or** as OR operator, **$not** as NOT operator, **$nor** as NOR operator.

5. The **$set** operator is used to set some values using the update() function. Similarly the **$inc** operator is used to increment some values using update function.

- [***IMP NOTE*** : To check the syntax to write the operators you can directly google the operator.]

6. When a field of a document can have different values for different documents we can use the **$in** operator to check for it. This operator expects an array of multiple values. If any document's attribute's value matches the values present in the array of in then it is retrieved. 
- For e.g retrieve all the documents having marks as either 50 or 150 then ```db.Courses.find({marks : {$in : [50, 150]}});```

- There are more such operators would recommend reading the documentation on MongoDB official website, whenever any needed.

## Indexing in DB :

1. Now we can land up in performance issues, due to not writing efficient queries or the structure of the data in not well established and doesn't have a proper structure to it.

2. This will put quite a load on the server since there will be number of queries to be processed and this number will keep on rising up.

3. To resolve these issues there are alot of techniques that the databases provide and one of those tecniques is called as **Indexing**.

4. Indexing says that :
    - Whatever data we're storing in our database, Indexing will store a separate, efficient data structure that can be used to insert, update, read or delete any kind of record user wants to do. 
    - It will rely on that new data structure that is running behind the scenes and using that data structure indexing will try optimizing the query.

5. The data structure being created will be created based on the particular property on which most of the queries are going to happen. 
    - To create an index over a property of the documents we can use the method ```createIndex()```.
    - The function takes an input as the attribute for which we want to create index. For e.g ```createIndex({type : 1})```

- [**NOTE**: Creating a index on the database completely depends on the size of the database and the type of the data we're working on.]

6. We can also create a ```compoundIndex()``` based on multiple attributes from the documents.