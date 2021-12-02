const db=require('../db')
class DiseaseTypeController{
 async createDiseaseType(req,res){
  const{id,description}=req.body
  console.log(id,description)
  const newDiseaseType=await db.query(`INSERT INTO DiseaseType VALUES($1, $2) RETURNING *`, [id,description ])
  res.json(newDiseaseType.rows[0])
 }
 async getDiseaseType(req,res){
  const diseasesType=await db.query(`SELECT * FROM DiseaseType`)
  res.json(diseasesType.rows)
 }
 async getOneDiseaseType(req,res){
  const id=req.params.id
  const codes=await db.query(`SELECT * FROM DiseaseType WHERE id=$1`, [id])
  res.json(codes.rows[0])
 }
 async updateDiseaseType(req,res){
  const{id,description}=req.body
  const diseaseType=await db.query(`UPDATE DiseaseType SET description=$2  WHERE id=$1
  RETURNING *`, [id,description ])
  res.json(diseaseType.rows[0])
 }
 async deleteDiseaseType(req,res){
  const id=req.params.id
  const codes=await db.query(`DELETE FROM DiseaseType WHERE id=$1`, [id])
  res.json(codes.rows[0])
 }
}

module.exports=new DiseaseTypeController()