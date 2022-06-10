const db = require("./connection");

db.once("open", async () => {
  

  console.log("DATA SEEDED");
});
