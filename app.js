import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import pkg from 'body-parser';
import routes from './src/routes/journeyRoutes.js';
import { connect } from './src/config/database.js';

const app = express();

dotenv.config();
const { HOST, USER, PASSWORD, DATABASE, PORT } = process.env
const { json, urlencoded } = pkg;

// Middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// Conexión a la base de datos
export const db = await connect({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
});

// Rutas
app.use('/api/journeys', routes);

// Página de prueba (opcional)
app.get('/', (req, res) => {
    res.send(`Hola, la ruta actual de nuestra API es <a href="http://${HOST}:${PORT}/api/journeys">http://${HOST}:${PORT}/api/journeys</a>`);
});

// Configurar puerto
app.listen(PORT, () => {
    connect
    console.log(`Servidor en ejecución en el puerto http://${HOST}:${PORT}`);
});

export default app;
