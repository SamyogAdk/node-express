var fs = require('fs');


var process1 = ()=>{
    fs.open('myfile.txt',"w", (err)=>{
        if (err) throw err;
      });
}
var process2 = (file_text)=>{
    fs.writeFile("myfile.txt",file_text,(err)=>{
        if(err) throw err;
    })
}
var file_text = "Hello there, developers!";
process1();
process2(file_text);