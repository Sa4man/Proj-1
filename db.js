const Pool = require ('pg').Pool
const pool=new Pool({
 user:"postgres",
 password:'14.11.2001de',
 host:"localhost",
 port:5432,
 database:"Test"
})

module.exports=pool