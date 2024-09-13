const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// MongoDB Atlas connection URI
const uri = 'mongodb+srv://swatitiwarim1220:oQkVwfLlgiThXcbW@cluster0.mongodb.net/users?retryWrites=true&w=majority';

let db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;
    db = client.db('Library_management_website'); // Use your database name

    console.log('Connected to MongoDB Atlas');
});

// Route to get all memberships
app.get('/memberships', async (req, res) => {
    try {
        const memberships = await db.collection('memberships').find().toArray();
        res.json(memberships);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Route to add a membership
app.post('/memberships', async (req, res) => {
    try {
        const membership = req.body;
        await db.collection('memberships').insertOne(membership);
        res.status(201).send('Membership added');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Route to get all books
app.get('/books', async (req, res) => {
    try {
        const books = await db.collection('books').find().toArray();
        res.json(books);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Route to add a book
app.post('/books', async (req, res) => {
    try {
        const book = req.body;
        await db.collection('books').insertOne(book);
        res.status(201).send('Book added');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Similar routes for movies and users

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
