const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dbConnection = require('./dbConfig');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(session({
    secret: 'ITS SO SECRET WTF',
    resave: false,
    saveUninitialized: true
}));

app.get('/session', (req, res) => {
    if (req.session.user) {
        res.json({ loggedIn: true, username: req.session.user.nama_user });
    } else {
        res.json({ loggedIn: false });
    }
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages', 'login.html'));
});

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

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM user WHERE email_user = ? AND password_user = ?';
    dbConnection.get(query, [email, password], (error, row) => {
        if (error) {
            console.error('Database query error:', error);
            return res.status(500).send('Internal server error');
        }
        if (row) {
            console.log('Row data:', row);

            req.session.user = { username: row.nama_user };
            console.log('Session user:', req.session.user);
            res.redirect('/index.html');
        } else {
            res.send('Invalid email or password');
        }
    });
});



app.get('/logout', (req, res) => {
    console.log('Attempting to destroy session');
    req.session.destroy(err => {
        if (err) {
            console.error('Error destroying session:', err);
            res.status(500).send('Internal server error');
        } else {
            console.log('Session destroyed successfully');
            res.redirect('/');
        }
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
