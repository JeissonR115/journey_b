import { Vehicle } from "../models/vehicleModel";

export const getVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.getAllVehicles();
        res.status(200).json(vehicles);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los vehículos', error });
    }
};

// Obtener un vehículo por su ID
export const getVehicleById = async (req, res) => {
    const { id_vehicle } = req.params;
    try {
        const vehicle = await Vehicle.getVehicleById(id_vehicle);
        if (!vehicle) {
            return res.status(404).json({ message: 'Vehículo no encontrado' });
        }
        res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el vehículo', error });
    }
};

// Crear un nuevo vehículo
export const createVehicle = async (req, res) => {
    const { plate, id_type_vehicle, id_provider } = req.body;
    try {
        const newVehicleId = await Vehicle.createVehicle(plate, id_type_vehicle, id_provider);
        res.status(201).json({ message: 'Vehículo creado con éxito', id: newVehicleId });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el vehículo', error });
    }
};

// Actualizar un vehículo
export const updateVehicle = async (req, res) => {
    const { id_vehicle } = req.params;
    const { plate, id_type_vehicle, id_provider } = req.body;
    try {
        const affectedRows = await Vehicle.updateVehicle(id_vehicle, plate, id_type_vehicle, id_provider);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Vehículo no encontrado o no modificado' });
        }
        res.status(200).json({ message: 'Vehículo actualizado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el vehículo', error });
    }
};

// Eliminar un vehículo
export const deleteVehicle = async (req, res) => {
    const { id_vehicle } = req.params;
    try {
        const affectedRows = await Vehicle.deleteVehicle(id_vehicle);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Vehículo no encontrado' });
        }
        res.status(200).json({ message: 'Vehículo eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el vehículo', error });
    }
};
