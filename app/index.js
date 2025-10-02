import "./models/modrels.js";
import express from "express";
import routes from "./routes/api.js";
import { readFileSync } from 'fs'

const confPath = '../config/default.json'
const fileUrl = new URL(confPath, import.meta.url)
const config = JSON.parse(readFileSync(fileUrl, 'utf-8'))

const PORT = config.app.port || 8000
const app = express();

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

