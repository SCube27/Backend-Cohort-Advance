# Functional Dependency & Normalization
[Please refer the pdf for the basic topics of DBMS]

## Functional Dependency (FD) :

1. **Database Schema** :
    - Here the schema refers to the blueprint of the database.
    - So a database schema is the design or the blueprint of the actual database that we're going to make.
    - How we will store data, structures of the tables, tables to be formed etc all of these is defined in it.
    - In a RDBMS based database schema we also represent the relations between the tables and how the data from the different tables is related withe each other.

2. **Functional Dependency** :
    - In rdbms we refer columns as attributes and rows as tuples.
    - Functional dependency defines the relationship between two attributes.
    - The general notation of a functional dependency looks like this **X -> Y**. 
    - This notation means that *Y* is dependent on *X*. So ```Y is functionally dependent on X```. Therefore *X is a determinant* and *Y is a dependent*.
    - Y depends on X means, for every valid value of X we can uniquely identify Y.
    ![Normalization](../Imgs/Normalization.png)

    - In the above employee table the Name & Salary of the employee is depenedent on their id. Since the id of each employee would be unique to themselves.
    - Similarly the salary wont be dependent on name of a employee as there can exist employees with the same name. So determinants should always contain attributes with unique values.

3. **Axioms** :
    - These are some basic set of rules that exist for the relational databases and they follow many things around relational databases.
    Basically these rules create problems or obstacles that need to be avoided.
    - Some prominent axioms are :
    * *Reflexivity* : 
        - The rule of reflexivity states that if an attribute is a subset of another attribute then, the former is functionally dependent on latter.
        - Suppose a table contains Address of User, State of User, House_No of user then the State & House_No attributes are subset of Address and hence **State & House_No are functionally dependent on Address**.

    * *Augmentation (Partial Dapendency)* :
        - Suppose (Y is functionally dependent on X) X -> Y then XZ -> YZ, for a given Z. This is called as Partial Dependency.
        - Suppose there is a table of employees with e_id, e_name, project_id, e_address then since the id is unique for each value, then the name is functionally dependent on id (e_name -> e_id).
        - [**IMP**] Similarly we can derive e_name using e_id and project_id (e_id, project_id -> e_name), so here partial dependency occurs since *e_name is fully dependent on e_id* but *project_id doesnt have such influence on e_name*. This is called partial dependency.
        - In a functional dependency relation the RHS should be completely dependent on LHS and not just a part of it.

    * *Transitivity* :
        - This simply means if (Y is dependent on X) X -> Y and (Z is dependent on Y) Y -> Z then by this relation (Z is dependent on X) Z -> X.
        - This is problematic too, if we want to change Z since we've to go to every row where Y is present only then we can change Z as Y -> Z this can be time consuming.

4. **Database Keys** :
    - Keys are a set of attributes that help us to uniquely identify a record in different situations. Some prominent types of keys are *super*, *composite*, *candidate*, *primary*, *foreign*, *alternate*.
    * *Super Key* :
        - A set of attributes within a table that can uniquely identify a record is called a Super Key.
        - For e.g A table with ID, NAME, PHONE. Now using ID we can uniquely identify a record, using ID & NAME too we can uniquely identify a record, using PHONE we can uniquely identify record (since PHONE is unique for all), same goes using PHONE & NAME.
        - So all this set together is called a Super Key.

    * *Candidate Key* : 
        - The minimum set of attributes within a table that can uniquely identify a record is called Candidate Key.
        - From the above mentioned table in super keys, just ID can uniquely identify a record, same goes for just using PHONE.
        - So ID & PHONE are called Candidate Keys since these are single / minimum set of attributes required to identify a record.

    * *Composite Keys* :
        - A key that consists of 2 or more attributes within a table that uniquely identify a record are called as Composite Keys.
        - From the example in the super key, the attributes ID & NAME together uniquely identify a record, same goes for PHONE & NAME so these two sets of attributes are two different Composite Keys.
        - Since a composite key contains two or more attribute in it.
        - [*IMP*] The attributes that form the composite key should not be a key independently.
        - A composite key can be a candidate key but not vise versa since a candidate key can have 1 or more while composite should have atleast 2.

    * *Primary Key* :
        - Now we know there can be more than one candidate key. We can choose any one non null candidate key to become primary.
        - So primary key is a candidate key but with constraint that its can't have null values. 
        - For example in a table two of the keys are ID & PHONE both have higher priority, but since PHONE can be null in some cases thats why ID will be a primary key since ID can't be null.

    * *Alternate Key* :
        - All the candidate key apart from the primary key are Alternate Keys.
        
    * *Foreign Key* :
        - The attribute that is a Primary key in some other table is called a Foreign Key.
        - So for example an attribute in a particular Table is a Primary Key and the same attribute is present in some other table if the same db then the attribute in the other table will be a Foreign Key.

