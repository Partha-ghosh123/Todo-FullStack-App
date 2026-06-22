import { MongoClient } from "mongodb";
// const  url="mongodb://localhost:27017";
import dns from "dns";

dns.setServers(["1.1.1.1","8.8.8.8"])

const url="mongodb+srv://parthaghoshgoas_db_user:goas2005@cluster0.c0xlgc0.mongodb.net/?appName=Cluster0"

const dbname="node-project";
export const collectionname="todo";

const client = new MongoClient(url);    
export const connection=async()=>{
    const connect=await client.connect();
    const db=await connect.db(dbname);
    return db;
}