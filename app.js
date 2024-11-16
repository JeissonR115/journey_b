import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import pkg from 'body-parser';
import routes from './src/routes/index.js';
import { connect } from './src/config/database.js';

const app = express();

dotenv.config();
export const { HOST, USER, PASSWORD, DATABASE, PORT } = process.env
const { json, urlencoded } = pkg;

// Middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

export const db = await connect({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
});

app.use('/', routes);

// Configurar puerto
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto http://${HOST}:${PORT}`);
});

export default app;
