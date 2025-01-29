const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/users');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // Para poder leer cuerpos de solicitudes JSON

// Rutas
app.use('/api', userRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
