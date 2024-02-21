(async function teste(){

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const uri = "mongodb://localhost:27017/dbExemplo"
    
const client = new MongoClient(uri);

        await client.connect();
        
        const id = "65b25f194ff60e113fa1ca61";

        const objectId = new ObjectId(id);

        const database = client.db("dbExemplo");

        const dbcollection = database.collection("dbExemplo");

        const result = await dbcollection.findOne({_id: objectId});

        console.log("resultado = ", result);

        client.close();

        process.exit(0);

})();

