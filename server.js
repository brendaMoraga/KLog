const express = require('express');
const app = express();

app.get('/api/data/itinerario', (req, res) => {
    const data = {
        Origen: '',
        Destino: '',
        Naviera: '',
        ETD: '',
        ETA: '',
    };
    res.json(data);
});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});


//http://localhost:3000/api/data/itinerario