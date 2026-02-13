const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const predictHeartDisease = require("./model");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/predict", (req, res) => {
    const result = predictHeartDisease(req.body);
    res.json({ prediction: result });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
