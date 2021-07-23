const db = require("./db");
const express = require("express");

const app = express();
const port = 3000;

db.insertPeople()
.then(result => console.log("Insert applied"))
.catch(err => console.error("Failed to execute insert in database"));

app.get("/", (req, res) => {
    db.selectPeoples()
    .then(result => {
        console.log("Search performed successfully")
        const [firstPeople, ...ignore] = result;

        const json = JSON.stringify(firstPeople);
        const people = JSON.parse(json);

        const html = `
            <h1>FullCycle Rocks!</h1>
            </br>
            <h2>Peoples:</h2>
            </br>
            <ul>
                <li>
                    #peopleName
                </li>
            </ul>
        `;

        res.send(html.replace("#peopleName", people.name));
    })
    .catch(error => {
        console.error(error);
    });    
})

app.listen(port, () => {
    console.log("Application running on port " + port);
})
