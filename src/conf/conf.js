const conf = {
  appWriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appWriteProjectUrl: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appWriteDatabaseUrl: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appWriteCollectionUrl: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appWriteBucketUrl: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;
