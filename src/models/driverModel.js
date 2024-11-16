import { db } from "../../app.js";
// Modelo Driver
export class Driver {
    static async getAllDrivers() {
        const query = 'SELECT * FROM tbl_collection_accounts_drivers';
        const [drivers] = await db.query(query);
        return drivers;
    }

    static async getDriverById(id_driver) {
        const query = 'SELECT * FROM tbl_collection_accounts_drivers WHERE id_driver = ?';
        const [driver] = await db.query(query, [id_driver]);
        return driver.length > 0 ? driver[0] : null;
    }

    static async createDriver(first_name, last_name, id_provider) {
        const query = 'INSERT INTO tbl_collection_accounts_drivers (first_name, last_name, id_provider) VALUES (?, ?, ?)';
        const [result] = await db.query(query, [first_name, last_name, id_provider]);
        return result.insertId;
    }

    static async updateDriver(id_driver, first_name, last_name, id_provider) {
        const query = 'UPDATE tbl_collection_accounts_drivers SET first_name = ?, last_name = ?, id_provider = ? WHERE id_driver = ?';
        const [result] = await db.query(query, [first_name, last_name, id_provider, id_driver]);
        return result.affectedRows;
    }

    static async deleteDriver(id_driver) {
        const query = 'DELETE FROM tbl_collection_accounts_drivers WHERE id_driver = ?';
        const [result] = await db.query(query, [id_driver]);
        return result.affectedRows;
    }
}
