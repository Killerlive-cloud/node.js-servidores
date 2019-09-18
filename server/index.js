const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hola mundo desde el sena!');

});

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);

});

app.get('/about', (req, res) => {
    res.send('about');
});

app.route('/book')
    .get((req, res) => {
        res.json({ user: 'Blaysther' });
    })

.post((req, res) => {
    res.send('Add a book');
})

.put((req, res) => {
    res.send('Update the book');
})