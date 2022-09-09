const dbURL = 'Hlooo12:<iFqjh2c82X3:ZAF>@cluster0.rsv583l.mongodb.net/?retryWrites=true&w=majority'
var express = require('path');
var bodyParser = require('body-parser')
var app = express();
var mongoose = require('mongoose');
mongoose.connet('mongodb/:localhost/test');

var publicFolder = path.join(__dirname,'public');

app.use(express.static(publicFolder));
app.use(bodyParser.urlencoded({ extended: true}))

var user = mongoose.model('user',{name: String, age:Number, 
    phonenumber:Number,Emailaddress:Emailaddress});

app.get('',(req, res)=>{
    res.render(publicFolder + '/index.html');
})

app.post('/page1.html',(req, res) =>{
    var user = new user({name: req.body.username, age: req.body.age,
    phonenumber: req.body.phonenumber,Emailaddress:req.body.Emailaddress});

    user.save().then(newUser => {
        res.send("created new user");
    }).catch(err => {
        res.send("something wrong");
    })

})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});