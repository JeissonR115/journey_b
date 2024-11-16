import { DataTypes } from 'sequelize';
import { db } from '../../app';
const DT = DataTypes.INTEGER
const Driver = db.define('Driver', {
    id_driver: {
        type: DT.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    first_name: {
        type: DT.STRING,
        allowNull: false,
    },
    last_name: {
        type: DT.STRING,
        allowNull: false,
    },
    id_provider: {
        type: DT.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'tbl_collection_accounts_drivers',
    timestamps: false, // Si no usas campos de timestamp como createdAt o updatedAt
});

export default Driver;
