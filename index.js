const express = require("express");
const path = require("path");
// const localtunnel = require("./lib/localtunnel");
const config = require("./config.json");

const router = express.Router();
const app = express();

app.use("/*/global.css", express.static(path.join(__dirname, '/routers/global.css')));


app.use("/", require(__dirname + "/routers/home/router"));
app.use("/finance", require(__dirname + "/routers/finance/router"));
app.use("/math", require(__dirname + "/routers/math/router"));
app.use("/peeker", require(__dirname + "/routers/error/peeker/router"));
app.listen(config.port, () => {
	// localtunnel();
	console.log(`Example app listening a`);
});
