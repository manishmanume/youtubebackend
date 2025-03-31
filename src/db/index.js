import mongoose from "mongoose";
import {DB_NAME} from '../constants.js';

const ConnectDB = async () => {
    try {
      const Connections = await mongoose.connect
      (`${process.env.MONGODB_URI}/${DB_NAME}`);
      console.log(`\n MongoDB Connected !! DB HOST: ${Connections.connection.host}`);
      
    } catch (error) {
        console.error("MongoDB Connections Errors:", error);
        process.exit(1);
    }
}

export default ConnectDB;