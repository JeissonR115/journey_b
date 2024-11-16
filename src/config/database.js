import mariadb from "mariadb";


const connection = ({ host, user, password, database }) => mariadb.createPool({
    host,
    user,
    password,
    database,
    connectionLimit: 5,
});


export const connect = async ({ host, user, password, database }) => {
    const dbPool = connection({ host, user, password, database });
    try {
        await dbPool.getConnection();
        console.log("Database connection established successfully.");
        return dbPool;
    } catch (error) {
        console.log("Error connecting to the database:", error.message);
        throw error;
    }
};

