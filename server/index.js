import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

import client from "./Route/client.js";
import general from "./Route/general.js";
import management from "./Route/management.js";
import sales from "./Route/sales.js";

const app = express();
// Load environment variables
dotenv.config();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// routes

app.use("/client", client);
app.use("/general", general);
app.use("/management", management);
app.use("/sales", sales);

