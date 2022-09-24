import getData from "../services/getData.js";

export default async function getRoot(req, res) {
  const data = await getData();
  // console.log(data);
  res.json(data);
}
