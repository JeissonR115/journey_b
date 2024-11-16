import { db } from "../../app.js";

export class Journey {
    static async getAllJourneys() {
        const query = 'SELECT * FROM tbl_collection_accounts_journey_request';
        const journeys = await db.query(query);
        return journeys;
    }

    static async getJourneyById(id_journey_request) {
        const query = 'SELECT * FROM tbl_collection_accounts_journey_request WHERE id_journey_request = ?';
        const journey = await db.query(query, [id_journey_request]);
        return journey.length > 0 ? journey[0] : null;
    }

    static async createJourney(request_date, id_user, id_source, id_target, service_date, service_hour, id_center_cost, id_status, cancellation_motive) {
        const query = 'INSERT INTO tbl_collection_accounts_journey_request (request_date, id_user, id_source, id_target, service_date, service_hour, id_center_cost, id_status, cancellation_motive) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const result = await db.query(query, [request_date, id_user, id_source, id_target, service_date, service_hour, id_center_cost, id_status, cancellation_motive]);
        return result.insertId;
    }

    static async updateJourney(id_journey_request, request_date, id_user, id_source, id_target, service_date, service_hour, id_center_cost, id_status, cancellation_motive) {
        const query = 'UPDATE tbl_collection_accounts_journey_request SET request_date = ?, id_user = ?, id_source = ?, id_target = ?, service_date = ?, service_hour = ?, id_center_cost = ?, id_status = ?, cancellation_motive = ? WHERE id_journey_request = ?';
        const result = await db.query(query, [request_date, id_user, id_source, id_target, service_date, service_hour, id_center_cost, id_status, cancellation_motive, id_journey_request]);
        return result.affectedRows;
    }

    static async deleteJourney(id_journey_request) {
        const query = 'DELETE FROM tbl_collection_accounts_journey_request WHERE id_journey_request = ?';
        const result = await db.query(query, [id_journey_request]);
        return result.affectedRows;
    }
}
