import { MongoClient, Db } from 'mongodb';



const { MONGODB_URI, MONGODB_DB }  = process.env;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

if (!MONGODB_DB) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  );
}

let cachedDb: Db;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(MONGODB_URI!, {}).catch((error) => {
    console.error('Failed to connect to the database', error);
    throw error;
  });

  const db = client.db(MONGODB_DB);

  cachedDb = db;

  return db;
}