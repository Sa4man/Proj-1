const db=require('../db')
class RecordController{
 async createRecord(req,res){
  const{email,cname,disease_code,total_deaths,total_patients}=req.body
  console.log(email,cname,disease_code,total_deaths,total_patients)
  const newRecord=await db.query(`INSERT INTO Record VALUES($1, $2, $3, $4, $5) RETURNING *`, [email,cname,disease_code,total_deaths,total_patients])
  res.json(newRecord.rows[0])
 }
 async getRecord(req,res){
  const Record=await db.query(`SELECT * FROM Record`)
  res.json(Record.rows)
 }
 async getOneRecord(req,res){
  const email=req.params.email
  const cname=req.params.cname
  const disease_code=req.params.disease_code
  const codes=await db.query(`SELECT * FROM Record WHERE email=$1 AND cname=$2 AND disease_code=$3`, [email,cname,disease_code])
  res.json(codes.rows[0])
 }
 async updateRecord(req,res){
  const{email,cname,disease_code,total_deaths,total_patients}=req.body
  const Record=await db.query(`UPDATE Record SET total_deaths=$4, total_patients=$5  WHERE email=$1 AND cname=$2 AND disease_code=$3  
  RETURNING *`, [email,cname,disease_code,total_deaths,total_patients])
  res.json(Record.rows[0])
 }
 async deleteRecord(req,res){
  const email=req.params.email
  const cname=req.params.cname
  const disease_code=req.params.disease_code
  const codes=await db.query(`DELETE FROM Record WHERE email=$1 AND cname=$2 AND disease_code=$3`, [email,cname,disease_code])
  res.json(codes.rows[0])
 }
}

module.exports=new RecordController()