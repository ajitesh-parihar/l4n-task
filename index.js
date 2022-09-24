import path from "path";
import { fileURLToPath } from "url";
import initDB from "./database/initDB.js";
import initRoutes from "./routes/initRoutes.js";
import express from "express";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json({ extended: true }));
app.use(express.static(path.join(__dirname, "./l4n-task-client/build")));
app.use(cors());
initRoutes(app);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/l4n-task-client/build/index.html"));
});
(async function initServer() {
  try {
    await initDB();
    app.listen(PORT, () => console.log(`Running on port: ${PORT}`));
  } catch (err) {
    console.log(err);
  }
})();
