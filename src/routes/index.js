import { Router } from 'express';
import journeyRoutes from './journeyRoutes.js';
import vehicleRoutes from './vehicleRoutes.js';
import { HOST, PORT } from '../../app.js';
const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'API is running!',
        cat: [
            "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
            "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢇⠀⠃⣈⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
            "⠀⠀⠀⠀⠀⠀⠀⣤⣤⣤⣄⣀⡀⠙⠞⠁⠀⠀⠀⣀⣀⣀⣀⠀⠀⠀⠀⠀",
            "⠀⠀⠀⠀⠀⠀⢰⡏⢻⣫⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⠟⣿⠀⠀⠀⠀⠀",
            "⠀⠀⠀⠀⡐⡄⣸⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⣿⠀⠀⠀⠀⠀",
            "⠀⠀⣀⠠⢝⡜⣿⣿⡟⢉⣭⡝⢿⣿⣿⣿⡟⣭⣭⠉⢻⣿⡿⡠⠒⠀⠀⠀",
            "⡴⣟⣿⣻⣆⢰⣿⣿⠀⢸⣿⣿⢸⣿⣿⣿⠙⣿⣿⠇⠈⣿⣿⠱⠭⠄⠀⠀",
            "⢷⣿⡀⣸⣿⡞⣿⣿⣄⠀⠉⠁⣼⣿⢿⣿⣧⠈⠁⠀⣰⣿⣿⣠⣴⣶⣦⣄",
            "⠈⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠒⠓⠒⠛⠛⠛⠛⠛⠛⠛⠓⠻⡏⣿⣿⠿ "
        ]
    });
});
// Registrar rutas específicas
router.use('/journeys', journeyRoutes);
router.use('/vehicles', vehicleRoutes);


// Página de prueba (opcional)
export default router;
