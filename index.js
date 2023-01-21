import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
const host ='localhost';
const port =3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.listen(port, host, () => {
  console.log(`Server berjalan di http://${host}:${port}`);
});
