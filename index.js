import express from 'express';
import bodyParser from 'body-parser';
import mobilRoute from "./mobil.js";
import mahasiswaRoute from "./mahasiswa.js"

const app = express();
const port = 3000;

/*
app.get("/", (req, res) => {
    console.log(["GET ROUTE"]);
    res.send("SELAMAT PAGI");
});
*/

// Gunakan mobilRoute

app.use('/mobil', mobilRoute);
app.use('/mahasiswa', mahasiswaRoute)

app.use(bodyParser.json());
app.listen(port, () =>
    console.log(
        `Server berjalan di port: http://localhost:${port}`)
);