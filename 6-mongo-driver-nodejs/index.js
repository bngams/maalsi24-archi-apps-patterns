// Syntax ES Modules (Javascript Module)
// import { MongoClient } from 'mongodb';


// require.js
const { MongoClient } = require('mongodb');
require('dotenv').config()

// generate connexion URL protocole://usernme:pssword/dbhostn?options
const url = process.env.MONGO_CONN_STRING;
// Initialize and store connexion
const client = new MongoClient(url);


// Database Name
const dbName = 'video';




async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('movieDetails');
    const res = await collection.find({
        title: "Once Upon a Time in the West"
    }).toArray();
    console.log('res', res);


    // the following code examples can be pasted here...
    return 'done.';
}


main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
