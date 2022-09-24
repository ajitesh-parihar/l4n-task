import mongoose from "mongoose";

const DataSchema = mongoose.Schema({
  text: String,
});

const DataModel = mongoose.model("Data", DataSchema);

export default DataModel;
