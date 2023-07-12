const express = require("express");
const UserModel = require("../src/models/user.model");
const app = express();

app.use(express.urlencoded({ extended: false  }));
app.use(express.json());
app.set('view engine','ejs');
app.set('views','src/views');

app.use((req,res,next)=>{
    console.log("request Type" + req.method)
    console.log("content Type" + req.headers['content-type'])
    next();
})

app.get("/views/users",async(req,res)=>{
    const users = await UserModel.find({});
    res.render("index",{users});
});

app.get('/users',async(req,res)=>{
    try {
        const users = await UserModel.find({});
        res.status(200).json(users);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

app.get('/users/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});
app.patch('/users/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id,req.body,{new:true});
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

app.delete('/users/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndRemove(id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

app.post("/users",async (req,res)=>{
    try {
        const user = await UserModel.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


const port = 8080;
app.listen(port,()=>console.log(port));