1. ```show databases;``` : Shows the list of all present db

2. ```create database <db-name>;``` : Create a db for the entered name

3. ```use <db-name>;``` : Opens a uses a db for all the upcoming set of commands to be entered

4. ```create table <table-name>(attribute_name1 datatype, attribute_name2 datatype, ...);``` : Creates a table with the attributes entered in the parenthesis

5. ```desc <table-name>``` : Gives the description of the table 

6. ```insert into <table-name> (all attributes-names) values (values for all attributes);``` : Inserts data to the given table. [**NOTE** : The order of attribute name and values should be in same order] [**IMP**] To enter multiple columns use multiple parenthesis for values one after another separated by commas.

7. ```select * from <table-name>;``` : Prints the data of the table entered. The * indicates all the columns of the given table. We can also replace * with a single column name or multiple separated by commas.

8. ``` select * from <table-name> where 'condition'; ``` : Prints the data from the table based on the WHERE condition. E.g SELECT * FROM Movies WHERE Rating > 4; [**IMP** : Here we can use multiple conditions using the AND & OR keywords e.g SELECT * FROM Movies WHERE Rating > 4 OR Rating <= 3;]

9. ```delete from <table-name> where 'condition';``` : Deletes the record abiding the condition

10. ```update <table-name> set attribute_name = <updated-value> where 'condition';``` : Updates the records in the table that abide with the condition.

11. ```drop table <table-name>;``` : Deletes the table from the current database

12. ```show tables;``` : Shows the list of the tables present in the current database

13. ```select * from <table-name> where <attribute-name> like "string%";``` : This does the prefix matching. For e.g if we want to search all the actors from a actors table with the name chris then we use this. So this suggest that the first name should be chris and the remaining can be anything

14. ```select * from <table-name> where <attribute-name> like "%string";``` : Same as the above just does the suffix matching. For e.g to search people with surname shah. This suggests that the first name can be anything but the last name should be shah

15. The third variant can be using %string% i.e % on before and after the string. This matches substring, there should be a string matching the entered one anywhere between the no necessarily before or after anything

16. We can use ```ORDER BY``` keyword to sort the records based on the given constraint attribute. (To arrange the records in ascending order use *ASC* keyword and for descending order use *DESC* keyword)

* [**NOTE** : We can club these multiple conditions like ORDER BY & LIKE together too to get specified results]

17. We can use the ```LIMIT``` keyword to set a limit on the operation being done. The keyword is followed by a number till what limit we want to perform the operation.

18. Since we know that the records in a table also have indexes associated to them (0 based) hence we can access those indexes usign ```OFFSET``` keyword and perform the operation. For e.g if I want first 3 records starting from index 1 then ```select * from <table-name> limit 3 offset 1;```

* [**NOTE** This method is called as pagination and it usually happens in chrome when we search some set of results are shown on the first page and remaining are shown on the coming pages.]

19. We should set a Primary Key during the formation of the table itself. During formation and declaring the attributes write ```PRIMARY KEY``` keyword after the data type of the attribute you want to be a Primary Key.

* [**NOTE** : A Primary Key is a attribute in the table that has non null values and all the values in the Primary Key are unique. So even if the values of two records are same even then their primary key is going to be different.]

20. We can also define keywords during table formation like ```NOT NULL``` to mark the attribute as it cant have null values, ```AUTO_INCREMENT``` it gives the values to the record even if not passed during insertion of record.

21. Like the Primary Key we should set the Foreign Key during the table formation. During the formation of the table we can set foreign key using ```FOREIGN KEY``` keyword by writing ```foreign key (attribute-name) references primary-table-name(attribute-name) ```

* [**NOTE** : We can set a foreign key for the data in a table whose data is dynamic (changing) so we can store such data in separate table and use its Primary Key as Foreign Key in different table.]

22. ```select <attributes-names> from <table1> JOIN <table2> ON <table1>.<foreign-key-attri> = <table2>.<primary-key-attri>``` : Joins the two tables through the primary key and foreign key and retrieves the required columns specified from both the tables.

23. There are 3 prominent types of Joins, a normal Join as in above query, for Right Outer Join just write ```RIGHT OUTER JOIN``` this shows all the common part and the remaining data of the right table, same for Lfet Outer Join ```LEFT OUTER JOIN```.

* [**NOTE** : We can join multiple tables using the JOIN statement and the linkage between the tables through Primary & Foreign Keys.]

24. The ```ALTER``` command is used to change the properties of an already prepared table. This can be use for Adding, Updating, Deleting, Creating anything in a pre existing table.

25. The ```DISTINCT``` command is used to get all the distinct values in a column of a table. We can just use the command ```SELECT DISTINCT <columns-name> from <table-name>;```.

26. There are Aggregate Functions such as ```count()``` (To count the records of table), ```max()``` (To calculate max of a column), ```avg()``` (To calculate average of a column), ```min()``` (To calcuate minimum of a column), ```sum()``` (To sum up all the values of a column). E.g queries 
    - ```select count(DISTINCT column-name) from table-name```
    - ```select max(column-name) from table-name```
    - ```select sum(column-name) from table-name```

27. There is a ```GROUP BY``` keyword that is use to get a specific count of a column compared to other column. For eg We want the number of addresses on a single district then 
    - ```Select district[column], count(*) from address[table] GROUP BY district[column]```

28. For using ```if-else like conditionals``` in the sql we have a ```CASE END``` block where we use the ```WHEN``` condition for checking the condition and ```THEN``` keyword for executing some operation if condition is true. For the last condition like other languages we can use ```ELSE``` keywords.

29. A stored procedure is like a function in whicch we define a set of operations to be carried out and use it whenever we want, wherever we want. The stored procedure can be created using ```Create Procedure <Procedure-Name>```. Then we create a ```BEGIN & END``` block and write all our operations there.

[**NOTE** : It is generally practiced to change the delimiter before using the store procedure and later change it]

30. You can pass parameters to the store procedure as :
    - ```IN``` : The args with this keyword are the paramaters passed to use them in the function. The declaration looks like ```IN <arg-name> <data-type>```
    - ```OUT``` : The args with this keyword are the parameters that will be shown as output. The returned value is stored in them. Declaration looks like ```OUT <arg-name> <data-type>```

31. Triggers are event driven functions (could say functions) that get invoked on a specific task they have been assigned to. For example whenever a user sign ups on the page with their specific username & password store the password in encrypted format in the database. The syntax could be as follows :
```CREATE TRIGGER Logger 
Before Insert on <table-name> // This could be any event for the trigger to be invoked
select "Some comments" // This could be anything usecase specific task to be done
```
[**NOTE** : It is recommended to change the delimiter here too.]
