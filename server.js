const express = require('express');
const userRoutes = require('./routes/users');

const app = express();
const port = 3000;

app.use(express.json()); // διαβάζει JSON bodies

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('API is running');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});