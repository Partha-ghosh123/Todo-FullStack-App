import "dotenv/config"
import { MongoClient } from "mongodb";
import dns from "dns";

dns.setServers(["1.1.1.1","8.8.8.8"])

const url=process.env.MONGODB_URL;
const dbname="node-project";
export const collectionname="todo";

const client = new MongoClient(url);    
export const connection=async()=>{
    const connect=await client.connect();
    const db=await connect.db(dbname);
    return db;
}