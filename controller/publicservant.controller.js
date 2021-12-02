const db=require('../db')
class PublicServantController{
 async createPublicServant(req,res){
  const{email,department}=req.body
  console.log(email,department)
  const newPublicServant=await db.query(`INSERT INTO PublicServant VALUES($1, $2) RETURNING *`, [email,department])
  res.json(newPublicServant.rows[0])
 }
 async getPublicServant(req,res){
  const PublicServant=await db.query(`SELECT * FROM PublicServant`)
  res.json(PublicServant.rows)
 }
 async getOnePublicServant(req,res){
  const email=req.params.email
  const codes=await db.query(`SELECT * FROM PublicServant WHERE email=$1`, [email])
  res.json(codes.rows[0])
 }
 async updatePublicServant(req,res){
  const{email,department}=req.body
  const PublicServant=await db.query(`UPDATE PublicServant SET department=$2  WHERE email=$1  
  RETURNING *`, [email,department])
  res.json(PublicServant.rows[0])
 }
 async deletePublicServant(req,res){
  const email=req.params.email
  const codes=await db.query(`DELETE FROM PublicServant WHERE email=$1  `, [email])
  res.json(codes.rows[0])
 }
}

module.exports=new PublicServantController()