import "./models/modrels.js";
import express from "express";
import routes from "./routes/api.js";
import dotenvFlow from "dotenv-flow";

dotenvFlow.config();

const PORT = process.env.APP_PORT || 8000
const app = express();

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

