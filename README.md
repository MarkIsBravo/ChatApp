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

{
    "key": "some data"
}

# Installation for OSX:
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
mongo ### Starts the mongo shell ( > )
```

###### Check here for more detailed instructions on JavaScript-based commands on how to interact with the MongoDB Shell.

# Mongo Shell
The Mongo shell is a Javascript interpreter that allows for querying through the database/collections/documents.

Follow the following steps in order to create your first MongoDB Database.

#### Some Common Differences between MongoDB and SQL/PostGRES
MongoDB doesn't necessarily allow for Join tables. 
Every document in the database can have different fields.

<hr>

### Some Companies Using MongoDB:
### Google
### Facebook
### Cisco
### UPS
### Ebay
### Intuit
### The New York Times
### Verizon
### NBC

![MongoDB](https://www.mongodb.com/assets/images/resource-center/icons/university.svg)
