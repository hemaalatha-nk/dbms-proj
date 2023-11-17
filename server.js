const express = require("express");
const path = require("path");

const app = express();

const PORT = 3001;

const dbName = "HW1_DB";
let db;
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

sqlite
    .open({
        filename: `./database/${dbName}.db`,
        driver: sqlite3.Database,
    })
    .then((dbConn) => {
        console.log(`Connected to database - ./database/${dbName}.db`);
        db = dbConn;
    });

app.get("/", (req, res) => {
  return res.sendFile("login.html", { root: path.join(__dirname, "src") });

//   res.sendFile("login.html", { root: path.join(__dirname, "views") });

});

app.put("/loginAdmin",(req,res)=>{
    
    
});



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));