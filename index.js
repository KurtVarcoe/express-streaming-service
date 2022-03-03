const express = require('express');
const app = express();

const genre = [
    { id: 1, genre: genre1 },
    { id: 2, genre: genre2 },
    { id: 3, genre: genre3 },
    { id: 4, genre: genre4 }
];


app.get('/api/genres/', (res, req) => {
    res.send(genre);
    res.end();
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port: ${port}`));