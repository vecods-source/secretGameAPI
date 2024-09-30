import express from 'express';
import axios from "axios";
import bodyParser from 'body-parser';

const app = express();
const portNum = 3005;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

app.get("/",async (req,res)=>{
    try{
        const response = await axios.get("https://secrets-api.appbrewery.com/random");
        let result = response.data;
        res.render("index.ejs",{
            secret: result.secret,
            user: result.username
        });
        console.log(result);
    }catch(error){
        console.log("no response from the server: ",error.response.data)
    }

})


app.listen(portNum,()=>{console.log("runnning on "+portNum);});
