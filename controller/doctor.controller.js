const db=require('../db')
class DoctorController{
 async createDoctor(req,res){
  const{email,degree}=req.body
  console.log(email,degree)
  const newDoctor=await db.query(`INSERT INTO Doctor VALUES($1, $2) RETURNING *`, [email,degree])
  res.json(newDoctor.rows[0])
 }
 async getDoctor(req,res){
  const Doctor=await db.query(`SELECT * FROM Doctor`)
  res.json(Doctor.rows)
 }
 async getOneDoctor(req,res){
  const email=req.params.email
  const codes=await db.query(`SELECT * FROM Doctor WHERE email=$1`, [email])
  res.json(codes.rows[0])
 }
 async updateDoctor(req,res){
  const{email,degree}=req.body
  const Doctor=await db.query(`UPDATE Doctor SET degree=$2  WHERE email=$1  
  RETURNING *`, [email,degree])
  res.json(Doctor.rows[0])
 }
 async deleteDoctor(req,res){
  const email=req.params.email
  const codes=await db.query(`DELETE FROM Doctor WHERE email=$1  `, [email])
  res.json(codes.rows[0])
 }
}

module.exports=new DoctorController()