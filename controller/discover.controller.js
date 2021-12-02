const db=require('../db')
class DiscoverController{
 async createDiscover(req,res){
  const{cname,disease_code,first_enc_date}=req.body
  console.log(cname,disease_code,first_enc_date)
  const newDiscover=await db.query(`INSERT INTO Discover VALUES($1, $2, $3) RETURNING *`, [cname,disease_code,first_enc_date ])
  res.json(newDiscover.rows[0])
 }
 async getDiscover(req,res){
  const Discover=await db.query(`SELECT * FROM Discover`)
  res.json(Discover.rows)
 }
 async getOneDiscover(req,res){
  const cname=req.params.cname
  const disease_code=req.params.disease_code
  const codes=await db.query(`SELECT * FROM Discover WHERE cname=$1 AND disease_code=$2`, [cname,disease_code])
  res.json(codes.rows[0])
 }
 async updateDiscover(req,res){
  const{cname,disease_code,first_enc_date}=req.body
  const Discover=await db.query(`UPDATE Discover SET first_enc_date=$3  WHERE cname=$1 AND disease_code=$2 
  RETURNING *`, [cname,disease_code,first_enc_date ])
  res.json(Discover.rows[0])
 }
 async deleteDiscover(req,res){
  const cname=req.params.cname
  const disease_code=req.params.disease_code
  const codes=await db.query(`DELETE FROM Discover WHERE cname=$1 AND disease_code=$2 `, [cname,disease_code])
  res.json(codes.rows[0])
 }
}

module.exports=new DiscoverController()