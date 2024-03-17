const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.post("/compile", (req, res) => {
    console.log("Compiler function called");

    // Getting the required data from the request
    let code = req.body.code;
    let language = req.body.language;
    let input = req.body.input;

    if (language === "python") {
        language = "python3"; // JDoodle uses 'python3' instead of 'python'
    }

    // JDoodle API request payload
    const program = {
        script: code,
        language: language,
        stdin: input,
        clientId: "b433b4ef4d00b56757e78b1bc91803cd", // Replace with your actual client ID
        clientSecret: "8facbba9f4d0ffc0fd96663b8674a77ab0fc28593f78fa080c6ba54598ed9999" // Replace with your actual client secret
    };

    // Making a POST request to JDoodle API
    axios.post('https://api.jdoodle.com/v1/execute', program)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send("Error occurred during compilation");
        });
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
