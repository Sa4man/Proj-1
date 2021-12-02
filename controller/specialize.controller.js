const db=require('../db')
class SpecializeController{
 async createSpecialize(req,res){
  const{id,email}=req.body
  console.log(id,email)
  const newSpecialize=await db.query(`INSERT INTO Specialize VALUES($1, $2) RETURNING *`, [id,email])
  res.json(newSpecialize.rows[0])
 }
 async getSpecialize(req,res){
  const Specialize=await db.query(`SELECT * FROM Specialize`)
  res.json(Specialize.rows)
 }
 async getOneSpecialize(req,res){
  const id=req.params.id
  const email=req.params.email
  const codes=await db.query(`SELECT * FROM Specialize WHERE id=$1 AND email=$2`, [id,email])
  res.json(codes.rows[0])
 }
 async updateSpecialize(req,res){
  const{id,email}=req.body
  const Specialize=await db.query(`UPDATE Specialize SET id=$1  WHERE email=$2  
  RETURNING *`, [id,email])
  res.json(Specialize.rows[0])
 }
 async deleteSpecialize(req,res){
  const id=req.params.id
  const email=req.params.email
  const codes=await db.query(`DELETE FROM Specialize WHERE id=$1 AND email=$2 `, [id,email])
  res.json(codes.rows[0])
 }
}

module.exports=new SpecializeController()