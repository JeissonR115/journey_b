import { Journey } from "../models/journeyModel.js";
// Obtener todos los trayectos
export const getJourneys = async (req, res) => {
    try {
        const journeys = await Journey.getAllJourneys();
        res.status(200).json(journeys);
    } catch (error) {
        console.log("error: ", error)
        res.status(500).json({ message: 'Error al obtener los trayectos', error });
    }
};

// Obtener un trayecto por su ID
export const getJourneyById = async (req, res) => {
    const { id_journey } = req.params;
    try {
        const journey = await Journey.getJourneyById(id_journey);
        if (!journey) {
            return res.status(404).json({ message: 'Trayecto no encontrado' });
        }
        res.status(200).json(journey);
    } catch (error) {

        res.status(500).json({ message: 'Error al obtener el trayecto', error });
    }
};

// Crear un nuevo trayecto
export const createJourney = async (req, res) => {
    const { driver_id, vehicle_id, start_time, end_time } = req.body;
    try {
        const newJourneyId = await Journey.createJourney(driver_id, vehicle_id, start_time, end_time);
        res.status(201).json({ message: 'Trayecto creado con éxito', id: newJourneyId });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el trayecto', error });
    }
};

// Actualizar un trayecto
export const updateJourney = async (req, res) => {
    const { id_journey } = req.params;
    const { driver_id, vehicle_id, start_time, end_time } = req.body;
    try {
        const affectedRows = await Journey.updateJourney(id_journey, driver_id, vehicle_id, start_time, end_time);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Trayecto no encontrado o no modificado' });
        }
        res.status(200).json({ message: 'Trayecto actualizado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el trayecto', error });
    }
};

// Eliminar un trayecto
export const deleteJourney = async (req, res) => {
    const { id_journey } = req.params;
    try {
        const affectedRows = await Journey.deleteJourney(id_journey);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Trayecto no encontrado' });
        }
        res.status(200).json({ message: 'Trayecto eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el trayecto', error });
    }
};
