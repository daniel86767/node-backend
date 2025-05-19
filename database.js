import  'dotenv/config';

export default {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_port,
    password: process.env.DB_USER,
    database: process.env.DB_PASS,
    port: process.env.DB_name,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    },
}