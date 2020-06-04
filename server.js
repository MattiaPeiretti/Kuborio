let express = require("express");

let app = express();
let server = app.listen(5501);

app.use(express.static("."));
