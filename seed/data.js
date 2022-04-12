import db from "../db/connection.js";
import Snowboard from "../models/snowboard.js";
import snowboards from "./snowboards.json" assert { type: "json" };

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  // insert characters into database
  await Snowboard.insertMany(snowboards);

  // close db connection (done)
  db.close();
};

insertData();