import db from "./models/relations.js";
import sequelize from "./database/database.js";
import express from "express";
import routes from "./routes/api.js";


const app = express();

await sequelize.sync({ alter: true});

app.use(express.json());
app.use('/api', routes);

app.listen(8000, () => {
    console.log("Server started on port 8000");
});

