
import { MongoClient, ServerApiVersion } from 'mongodb';
// TODO: connection string params as ENV  VARIABLES
const uri = "mongodb+srv://boris:WH12U5XkDINCq71V@cluster0.8ovqm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

async function findMovie() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const rs = client.db("video").collection("movieDetails").find({runtime: { $gt: 120 }});
    const cursor = await rs.toArray();
    for (const doc of cursor) {
      console.dir(doc);
    }
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

//run().catch(console.dir);
findMovie().catch(console.dir);