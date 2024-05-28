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

app.get('/api/product/:id', (req, res) => {
    const productId = req.params.id;
    const query = 'SELECT * FROM produk WHERE id_produk = ?';
    dbConnection.get(query, [productId], (error, row) => {
        if (error) {
            return res.status(500).json({ error: 'Database query error' });
        }

        if (!row) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(row);
    });
});


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
