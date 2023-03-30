const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {
    dbName:process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`mongodb connected `);
  })
  .catch((error) => {
    console.log(`Error:${error.message}`);
  });



  mongoose.connection.on("connected", () => {
    console.log(`Mongoose connected to ${process.env.DB_NAME}`);
  });
  
  mongoose.connection.on("error", (err) => {
    console.log(err.message);
  });
  
  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose connection is disconnected");
  });
  
  process.on("SIGINT", async () => {
    await mongoose.connection.close();
    process.exit(0);
  });