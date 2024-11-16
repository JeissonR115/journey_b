import { db } from "../../app";

// Obtener todos los proveedores
export const getAllProviders = async (req, res) => {
    try {
        const query = 'SELECT * FROM tbl_collection_accounts_providers';

        const [providers] = await db.execute(query);

        res.status(200).json(providers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los proveedores' });
    }
};

// Obtener proveedor por ID
export const getProviderById = async (req, res) => {
    try {
        const { id_provider } = req.params;

        const query = 'SELECT * FROM tbl_collection_accounts_providers WHERE id_provider = ?';

        const [provider] = await db.execute(query, [id_provider]);

        if (provider.length === 0) {
            return res.status(404).json({ message: 'Proveedor no encontrado' });
        }

        res.status(200).json(provider[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el proveedor' });
    }
};

// Agregar un nuevo proveedor
export const addProvider = async (req, res) => {
    try {
        const { id_type_provider, description } = req.body;

        const query = 'INSERT INTO tbl_collection_accounts_providers (id_type_provider, description) VALUES (?, ?)';

        const [result] = await db.execute(query, [id_type_provider, description]);

        res.status(201).json({
            message: 'Proveedor creado con éxito',
            providerId: result.insertId,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el proveedor' });
    }
};

// Editar proveedor
export const editProvider = async (req, res) => {
    try {
        const { id_provider } = req.params;
        const { id_type_provider, description } = req.body;

        const query = 'UPDATE tbl_collection_accounts_providers SET id_type_provider = ?, description = ? WHERE id_provider = ?';

        const [result] = await db.execute(query, [id_type_provider, description, id_provider]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Proveedor no encontrado' });
        }

        res.status(200).json({ message: 'Proveedor actualizado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al editar el proveedor' });
    }
};

// Eliminar proveedor
export const deleteProvider = async (req, res) => {
    try {
        const { id_provider } = req.params;

        const query = 'DELETE FROM tbl_collection_accounts_providers WHERE id_provider = ?';

        const [result] = await db.execute(query, [id_provider]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Proveedor no encontrado' });
        }

        res.status(200).json({ message: 'Proveedor eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el proveedor' });
    }
};
