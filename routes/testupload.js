var express = require('express');
var router = express.Router();
const multer  = require('multer');
const upload = multer({ dest: 'tmp/' });
const fs = require('fs'); 


	router.get('/', function(req, res, next) {
	  res.render('index', { title: 'Express' });
});

 // traitement du formulaire 
app.post('/uploaddufichier',upload.array('monfichier'), function (req, res, next) {
  	req.files.forEach(function(file){

  		if (file.size < (3*1024*1024) && (file.mimetype == 'image/png') {
  			console.log(file);
  			
  			fs.rename(file.path, 'public/images/' + file.originalname)
  		}
  		else (err) {
  			res.send('problème durant le déplacement'); 
  		}
     });
     res.send("bob"); 
});