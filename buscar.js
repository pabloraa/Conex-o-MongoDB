(async function teste(){

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const uri = "mongodb://localhost:27017/dbExemplo";
    
const client = new MongoClient(uri);

const redis = require('redis');

const clienteRedis = redis.createClient("redis://localhost:6379");

try{

clienteRedis.connect();

const result1 = clienteRedis.set('lastSearch','cursos');

const result2 = await clienteRedis.get('lastSearch');

console.log(result1, result2);

const database = client.db("dbExemplo");

const dbexemplo = database.collection("dbExemplo");

const cursor = dbexemplo.find({});

for await (const doc of cursor){
            
    console.log(doc);

}

client.close();

}
catch{

    console.log("Erro ao Conectar ao Banco de dados!");

}
// async function run(){

//     try{

//         await client.connect();

//         await client.db("admin").command({ping: true});

//         console.log("Conexão realizada com sucesso");
        
//     }

//     finally{

//         await client.close();

//     }
// }


})();


// async function run(){

//     try{

//         await client.connect();

//         await client.db("admin").command({ping: true});

//         console.log("Conexão realizada com sucesso");
        
//     }

//     finally{

//         await client.close();

//     }
// }


//buscar().catch(console.dir)
//run().catch(console.dir)