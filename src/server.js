// filepath: /src/server.js
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Servidor rodando!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});