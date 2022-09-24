import DataModel from "../database/models/data.js";

export default async function getData() {
  try {
    const data = await DataModel.find();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
