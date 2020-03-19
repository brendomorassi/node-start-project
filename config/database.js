import mongoose from "mongoose";
const dotenv = require('dotenv');
dotenv.config();

class Connection {
  constructor() {
    const url =
      process.env.MONGODB_URI || `mongodb://user:password/data`;
    console.log("Establish new connection with url", url);
    mongoose.Promise = global.Promise;
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
    mongoose.set("useUnifiedTopology", true);
    mongoose.connect(url);
  }
}

export default new Connection();