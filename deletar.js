(async function deletar(){

const { MongoClient, ServerApiVersion} = require("mongodb");

const uri = "mongodb://localhost:27017/dbExemplo";
    
const client = new MongoClient(uri);

async function run(){
    
    try{

        await client.connect();

        await client.db("admin").command({ping: true});

        console.log("Conexão realizada com sucesso");
        
    }
    catch(e){

        console.log("Erro", e);
    }
}

async function deletar(){

    try{

        const database = client.db("dbExemplo");
        
        const dbexemplo = database.collection("dbExemplo");
        
        const query = {title:"Python", descricao: "Automação de tarefas em python", valor: 100, quantidadeEstoque: 6};

        const result = await dbexemplo.deleteOne(query);

        if (result.deletedCount === 1) {

            console.log("Dado deletado com sucesso!");
        }

        else {

            console.log("Dado não deletado!");
        }
    }

    finally {    

        await client.close();
    }
}

deletar().catch(console.dir);

run().catch(console.dir);

})();



