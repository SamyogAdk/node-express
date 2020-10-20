const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const fs = require('fs');
const { json } = require('body-parser');
const { stringify } = require('querystring');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) =>
  res.render('index', {
    title: 'Employee Form',
  })
);

app.post('/',urlencodedParser,(req,res)=>{
console.log(req.body);
fs.writeFile('file.txt',JSON.stringify(req.body),(err)=>{
    if(err){
        console.log("An error occured");
    
    }
})
res.send(`<h3>Data written in file.txt</h3> ${JSON.stringify(req.body)}`);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server started successfully at${PORT}`);
})