const { MongoClient, ServerApiVersion} = require("mongodb");

const uri = "mongodb://localhost:27017/dbExemplo"
    
const client = new MongoClient(uri);

async function run(){
    try{

        await client.connect();

        await client.db("admin").command({ping: true});

        console.log("Conexão realizada com sucesso");
        
    }

    finally{

        await client.close();

    }
}


async function add(){

    try{

        const database = client.db("dbExemplo");

        const inserir = database.collection("dbExemplo");

        const doc = {title:"Programação em Cobol", descricao:"Estrutura de dados em cobol",valor:45.99, quantidadeEstoque:9}

        const result = await inserir.insertOne(doc);

        console.log("Documento inserido com sucesso!", {result,doc});
    }

    finally{

        await client.close();

    }
}

add().catch(console.dir);

run().catch(console.dir);