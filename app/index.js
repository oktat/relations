import express from "express";
import routes from "./routes/api.js";
import "./models/modrels.js";

const app = express();

app.use(express.json());
app.use('/api', routes);

app.listen(8000, () => {
    console.log("Server started on port 8000");
});

