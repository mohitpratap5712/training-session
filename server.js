const express = require("express");
const StudentController = require("./Controller/StudentController");
// import StudentController from "./Controller/student.js";

const app = express();

app.use(express.json())

const PORT = 3000

app.get("/", (req,res)=>{
    res.send("server is running")
})


app.get("/student", StudentController.readall )
app.get("/student/:id", StudentController.readone )
app.post("/student/:id",StudentController.create)
app.put("/student/:id", StudentController.update )
app.delete("/student/:id", StudentController.destroy )

app.listen(PORT, ()=>{
    console.log("server is runnig")
})