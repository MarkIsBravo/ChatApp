# ChatApp
A simple app built using JS front-end and a MongoDB back-end. JS 

Users can input text and chat with each other anonymously.

# MongoDB Tutorial
![MongoDB](https://webassets.mongodb.com/_com_assets/cms/MongoDB-Logo-5c3a7405a85675366beb3a5ec4c032348c390b3f142f5e6dddf1d78e2df5cb5c.png)

### Getting Started: What is MongoDB?
MongoDB is a document-oriented database. A fast and easily scalable NoSQL database that stores documents and data/objects in JSON-like syntax, it is a scalable, agile, and cloud-ready tool. MongoDB is popular in corporate environments - it was also designed to save organizations money and is maintained by a private corporation.

MongoDB comes from a combination of the words "HUMONGOUS" and "DATA".

NoSQL databases are different from relational databases such as MySQL and PostGRES. Relational databases must be designed top-down - more often than not, schema, field types data types, and even the amount of characters limited in the database must be designated first.

What sets MongoDB apart is it's document-data paradigm that doesn'r really require pre-defined schema. This allows for the creation of databases of varying requirements, relatively fast querying and indexing, and allowing the use of various data structures on the fly. As a result, MongoDB allows development teams to create relatively scalable back-end operations and web applications. 

MongoDB lets you develop faster and scale bigger. Modern web applications require more flexible data structures with schemas that can evolve seamlessly and quickly.

One of the reasons why MongoDB is so popular is that it is horizontally scalable. This means that Mongo can have virtually unlimited-in-size scalability that is perfect for handling large data types.

# Terminology

### Databases
MongoDB has siloed databases, meaning their collections can't share information across different databases. These databases are not structured in "Tables" and "Rows" - they contain collections and databases instead. 

### Collections
Collections contain a series or documents that can be made up of almost any data type.

### Documents
Documents are data instances that are arranged in BSON, which is JSON-like data. These documents can contain almost any kind of data as long as they are in an object that works in key-value-pair.

### BSON
BSON is a JSON-like syntax that MongoDB uses to organize it's documents. It functions very similarly to JSON, as we can see here:

```bash
{
  key: ,
  key2: "",
  key3: ["Death", "Star"]
  key4: 
  [{ 
  ["Darth Vader"], 
  ["Tie Advanced x1"],
  [
    {"Stormtrooper"},
    {"Stormtrooper"},
    {"Stormtrooper"},
    {"Stormtrooper"}
    {"Stormtrooper"}
  ]},
    {
    ["Emperor Palpatine"],
    ["Eclipse Shuttle"],
    [ 
    {"Imperial Guard"},
    {"Imperial Guard"}
    ]}
  ]
}
```

# Installation (OSX):
### There are several ways to install MongoDB on your machine.

![install](https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/install.png)

##### Homebrew:
1) Open your Terminal.
2) Run the following:
```javascript
brew update
brew install mongodb
```

##### Manual Install:
1) On MongoDB.com and navigate to Downloads. Select the Community Server tab and hit Download. This will be a zipped file.

2) Unpack the zipped file folder and place into your Applications folder for relatively easy access.

3) Rename the folder into MongoDB and create the following directory inside:
```javascript
mkdir -p /data/db
```
Then, run the following line. This is to ensure proper permissions.
```
sudo chown -R 'id -un` /data/db
```

MongoDB will store data inside /data/db by default. 

4) Restart your terminal and open a two new windows (or tabs). Then, run:
```javascript
mongod ### Starts the server. 
```

```javascript
mongo ### Starts the mongo shell ( indicated with the > symbol )
```

###### Check here for more detailed instructions on JavaScript-based commands on how to interact with the MongoDB Shell.

# Using the Mongo Shell
The Mongo shell is a Javascript interpreter that allows for querying through the database/collections/documents. In the next few lines, we will take you through the procedure of creating your first MongoDB Database. One thing to know, however, is that you can't actually create a database with a query in the Mongo shell -- MongoDB does this on the fly.

### Make a Collection - and some Queries
Follow these steps in order to create your first MongoDB collection. 
Afterwards, we will parse through it with some mongo queries.

1) Run mongod and mongo in two separate terminal instances.
```bash
mongod <-terminal a ### terminal b-> mongo
```

2) Type the following command to initialize, or "switch" into a new database. Note: this step actually creates the database; in order for it to save you must enter some data.
```bash
use GeneralAssembly
```

3) Before we start inserting data, let's add a user. 
```bash
db.createUser
({
  user: "GA-God",
  pwd: "12345",
  roles: ["dbAdmin"]
})
```

4) Now, we will make a collection. Collections will store more data in the form of documents.
```bash
db.createCollection("subordinates");
```

Additionally, check out all current collections in our db GeneralAssembly by running:
```bash 
show collections
```

5) We will now insert a person into our subordinates collection:
```bash
db.subordinates.insert({f_name:"John", l_name:"Doe"})
```
Congratulations - you have created a person/document.

But more importantly, did you notice this?
--> image
We have now created an instance of a person as a document with f_name and l_name, but it was assigned an id by Mongo. Unlike in a relational database, where you have to have to create an id, set a primary key, et cetera - these are automatically generated.

6) Let's add some multiple folks into our subordinates collection - at the same time:
```bash
db.subordinates.insert([{f_name:"John", l_name:"Foe"}, {f_name:"John", l_name:"Goe"}, {f_name:"John", l_name:"Hoe"}])
```

7) Hmm. The last John's name is kind of silly. Let's change it:
```bash
db.subordinates.update({l_name:"Hoe"},{l_name:"Joe"})
db.subordinates.update({l_name:"Hoe"},{f_name: "John", l_name:"Joe"})
```
--> image
Wait, we just removed his first name. That's awkward.

Let's drop him from existence:
```bash
db.subordinates.remove({"l_name":"Joe"});
``` 
---> image

8) Let's take a look at our subordinates collection now. This is also an excellent time to chain MongoDB functions. See if you can spot the pattern below (note: pretty() lays the information in a more readable manner).
Run:
```bash
db.subordinates.find().pretty();
```
---> image

9) Great work! Now, to to wrap this up, let's finish with a little Javascript query. Since mongo runs javascript, we can use this to print information into the console. We will iterate through subordinates using forEach.
```javascript
db.subordinates.find().forEach(function(x){print("Archangel "+x.l_name)});
```
---> image

10) Great work playing God. However, since you accidentally created two fellows with the same name, you should drop the db from existence -- if you want to.
```bash
db.dropDatabase();
```



Want to figure out how to change the name? Read up here.

#### Some Common Differences between MongoDB and SQL/PostGRES
MongoDB doesn't necessarily allow for Join tables. 
Every document in the database can have different fields.

<hr>

#Wrapping Up
MongoDB can be a lot of fun and offers a different approach to thinking about how to design your databases. As with any new technologies, there is a learning curve to be wary of -- but if you can build familiarity with new things you can easily add them to your tool belt.

### Thanks for reading!
Sincerely,
Tom, Mark, Dennis

### Some Companies Using MongoDB:
- ### Google
- ### Facebook
- ### Cisco
- ### UPS
- ### Ebay
- ### Intuit
- ### The New York Times
- ### Verizon
- ### NBC

![MongoDB](https://www.mongodb.com/assets/images/resource-center/icons/university.svg)
