const express = require('express');
const app = express();

const genres = [
    { id: 1, genre: "genre1" },
    { id: 2, genre: "genre2" },
    { id: 3, genre: "genre3" },
    { id: 4, genre: "genre4" }
];


app.get('/api/genres/', (req, res) => {
    res.send(genres);
});

app.get('/api/genres/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if(!genre) res.status(404).send('The genre with the given ID could not be found');
    res.send(genre);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port: ${port}`));