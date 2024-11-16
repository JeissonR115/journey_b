import { db } from "../../app.js";

export class Provider {
    static async getAllProviders() {
        const query = 'SELECT * FROM tbl_collection_accounts_providers';
        const [providers] = await db.query(query);
        return providers;
    }

    static async getProviderById(id_provider) {
        const query = 'SELECT * FROM tbl_collection_accounts_providers WHERE id_provider = ?';
        const [provider] = await db.query(query, [id_provider]);
        return provider.length > 0 ? provider[0] : null;
    }

    static async createProvider(id_type_provider, description) {
        const query = 'INSERT INTO tbl_collection_accounts_providers (id_type_provider, description) VALUES (?, ?)';
        const [result] = await db.query(query, [id_type_provider, description]);
        return result.insertId;
    }

    static async updateProvider(id_provider, id_type_provider, description) {
        const query = 'UPDATE tbl_collection_accounts_providers SET id_type_provider = ?, description = ? WHERE id_provider = ?';
        const [result] = await db.query(query, [id_type_provider, description, id_provider]);
        return result.affectedRows;
    }

    static async deleteProvider(id_provider) {
        const query = 'DELETE FROM tbl_collection_accounts_providers WHERE id_provider = ?';
        const [result] = await db.query(query, [id_provider]);
        return result.affectedRows;
    }
}
