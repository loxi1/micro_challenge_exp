const express = require("express");
const FechasRouter = express.Router();

const app = express();
const FechaRoter = require('./routes/FechaRoter');

app.use(express.json({ extended: true }));
app.use(express.urlencoded());

app.use("/api", FechaRoter);

app.listen(3000, () => {
    console.log("Servidor escucha el puerto 3000")
});