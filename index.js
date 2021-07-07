//-------------------------- declare library that i will use --------------------//
const express =require ("express");
const app =express();
require("dotenv").config();
const router =express.Router();
const fetch =require("node-fetch");
//-------------------------- Start ROUTING --------------------//
router.get("/",(req,res)=>{
    res.json({msg:"home"})
})
router.post("/api/searchwithname/:name",(req,res)=>{
const name =req.params.name;
const URL =` https://restcountries.eu/rest/v2/name/${name}`;
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
        console.log(data[0].name)
        res.json(data)
    })
});
//--------------- search with calling code -------------- //
router.post("/api/search_with_calling_code/:code",(req,res)=>{
    const code =req.params.code;
    const URL =` https://restcountries.eu/rest/v2/callingcode/${code}`;
        fetch(URL)
        .then(res=>res.json())
        .then(data=>{
            console.log(data[0].name)
            res.json(data)
        })
});
//---------------  Search by region africa ,etc -------------- //
router.post("/api/search_with_region/:region",(req,res)=>{
    const region =req.params.region;
    const URL =` https://restcountries.eu/rest/v2/region/${region}`;
        fetch(URL)
        .then(res=>res.json())
        .then(data=>{
// -------------------- THIS use to get a specific  country in the region ---------------------//
            for(var i in data){
                if(data[i].name ==="Egypt")
                {
                    console.log(data[i])
                }
            }
            
//----------------------- All Country in the Region -------------------------------//
            res.json(data)
        })
});

app.use(router);
app.listen(process.env.PORT,()=>console.log(`server run On ${process.env.PORT}`));
