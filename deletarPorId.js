const {MongoClient, ObjectId} = require("mongodb");

const conectar = async(uri)=>{

    const client = new MongoClient(uri);

    await client.connect();

    return client;
};

const buscar = async(id, conexao)=>{

    const database = conexao.db("dbExemplo");

    const dbcollection = database.collection("dbExemplo");

    const result = await dbcollection.findOne({_id: id});

    return result;
    
};

const deletar = async(id, conexao)=>{

    const database = conexao.db("dbExemplo");

    const dbcollection = database.collection("dbExemplo");

    const result = await dbcollection.deleteOne({_id: id});

    return result;

};


const inserir = async(doc, conexao)=>{

    const database = conexao.db("dbExemplo");

    const dbcollection = database.collection("dbExemplo");

    const result = await dbcollection.insertOne(doc);

    console.log("Documento inserido = ", result);

    return result;
}


(async function (){

    const uri = "mongodb://localhost:27017/dbExemplo";

    const conexao = await conectar(uri);

    const objectId = new ObjectId("65b7e8806c9118ff049f52ca");

    const result = await buscar(objectId, conexao);

    const result1 = await deletar(objectId, conexao);

    const doc = ({title:"Java", descricao:"Orientação a objetos", valor:78.99, quantidadeEstoque:99});

    const result3 = await inserir(doc, conexao);

    console.log(result1);

    console.log(result);

    conexao.close();

    process.exit(0);

})();

// async function deletarPorId(id){

//     const resultado = buscarPorId(id);

//     const database = client.db("dbExemplo");

//     const dbcollection = database.collection("dbExemplo");

//     const result = await dbcollection.deleteOne(resultado);

//     console.log("Dado Excluído");

//     process.exit(0);

// }


//buscarPorId("65b26f37e97dc8ff6ceb135d").catch(console.dir);

//deletarPorId("65b26f37e97dc8ff6ceb135d").catch(console.dir);









