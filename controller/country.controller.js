const db=require('../db')
class CountryController{
 async createCountry(req,res){
  const{cname,population}=req.body
  console.log(cname,population)
  const newCountry=await db.query(`INSERT INTO Country VALUES($1, $2) RETURNING *`, [cname,population ])
  res.json(newCountry.rows[0])
 }
 async getCountry(req,res){
  const Country=await db.query(`SELECT * FROM Country`)
  res.json(Country.rows)
 }
 async getOneCountry(req,res){
  const cname=req.params.cname
  const codes=await db.query(`SELECT * FROM Country WHERE cname=$1`, [cname])
  res.json(codes.rows[0])
 }
 async updateCountry(req,res){
  const{cname,population}=req.body
  const Country=await db.query(`UPDATE Country SET population=$2  WHERE cname=$1
  RETURNING *`, [cname,population ])
  res.json(Country.rows[0])
 }
 async deleteCountry(req,res){
  const cname=req.params.cname
  const codes=await db.query(`DELETE FROM Country WHERE cname=$1`, [cname])
  res.json(codes.rows[0])
 }
}

module.exports=new CountryController()