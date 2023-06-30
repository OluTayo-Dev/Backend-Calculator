const express = require ("express");
const path = require("path");
const http =  require ("http");


const app = express();
const sever = http.createServer(app);



// app.get("/", (req, res) => {

//     res.send("Hello world!");
// });


const PORT = 4000;
sever.listen(PORT, () => console.log(`Server running on port ${PORT}`));




const result = []

app.use(express.static(path.join(__dirname, 'public')));



app.post("/add", (req, res) => {
    const {value1, value2} = req.body;
    const answer = value1 + value2;
    const message = `The sum  is ${answer}`
    result.push 
    res.send({message})
  });
  
  app.post("/multiply", (req, res) => {
    const {value1,value2} = req.body;
    const answer = value1 * value2;
    const message = ({message: `The multiplication of ${value1} and ${value2} is the ${answer}`});
    result.push({message})
    res.send({message})
  });
  
  app.post("/division", (req, res) =>{
    const {value1, value2} = req.body;
    const answer = value1/value2;
    const message= ({message: `The division of ${value1} and ${value2} is the ${answer}`});
    result.push({message})
    res.send({message})
  
  });
  
  app.post("/subtraction", (req, res) =>{
    const {value1, value2} = req.body;
    const answer = value1 - value2;
    const message = ({message: `The substraction of ${value1} and ${value2} is the ${answer}`});
    result.push({message})
    res.send({message})
  });
  
  // router.post("/total", (req, res) => {
  //   const {value1, value2} = req.body;
  //    const answer = value1 * value2 & value1 / value2 & value1 - value2 + value1 & value2;
  //    res.json({message: `The multiplication, division Substration and Sum of ${value1} and ${value2} is the ${answer}`})
    
  // })
  app.get("/get-All", (req, res) =>{
    res.send({result})
  });