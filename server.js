const express = require('express');
const app = express();
const port = 3000;

const dbConnection = require('./dbConfig');
app.use(express.static('public'));

app.get('/api/products', (req, res) => {
    const query = 'SELECT * FROM produk';
    dbConnection.all(query, (error, rows) => {
        if (error) throw error;
        res.json(rows);
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/pages/shop.html');
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});




