import DataModel from "../database/models/data.js";

export default async function addData(newData) {
  try {
    console.log(newData);
    await DataModel.insertMany(newData);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
