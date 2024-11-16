import { Router } from 'express';
import { getVehicles, getVehicleById, createVehicle, updateVehicle, deleteVehicle } from '../controllers/vehicleController.js';

const router = Router();

// Definir rutas para los vehículos
router.get('/', getVehicles); // Obtener todos los vehículos
router.get('/:id', getVehicleById); // Obtener un vehículo por ID
router.post('/', createVehicle); // Crear un nuevo vehículo
router.put('/:id', updateVehicle); // Actualizar un vehículo por ID
router.delete('/:id', deleteVehicle); // Eliminar un vehículo por ID

export default router;
