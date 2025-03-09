import { Client, Databases, Storage, Account } from "appwrite";

const appwriteConfig = {
  endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT, // URL dari Appwrite
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID, // ID proyek di Appwrite
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID, // ID database
  collectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID, // ID koleksi untuk produk
  bucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID, // ID bucket penyimpanan file
};

const client = new Client();
client.setEndpoint(appwriteConfig.endpoint).setProject(appwriteConfig.projectId);

const databases = new Databases(client);
const storage = new Storage(client);
const account = new Account(client); // Tambahkan ini untuk autentikasi

export { client, databases, storage, account, appwriteConfig }; // Export account juga
