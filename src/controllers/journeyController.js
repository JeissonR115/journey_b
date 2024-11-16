import { db } from "../../app";

// Agregar un nuevo trayecto
export const addJourney = async (req, res) => {
    try {
        const { id_user, id_source, id_target, service_date, service_hour, id_center_cost, id_status, cancellation_motive } = req.body;

        const query = `INSERT INTO tbl_collection_accounts_journey_request 
                    (request_date, id_user, id_source, id_target, service_date, service_hour, id_center_cost, id_status, cancellation_motive)
                    VALUES (NOW(), ?, ?, ?, ?, ?, ?, ?, ?)`;

        const [result] = await db.execute(query, [id_user, id_source, id_target, service_date, service_hour, id_center_cost, id_status, cancellation_motive]);

        res.status(201).json({
            message: 'Trayecto creado con éxito',
            journeyRequestId: result.insertId,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el trayecto' });
    }
};

// Asignar un vehículo a un trayecto
export const assignVehicle = async (req, res) => {
    try {
        const { id_journey_request, id_vehicle, id_provider, id_driver } = req.body;

        const query = `INSERT INTO tbl_collection_accounts_confirm_request 
                    (id_journey_request, id_vehicle, id_provider, id_driver, confirmacion_date)
                    VALUES (?, ?, ?, ?, NOW())`;

        const [result] = await db.execute(query, [id_journey_request, id_vehicle, id_provider, id_driver]);

        res.status(201).json({
            message: 'Vehículo asignado al trayecto',
            confirmRequestId: result.insertId,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al asignar el vehículo' });
    }
};

// Confirmar un vehículo (por proveedor o conductor)
export const confirmVehicle = async (req, res) => {
    try {
        const { id_confirm_request } = req.body;

        const query = `UPDATE tbl_collection_accounts_confirm_request 
                    SET confirmacion_date = NOW() 
                    WHERE id_confirm_request = ?`;

        const [result] = await db.execute(query, [id_confirm_request]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Solicitud de confirmación no encontrada' });
        }

        res.status(200).json({ message: 'Vehículo confirmado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al confirmar el vehículo' });
    }
};

// Editar asignación de vehículo
export const editAssignment = async (req, res) => {
    try {
        const { id_journey_request, new_id_vehicle, new_id_provider, new_id_driver } = req.body;

        const query = `UPDATE tbl_collection_accounts_confirm_request 
                    SET id_vehicle = ?, id_provider = ?, id_driver = ?, confirmacion_date = NOW()
                    WHERE id_journey_request = ?`;

        const [result] = await db.execute(query, [new_id_vehicle, new_id_provider, new_id_driver, id_journey_request]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Trayecto no encontrado' });
        }

        res.status(200).json({ message: 'Asignación de vehículo editada correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al editar la asignación' });
    }
};

// Anular un trayecto
export const cancelJourney = async (req, res) => {
    try {
        const { id_journey_request, cancellation_motive } = req.body;

        const query = `UPDATE tbl_collection_accounts_journey_request 
                    SET id_status = (SELECT id_status_process FROM tbl_collection_accounts_status_process WHERE description = 'Anulado'),
                        cancellation_motive = ?
                    WHERE id_journey_request = ?`;

        const [result] = await db.execute(query, [cancellation_motive, id_journey_request]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Trayecto no encontrado' });
        }

        res.status(200).json({ message: 'Trayecto anulado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al anular el trayecto' });
    }
};

// Obtener todos los trayectos aprobados
export const getApprovedJourneys = async (req, res) => {
    try {
        const query = `SELECT * 
                    FROM tbl_collection_accounts_journey_request 
                    WHERE id_status = (SELECT id_status_process FROM tbl_collection_accounts_status_process WHERE description = 'Aprobado')`;

        const [journeys] = await db.execute(query);

        res.status(200).json(journeys);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los trayectos aprobados' });
    }
};

// Obtener todos los trayectos no aprobados
export const getPendingJourneys = async (req, res) => {
    try {
        const query = `SELECT * 
                    FROM tbl_collection_accounts_journey_request 
                    WHERE id_status != (SELECT id_status_process FROM tbl_collection_accounts_status_process WHERE description = 'Aprobado')`;

        const [journeys] = await db.execute(query);

        res.status(200).json(journeys);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los trayectos no aprobados' });
    }
};
