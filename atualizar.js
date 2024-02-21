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

async function atualizar(){

    try{

        const dabatase = client.db("dbExemplo");

        const result = dabatase.collection("dbExemplo");

        const atualizar = result.updateOne({title:"Redes Linux"}, {$set:{title:"Redes Windows", descricao:"Redes Windows", valor:150, quantidadeEstoque:56}});

        if(atualizar === true){

            console.log("Atualizado com Sucesso!");
        
        }
    }

    finally{

        await client.close();
    }
}

atualizar().catch(console.dir)

run().catch(console.dir)
