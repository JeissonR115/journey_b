import { db } from "../../app.js";

// Modelo Vehicle
export class Vehicle {
    static async getAllVehicles() {
        const query = 'SELECT * FROM tbl_collection_accounts_vehicles';
        const [vehicles] = await db.query(query);
        return vehicles;
    }

    static async getVehicleById(id_vehicle) {
        const query = 'SELECT * FROM tbl_collection_accounts_vehicles WHERE id_vehicles = ?';
        const [vehicle] = await db.query(query, [id_vehicle]);
        return vehicle.length > 0 ? vehicle[0] : null;
    }

    static async createVehicle(plate, id_type_vehicle, id_provider) {
        const query = 'INSERT INTO tbl_collection_accounts_vehicles (plate, id_type_vehicle, id_provider) VALUES (?, ?, ?)';
        const [result] = await db.query(query, [plate, id_type_vehicle, id_provider]);
        return result.insertId;
    }

    static async updateVehicle(id_vehicle, plate, id_type_vehicle, id_provider) {
        const query = 'UPDATE tbl_collection_accounts_vehicles SET plate = ?, id_type_vehicle = ?, id_provider = ? WHERE id_vehicles = ?';
        const [result] = await db.query(query, [plate, id_type_vehicle, id_provider, id_vehicle]);
        return result.affectedRows;
    }

    static async deleteVehicle(id_vehicle) {
        const query = 'DELETE FROM tbl_collection_accounts_vehicles WHERE id_vehicles = ?';
        const [result] = await db.query(query, [id_vehicle]);
        return result.affectedRows;
    }
}


