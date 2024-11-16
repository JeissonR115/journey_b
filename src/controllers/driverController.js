import { Driver } from "../models/driverModel.js";
// Obtener todos los conductores
export const getDrivers = async (req, res) => {
    try {
        const drivers = await Driver.getAllDrivers();
        res.status(200).json(drivers);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los conductores', error });
    }
};

// Obtener un conductor por su ID
export const getDriverById = async (req, res) => {
    const { id_driver } = req.params;
    try {
        const driver = await Driver.getDriverById(id_driver);
        if (!driver) {
            return res.status(404).json({ message: 'Conductor no encontrado' });
        }
        res.status(200).json(driver);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el conductor', error });
    }
};

// Crear un nuevo conductor
export const createDriver = async (req, res) => {
    const { first_name, last_name, id_provider } = req.body;
    try {
        const newDriverId = await Driver.createDriver(first_name, last_name, id_provider);
        res.status(201).json({ message: 'Conductor creado con éxito', id: newDriverId });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el conductor', error });
    }
};

// Actualizar un conductor
export const updateDriver = async (req, res) => {
    const { id_driver } = req.params;
    const { first_name, last_name, id_provider } = req.body;
    try {
        const affectedRows = await Driver.updateDriver(id_driver, first_name, last_name, id_provider);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Conductor no encontrado o no modificado' });
        }
        res.status(200).json({ message: 'Conductor actualizado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el conductor', error });
    }
};

// Eliminar un conductor
export const deleteDriver = async (req, res) => {
    const { id_driver } = req.params;
    try {
        const affectedRows = await Driver.deleteDriver(id_driver);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Conductor no encontrado' });
        }
        res.status(200).json({ message: 'Conductor eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el conductor', error });
    }
};
