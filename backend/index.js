import express from "express";

const app = express();
const port = 3000;
app.use(express.json());



app.listen(port, (req, res) => {
  console.log(`Server is listeneing at PORT : ${port}`);
});

app.post("/", function(req,res){
    res.send("todo application");
})


app.get("/todos", function(req,res){
    
})

app.put("/completed", function(req,res){

})