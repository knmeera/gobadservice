import express from "express";
import cors from "cors";
import productRoutes from "./routes/products.routes";
import postRoutes from "./routes/posts.routes";
import morgan from "morgan";

import config from "./config";

const app = express();
app.use(morgan("dev"));

// settings
app.set("port", config.port);

// Middlewares
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", productRoutes);
app.use("/api", postRoutes);

export default app;
