require('dotenv').config({ path: '.env.local' });
/** @type {import('drizzle-kit').Config} */
export const schema = './config/schema.jsx';
export const dialect = 'postgresql';
export const dbCredentials = {
    url: process.env.NEXT_PUBLIC_DB_CONNECTION_STRING
};
