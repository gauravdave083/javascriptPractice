const express = require('express');
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.use((req, res) => {
    // console.log(req);
    console.log("request recieved");
    res.send("This is a basic response");
});

