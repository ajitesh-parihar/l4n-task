import addData from "../services/addData.js";

export default async function postRoot(req, res) {
  const { newData } = req.body;
  await addData(newData);
  res.end();
}
