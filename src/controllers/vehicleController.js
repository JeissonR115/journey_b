import { db } from "../../app";


export const getAllVehicles = async (req, res) => {
    try {
        const query = 'SELECT * FROM tbl_collection_accounts_vehicles';

        const [vehicles] = await db.execute(query);

        res.status(200).json(vehicles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los vehículos' });
    }
};
export const getVehicleById = async (req, res) => {
    try {
        const { id_vehicle } = req.params;

        const query = 'SELECT * FROM tbl_collection_accounts_vehicles WHERE id_vehicles = ?';

        const [vehicle] = await db.execute(query, [id_vehicle]);

        if (vehicle.length === 0) {
            return res.status(404).json({ message: 'Vehículo no encontrado' });
        }

        res.status(200).json(vehicle[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el vehículo' });
    }
};
export const addVehicle = async (req, res) => {
    try {
        const { plate, id_type_vehicle, id_provider } = req.body;

        const query = 'INSERT INTO tbl_collection_accounts_vehicles (plate, id_type_vehicle, id_provider) VALUES (?, ?, ?)';

        const [result] = await db.execute(query, [plate, id_type_vehicle, id_provider]);

        res.status(201).json({
            message: 'Vehículo creado con éxito',
            vehicleId: result.insertId,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el vehículo' });
    }
};
export const editVehicle = async (req, res) => {
    try {
        const { id_vehicle } = req.params;
        const { plate, id_type_vehicle, id_provider } = req.body;

        const query = 'UPDATE tbl_collection_accounts_vehicles SET plate = ?, id_type_vehicle = ?, id_provider = ? WHERE id_vehicles = ?';

        const [result] = await db.execute(query, [plate, id_type_vehicle, id_provider, id_vehicle]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Vehículo no encontrado' });
        }

        res.status(200).json({ message: 'Vehículo actualizado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al editar el vehículo' });
    }
};
export const deleteVehicle = async (req, res) => {
    try {
        const { id_vehicle } = req.params;

        const query = 'DELETE FROM tbl_collection_accounts_vehicles WHERE id_vehicles = ?';

        const [result] = await db.execute(query, [id_vehicle]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Vehículo no encontrado' });
        }

        res.status(200).json({ message: 'Vehículo eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el vehículo' });
    }
};
