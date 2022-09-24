import getRoot from "../controllers/getRoot.js";
import postRoot from "../controllers/postRoot.js";

export default function initRoutes(app) {
  app.route("api/data").get(getRoot).post(postRoot);
}
