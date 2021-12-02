const express =require ('express')
var cors = require('cors');
const bodyParser = require("body-parser");
var router=express.Router()
const allowedOrigins = ["http://localhost:3000", "http://localhost:8080", "http://127.0.0.1:5500"]
const path = require('path');
const diseaseRouter=require('./routes/disease.routes')
const diseaseTypeRouter=require('./routes/diseasetype.routes')
const countryRouter=require('./routes/country.routes')
const discoverRouter=require('./routes/discover.routes')
const usersRouter=require('./routes/users.routes')
const publicServantRouter=require('./routes/publicservant.routes')
const doctorRouter=require('./routes/doctor.routes')
const specializeRouter=require('./routes/specialize.routes')
const recordRouter=require('./routes/record.routes')
const PORT = process.env.PORT || 8080
const app=express()
//app.use(cors({origin: 'http://127.0.0.1:5500/'}));
app.use(
    cors({
        origin: function(origin, callback) {
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin) === -1) {
                var msg =
                    "The CORS policy for this site does not " +
                    "allow access from the specified Origin.";
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        }
    })
)


app.use(express.json())
app.use("/",router);

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../proj 1/index.html'));
});
app.use(express.json())
app.use("/",router);


// function httpGetAsync(theUrl, callback)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function() { 
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//             callback(xmlHttp.responseText);
//     }
//     xmlHttp.open("GET", theUrl, true); // true for asynchronous 
//     xmlHttp.send(null);
// }



app.use('/api', diseaseRouter)
app.use('/api', diseaseTypeRouter)
app.use('/api', countryRouter)
app.use('/api', discoverRouter)
app.use('/api', usersRouter)
app.use('/api', publicServantRouter)
app.use('/api', doctorRouter)
app.use('/api', specializeRouter)
app.use('/api', recordRouter)


app.listen(PORT, ()=>console.log(`server started on post ${PORT}`))
module.exports=router