const db=require('../db')
class UsersController{
 async createUsers(req,res){
  const{email,name,surname,salary,phone,cname}=req.body
  console.log(email,name,surname,salary,phone,cname)
  const newUsers=await db.query(`INSERT INTO Users VALUES($1, $2, $3, $4, $5, $6) RETURNING *`, [email,name,surname,salary,phone,cname ])
  res.json(newUsers.rows[0])
 }
 async getUsers(req,res){
  const Users=await db.query(`SELECT * FROM Users`)
  res.json(Users.rows)
 }
 async getOneUsers(req,res){
  const email=req.params.email
  const codes=await db.query(`SELECT * FROM Users WHERE email=$1`, [email])
  res.json(codes.rows[0])
 }
 async updateUsers(req,res){
  const{email,name,surname,salary,phone,cname}=req.body
  const Users=await db.query(`UPDATE Users SET name=$2, surname=$3, salary=$4, phone=$5, cname=$6  WHERE email=$1  
  RETURNING *`, [email,name,surname,salary,phone,cname])
  res.json(Users.rows[0])
 }
 async deleteUsers(req,res){
  const email=req.params.email
  const codes=await db.query(`DELETE FROM Users WHERE email=$1  `, [email])
  res.json(codes.rows[0])
 }
}

module.exports=new UsersController()