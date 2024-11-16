import { db } from "../../app";
// Obtener todos los conductores
export const getAllDrivers = async (req, res) => {
    try {
        const query = 'SELECT * FROM tbl_collection_accounts_drivers';

        const [drivers] = await db.execute(query);

        res.status(200).json(drivers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los conductores' });
    }
};

// Obtener conductor por ID
export const getDriverById = async (req, res) => {
    try {
        const { id_driver } = req.params;

        const query = 'SELECT * FROM tbl_collection_accounts_drivers WHERE id_driver = ?';

        const [driver] = await db.execute(query, [id_driver]);

        if (driver.length === 0) {
            return res.status(404).json({ message: 'Conductor no encontrado' });
        }

        res.status(200).json(driver[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el conductor' });
    }
};

// Agregar un nuevo conductor
export const addDriver = async (req, res) => {
    try {
        const { first_name, last_name, id_provider } = req.body;

        const query = 'INSERT INTO tbl_collection_accounts_drivers (first_name, last_name, id_provider) VALUES (?, ?, ?)';

        const [result] = await db.execute(query, [first_name, last_name, id_provider]);

        res.status(201).json({
            message: 'Conductor creado con éxito',
            driverId: result.insertId,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el conductor' });
    }
};

// Editar conductor
export const editDriver = async (req, res) => {
    try {
        const { id_driver } = req.params;
        const { first_name, last_name, id_provider } = req.body;

        const query = 'UPDATE tbl_collection_accounts_drivers SET first_name = ?, last_name = ?, id_provider = ? WHERE id_driver = ?';

        const [result] = await db.execute(query, [first_name, last_name, id_provider, id_driver]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Conductor no encontrado' });
        }

        res.status(200).json({ message: 'Conductor actualizado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al editar el conductor' });
    }
};

export const deleteDriver = async (req, res) => {
    try {
        const { id_driver } = req.params;
        const query = 'DELETE FROM tbl_collection_accounts_drivers WHERE id_driver = ?';
        const [result] = await db.execute(query, [id_driver]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Conductor no encontrado' });
        }

        res.status(200).json({ message: 'Conductor eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el conductor' });
    }
};
