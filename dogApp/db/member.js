const db = require('./index')

const createMember = (email,password) => db.one('INSERT INTO "member" ("email","password") VALUES (${email},${password}) RETURNING "email"',{email,password});

const loginCheck= (email) => db.one('SELECT EXISTS(SELECT * FROM "member" WHERE "email"=${email})',{email});





module.exports ={

createMember,
loginCheck


    
};