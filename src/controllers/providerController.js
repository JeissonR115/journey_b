import { Provider } from "../models/providerModel";

// Obtener todos los proveedores
export const getProviders = async (req, res) => {
    try {
        const providers = await Provider.getAllProviders();
        res.status(200).json(providers);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los proveedores', error });
    }
};

// Obtener un proveedor por su ID
export const getProviderById = async (req, res) => {
    const { id } = req.params;
    try {
        const provider = await Provider.getProviderById(id);
        if (!provider) {
            return res.status(404).json({ message: 'Proveedor no encontrado' });
        }
        res.status(200).json(provider);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el proveedor', error });
    }
};

// Crear un nuevo proveedor
export const createProvider = async (req, res) => {
    const { id_type_provider, description } = req.body;
    try {
        const newProviderId = await Provider.createProvider(id_type_provider, description);
        res.status(201).json({ message: 'Proveedor creado con éxito', id: newProviderId });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el proveedor', error });
    }
};

// Actualizar un proveedor
export const updateProvider = async (req, res) => {
    const { id } = req.params;
    const { id_type_provider, description } = req.body;
    try {
        const affectedRows = await Provider.updateProvider(id, id_type_provider, description);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Proveedor no encontrado o no modificado' });
        }
        res.status(200).json({ message: 'Proveedor actualizado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el proveedor', error });
    }
};

// Eliminar un proveedor
export const deleteProvider = async (req, res) => {
    const { id } = req.params;
    try {
        const affectedRows = await Provider.deleteProvider(id);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Proveedor no encontrado' });
        }
        res.status(200).json({ message: 'Proveedor eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el proveedor', error });
    }
};
