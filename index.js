import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

const host ='localhost';
const port =3001;

app.listen(port, host, () => {
  console.log(`Server berjalan di http://${host}:${port}`);
});
