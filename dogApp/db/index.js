const pgp = require('pg-promise')();
const connection = pgp('postgresql://postgres:YZCutEvr6B0w2h3N@db.yupmguqamsjrpcllffot.supabase.co:5432/postgres');
 module.exports = connection;