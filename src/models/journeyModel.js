import { db } from "../../app.js";

// Modelo Journey
export class Journey {
    static async getAllJourneys() {
        const query = 'SELECT * FROM tbl_colection_accounts_journey_request';
        const journeys = await db.query(query);
        console.log(journeys)
        return journeys;
    }

    static async getJourneyById(id_journey) {
        const query = 'SELECT * FROM tbl_journey WHERE id_journey = ?';
        const [journey] = await db.query(query, [id_journey]);
        return journey.length > 0 ? journey[0] : null;
    }

    static async createJourney(driver_id, vehicle_id, start_time, end_time) {
        const query = 'INSERT INTO tbl_journey (driver_id, vehicle_id, start_time, end_time) VALUES (?, ?, ?, ?)';
        const [result] = await db.query(query, [driver_id, vehicle_id, start_time, end_time]);
        return result.insertId;
    }

    static async updateJourney(id_journey, driver_id, vehicle_id, start_time, end_time) {
        const query = 'UPDATE tbl_journey SET driver_id = ?, vehicle_id = ?, start_time = ?, end_time = ? WHERE id_journey = ?';
        const [result] = await db.query(query, [driver_id, vehicle_id, start_time, end_time, id_journey]);
        return result.affectedRows;
    }

    static async deleteJourney(id_journey) {
        const query = 'DELETE FROM tbl_journey WHERE id_journey = ?';
        const [result] = await db.query(query, [id_journey]);
        return result.affectedRows;
    }
}
