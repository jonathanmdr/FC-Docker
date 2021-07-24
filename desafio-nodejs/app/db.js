const mysql = require("mysql2/promise");

async function connect() {
    if(global.connection && global.connection.state !== "disconnected")
        return global.connection;
    
    const connection = await mysql.createConnection("mysql://root:root@mysql-challenge:3306/challenge");
    global.connection = connection;
    return connection;
}

async function migration() {
    const conn = await connect();
    await conn.query("CREATE TABLE IF NOT EXISTS people(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255));")
}

async function insertPeople() {
    const conn = await connect();
    await conn.query("INSERT INTO people(name) VALUES('Jonathan Henrique Medeiros');")
}

async function selectPeoples() {
    const conn = await connect();
    const [rows] = await conn.query("SELECT * FROM people;");
    return rows;
}

migration()
.then(result => {
    console.log("Migration applied");

    insertPeople()
    .then(result => console.log("Insert applied"))
    .catch(error => console.error("Failed to execute insert in database"));
})
.catch(error => console.error("Failed to execute database migration"));
 
module.exports = {insertPeople, selectPeoples}