### Functional Dependency Closure (FD Closure) :

1. The FD Closure or F* is a concept that contains all the rules implied by a functional dependency.

2. Suppose the actual FDs are :
    - F : {A->B, C->D, B->C} // Oringinal FDs
    - F* : {A->A, A->B, B->C, A->C, C->D, A->D, B->D.....} // So FD closure will be as 

3. Now using FD closure (F*) we can also form Attribute closure
    - Attribute Closure defines all the attributes that can be determined using an attribute.
    - So the Attribute closures formed from above given F* are:
        * A* -> A B C D
        * B* -> C D
        * C* -> D
        * D* -> {}

## Normalization :

1. Normalization helps us to make a good database that inturn leads to good development, faster response & app usage, better performance, cleaner db, and better management of data.

2. Normalization is a process of determining how much redundancy exist in a table and it gives us techniques to reduce that redundancy.

3. There are multiple Normal Forms that determine what level of redundancy we have in our data and it gives us their particular techiques to reduce the redundancy in the data. The prominent types of Normal Forms (NF) are :
    - 1NF
    - 2NF
    - 3NF
    - BCNF
Every normal form is dependent on each other for their working and techniques they provide for redundancy reduction.

4. ***1NF*** :
    - The First Normal Form (1NF) states that **every attribute must contain only atomic (indivisible) values**.
    ![1NF](../Imgs/1NF.png)

    - The normalized form is better in comparison of time complexity so the working would be a bit faster, another thing is that the data looks clean & organized.

5. ***2NF*** :
    - The Second Normal Form (2NF) states that at any point of time the **table should not have partial dependencies and the table should be already 1NF**.
    ![2NF](../Imgs/2NF.png)

    - So now we can assign primary keys to the s_id and c_id in their respective tables and connect them to the 3rd table. In 3rd table s_id & c_id is a foreign key so they are connected and hence whenever changes are done in the original table they will be reflected in the 3rd table.

    - This reduced the partial dependency too from the db tables and also the redundancy from the table is completely erdicated.

6. ***3NF*** :
    - The Third Normal Forn (3NF) states that the tables should be in 2NF and should not have transitive dependency.
    ![3NF](../Imgs/3NF.png)

    - [**IMP**] Now we can resolve the transitive dependency by segregating the tables based on the employee details table, zip-state mapping table, state-s_id mapping table and join these tables so the transitive dependencies being formed are broken down.

### Boyce Codd Normal Form (BCNF) :

1. Now we're suppose given a table having 3 attributes namely E_Id, Org_Name & Team_Lead. 
2. The table is normalized to 1NF, 2NF & 3NF
3. Now we can make a Candidate Key using E_Id, Org_Name to get the Team_Lead (E_Id, Org_Name -> Team_Lead)
4. But now the Org_Name is functionally dependent on Team_Lead as a org can have a single Team_Lead so we can get the Org_Name from Team_Lead too (Team_Lead -> Org_Name)
5. So we can make a Candidate Key out of either (E_Id, Org_Name) / (E_Id, Team_Lead). This is a problem.
6. Now we have a concept of Prime & Non Prime attributes. All the attributes that are part of a Candidate Key are **Prime Attributes** while others are **Non Prime Attributes**
7. This problem brings us to new solution **Boyce Codd Normal Form (BCNF)** which states that :
    - The table should be already in #NF
    - For a dependency A -> B, A should be a *Super Key*. Hence A cannot be a non prime attribute
8. By Super Key in the above problem we cant use the (E_Id, Org_Name) as a Candidate Key since Org_Name is dependent on Team_Lead, Org_Name is non prime.
9. So we can distribute the table in a 3 tables, Employee Table(E_Id, Team_Lead), Team_Lead Table(TE_Id, Org_Id), Org Table(Org_Id, Org_Name).

## Associations :

1. For a 1:1 relationship among 2 tables, we can directly connect them through Primary & Foreign Key in either of them.

2. For a 1:Many relationship among 2 tables, we can connect them with Primary & Foreign Key by keeping Primary key in Table with 1 and Foreign key in Table with Many.

3. For a Many:Many relationship among 2 tables, we can directly form a Join table / Through table of Ids of both the tables together.

