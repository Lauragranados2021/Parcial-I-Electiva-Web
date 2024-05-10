const express = require("express");
const { dirname } = require("path");
const path = require("path");

const app = express();

//setters
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.set("views", "./views");
app.set("view engine", "ejs");
app.set("PORT", process.env.PORT || 3002);

//midleware
app.use("/", require("./routes/index"));

app.listen(app.get("PORT"), () =>
    console.log(`Server listen at Port ${app.get("PORT")}`)
);
