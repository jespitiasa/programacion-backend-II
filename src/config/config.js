export const PORT = process.env.PORT || 3000;

export const MONGO_URL = process.env.MONGO_URL || "mongodb+srv://jespitiasa:EEsYZFXoVfF7Fg3g@cluster0.3hzrp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const dbConnectionType = process.env.MONGO_URL ? "Atlas" : "Local"

export const SECRET_KEY = process.env.SECRET_KEY || 123;

export const saltRounds = 10;

// Para passport-google-oauth20
export const CLIENT_ID_GOOGLE = process.env.CLIENT_ID_GOOGLE;
export const CLIENT_SECRET_GOOGLE = process.env.CLIENT_SECRET_GOOGLE;