require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const start = async function () {
    try {
        app.listen(PORT, function () {
            console.log(`http://localhost:${PORT}`);
        });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error);
        }
    }
};

(function () {
    start();
})();