## Database Transactions :

1. In real life situationsm we might need to execute a series of queries in order to accomplish a task. We might do a club of CRUD operations in these series of queries.

2. These series of operations can execute a single unit of work. So these series of operations carrying out a single task are together called as a DB Transactions.

3. Now we consider the whole series of the queries together as a transaction because if something wrong happens, then we either consider whole transaction or we don't consider any transaction. Since if something wrong happened then the db will go in an **inconsistent state** since the transaction is not completed and **only partial data is changed** in the db.

4. This will crash the whole database since if multiple transactions happened at the same time it will create a huge amount of data inconsistency leading to no proper tracking of the data hence leading to db crashing.

5. To tackle this, if the creators of db want they can add transactional capabilities to their database to become resilient to such inconsistencies create in the database. There are 4 such properties for transactions namely :
    - **A** -> ***Atomicity***
    - **C** -> ***Consistency***
    - **I** -> ***Isolation***
    - **D** -> ***Durability***

6. ***Atomicity*** : 
    * It says that "A transaction is a bundle of statements that intends to achieve one final state. When we are attempting a transaction, we either want to complete all of the statements or none of them. We never want an intermediate state. This is called Atomicity".
    * So if a transaction is carried out and some of the changes happened, and db crashed then the changes happened should also revert back and go in its original state that was before transaction.

7. Hence there are 3 states of transactions :
    - **Begin** : This state is when a transaction is started.
    - **Commit** : This state is when all changes are applied & transaction is completed.
    - **Rollback** : This state is when something happened in between transaction and whatever changes were already done are reverted.
    - So a transaction can go from a `Begin` state to either `Commit` state or `Rollback` state and nowhere in-between.

8. ***Consistency*** : 
    * This means that the data stored in a database is always valid and in a consistent state. That is whenever a data is stored in the database the inserted values are of valid format with the respect to the table.
    * So whenever a set of data is being inserted in a table all the datatypes of columns should be checked upon and according the data should be inserted, all the checks to be carried out before insertion should be carried out and finally the data should be stored. 

9. ***Isolation*** :
    * Isolation is the ability of multiple transactions in a database to execute simultaneously without interfering with one another.
    * So this ability keeps the working of the transactions isolated or separated from each other. Hence due to this the changes made by one transaction would not affect the working of other transaction.

10. ***Durability*** :
    * Durability says that "If something changes in the database and any unforeseen circumstances happened to our database then our changes should persist.
    * For an example if we made some changes to our database and then after some time power outage occurs then all of our data would be lost. This shouldn't happen is what durability suggests.

## Transacton Lifecycle :

The lifecycle of a transaction and the different stages in it can be shown by the following image. 
![Transaction Lifecycle](../../Imgs/Transaction%20Lifecycle.png)

### Potential Conflicts in Transactions :

1. **Write-Read Conflict**:
	- This occurs when one transaction writes to a data item while another transaction is reading from the same data item.
	- In other words, a write operation is conflicting with a read operation.
	- Write-Read conflicts can lead to inconsistencies if the read operation retrieves outdated data that hasn't been updated by the write operation yet.
    - Representation :
        Transaction 1:    W------->
        Transaction 2:          R-------->

2. **Read-Write Conflict**:
	- This occurs when one transaction reads from a data item while another transaction is writing to the same data item.
	- In other words, a read operation is conflicting with a write operation.
	- Read-Write conflicts can lead to inconsistencies if the read operation retrieves partially updated data that hasn't been fully written by the write operation yet.
    - Representation :
        Transaction 1:          R-------->
        Transaction 2:    W------->

3. **Write-Write Conflict**:
	- This occurs when two transactions attempt to write to the same data item simultaneously.
	- In other words, two write operations are conflicting with each other.
	- Write-Write conflicts can lead to inconsistencies if both transactions attempt to modify the same data item in conflicting ways.
    - Representation :
        Transaction 1:    W------->
        Transaction 2:    W------->

### How Databases Ensure Atomicity?

1. Databases ensure atomicity in them by to main methods :
    - **Logging** : 
        * DBMS logs all the actions that it is doing so later it can undo them if needed.
        * If abort state occurs then with the help of logging changes can bee rolled back.
        * These logs are stored in memory or disk.

    - **Shadow Paging** :
        * DBMS makes copies of the actions that are done in a transaction. These copies are initially considered as temporary copies.
        * If transaction succeeds then it starts pointing to the new temporary copy made at the current state after transaction completed.