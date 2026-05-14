const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Backend Running Successfully");
});

app.post("/predict", (req, res) => {

    const {
        sleepHours,
        stressLevel,
        workHours,
        screenTime
    } = req.body;

    let prediction = "";

    // Prediction Logic

    if (
        stressLevel >= 8 ||
        workHours >= 10 ||
        screenTime >= 8
    ) {
        prediction = "High Mental Overload";
    }

    else if (
        stressLevel >= 5
    ) {
        prediction = "Medium Mental Overload";
    }

    else {
        prediction = "Low Mental Overload";
    }

    // Send Result

    res.json({
        prediction: prediction
    });

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});