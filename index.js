const express = require('express');
const app = express();

app.use(express.json());

const genres = [
    { id: 1, name: "genre1" },
    { id: 2, name: "genre2" },
    { id: 3, name: "genre3" },
    { id: 4, name: "genre4" },
];

app.get('/api/genres/', (req, res) => {
    res.send(genres);
});

app.get('/api/genres/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if(!genre) res.status(404).send('The genre with the given ID could not be found');
    res.send(genre);
});

app.post('/api/genres', (req,res) => {
    const genre = {
        id: genres.length + 1,
        name: req.body.name 
    };
    genres.push(genre);
    res.send(genre);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port: ${port}`));