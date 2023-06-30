import express from "express";


const app = express();



app.get("/", (req, res) => {
    res.send("Hello world!");
});


app.listen(4000, () => {
    console.log("serving is running at 8000");
});








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