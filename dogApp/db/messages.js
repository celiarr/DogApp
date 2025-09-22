const db = require('./index')

const createMember = (userId,email,password) => db.one('INSERT INTO "member" ("userId","email","password") VALUES (${userId},${email},${password}) RETURNING "emailId"',{userId,email,password});

const loginCheck= (email,password) => db.one('SELECT EXISTS(SELECT * FROM "member" WHERE "email"=${email} and "password"=${password})',{email,password});





module.exports ={

createMember,
loginCheck


    
};