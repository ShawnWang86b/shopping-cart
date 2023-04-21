import app from "./app";
import env from "./util/validateEnv";
import mongoose from "mongoose";
import { createServer } from "http";

const port = env.PORT;
const server = createServer(app);

mongoose.set("strictQuery", true);
mongoose.set("runValidators", true);

server.listen(port, () => {
  console.log("Server running on port: " + port);
});
