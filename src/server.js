const express= require('express');
const cors = require('cors');
const app=express();
const PORT=8080;



app.use(express.json())
app.use(cors({ origin: ["http://localhost:3000"] }));

app.listen(PORT,()=> 
    console.log('Server Connected')
)




app.get('/Verification', (req,res)=>{
    const otp= Math.floor(1000+Math.random()*9000);
    res.json({otp})
   
    
})  

module.exports=app;