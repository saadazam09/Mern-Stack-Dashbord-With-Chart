import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./Route/client.js";
import generalRoutes from "./Route/general.js";
import managementRoutes from "./Route/management.js";
import salesRoutes from "./Route/sales.js";
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat  from "./models/ProductStat.js";
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "./data/data.js";


/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

/* ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    User.insertMany(dataUser);

    Product.insertMany(dataProduct);
    ProductStat.insertMany(dataProductStat);
    
  })

  .catch((error) => console.log(`${error} did not connect`));
