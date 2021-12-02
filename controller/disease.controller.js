const db=require('../db')
class DiseaseController{
 async createDisease(req,res){
  const{disease_code,pathogen, description,id}=req.body
  console.log(disease_code,pathogen, description,id)
  const newDisease=await db.query(`INSERT INTO Disease VALUES($1, $2, $3, $4) RETURNING *`, [disease_code,pathogen,description,id ])
  res.json(newDisease.rows[0])
 }
 async getDisease(req,res){
  const diseases=await db.query(`SELECT * FROM Disease`)
  res.json(diseases.rows)
 }
 async getOneDisease(req,res){
  const disease_code=req.params.disease_code
  const codes=await db.query(`SELECT * FROM Disease WHERE disease_code=$1`, [disease_code])
  res.json(codes.rows[0])
 }
 async updateDisease(req,res){
  const{disease_code,pathogen, description,id}=req.body
  const disease=await db.query(`UPDATE Disease SET id=$4, pathogen=$2, description=$3 WHERE disease_code=$1
  RETURNING *`, [disease_code,pathogen,description,id ])
  res.json(disease.rows[0])
 }
 async deleteDisease(req,res){
  const disease_code=req.params.disease_code
  const codes=await db.query(`DELETE FROM Disease WHERE disease_code=$1`, [disease_code])
  res.json(codes.rows[0])
 }
}

module.exports=new DiseaseController()