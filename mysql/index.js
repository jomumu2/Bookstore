const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const PORT = 3000;

const dbConfig = {
  host: process.env.MYSQL_HOST || 'db',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'visits'
};

app.get('/', async (req, res) => {
  const conn = await mysql.createConnection(dbConfig);
  await conn.execute(`CREATE TABLE IF NOT EXISTS visits (visited_at DATETIME)`);
  await conn.execute(`INSERT INTO visits VALUES (NOW())`);
  const [rows] = await conn.execute(`SELECT * FROM visits`);
  await conn.end();

  res.send(`<h1>Visit history</h1><pre>${JSON.stringify(rows, null, 2)}</pre>`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
