const fs = require('fs');
const path = require('path');
// require("./modules/path");
// fs.mkdir(path.join(__dirname,"/test"),(error)=>{
//     if(error){
//       return  console(error)
//     }
//     console.log("pasta criada com sucesso");
// })
fs.writeFile(path.join(__dirname,"/test","test.txt"),"hello word",(error)=>{
    if(error){
        return  console(error)
    }
    console.log("texto criado com sucesso");
    fs.appendFile(path.join(__dirname,"/test","test.txt"),"hello asdsad",(error)=>{
        if(error){
            return  console(error)
        }
        console.log("texto alterado com sucesso");
        fs.readFile(path.join(__dirname,"/test","test.txt"),"utf8",(error,data)=>{
            if(error){
                return  console(error)
            }
            console.log(data);
        })
    })
    
})


