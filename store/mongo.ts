import { config } from "../config";
import { MongoClient } from "mongodb";
const atlas = false
const uri =  atlas ? `mongodb+srv://${config.MONGO.USERNAME}:${config.MONGO.PASSWORD}@mercadopago-davc93.sjfl7ar.mongodb.net/?retryWrites=true&w=majority`: `mongodb://${config.MONGO.USERNAME}:${config.MONGO.PASSWORD}@localhost:27017/`
const client = new MongoClient(uri);
async function insert(data: any, collection: string) {

    async function run() {
        try {
            const database = client.db('mercadopago');
            const preferences = database.collection(collection);
            // Query for a movie that has the title 'Back to the Future'
            const result =  await preferences.insertOne(data)
            console.log(result.insertedId);
        } catch(error) {
            console.log(error)
        }
    }

    run()
    
}

function upsert(data: any, collection: string) {
    return insert(data, collection);
}

export default {
    upsert,
};
