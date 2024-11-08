const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    
    const user = {
        name: "João",
        surname: "Silva",
        age: 20,
        
    }
    
    
    res.render("home", {user: user});
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});