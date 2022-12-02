import { config } from "../config";
import { MongoClient,ObjectId } from "mongodb";
const DB_NAME = 'davc93'
const atlas = false
const uri =  atlas ? `mongodb+srv://${config.MONGO.USERNAME}:${config.MONGO.PASSWORD}@mercadopago-davc93.sjfl7ar.mongodb.net/?retryWrites=true&w=majority`: `mongodb://${config.MONGO.USERNAME}:${config.MONGO.PASSWORD}@localhost:27017/`
const client = new MongoClient(uri);
async function insert(data: any, collection: string) {

        
    const database = client.db(DB_NAME);
    const getCollection = database.collection(collection);
    // Query for a movie that has the title 'Back to the Future'
    const result =  await getCollection.insertOne(data)
    console.log(result.insertedId);
    return result
        
    
}

async function upsert(data: any, collection: string) {
    return insert(data, collection);
}
async function list(collection:string) {
    const database = client.db(DB_NAME);
    const getCollection = database.collection(collection);
    const result = await getCollection.find({}).toArray()
    console.log(result);
    return result


}
async function get(id:string,collection:string) {
    const database = client.db(DB_NAME);
    const getCollection = database.collection(collection);
    const mongoId = new ObjectId(id)
    const result = await getCollection.findOne({"_id":mongoId})
    console.log(result);
    return result
}

export default {
    upsert,
    list,
    get,

};
