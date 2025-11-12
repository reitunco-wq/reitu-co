const mysql = require('mysql2');

const config = {
    development: {
        host: 'localhost',
        user: 'root', 
        password: '#reIT07*',
        database: 'retu_co'
    },
    production: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
};

const environment = process.env.NODE_ENV || 'development';
const dbConfig = config[environment];

const db = mysql.createConnection(dbConfig);

// Handle database connection
db.connect((err) => {
    if (err) {
        console.log('❌ Database connection error:', err);
        // Don't exit in production, just log
        if (environment === 'development') {
            process.exit(1);
        }
    } else {
        console.log(`✅ Connected to ${environment} database`);
    }
});

module.exports = db;