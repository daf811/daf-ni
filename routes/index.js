var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;

 // traitement du formulaire 
/*router.post('/uploaddufichier',upload.array('monfichier'), function (req, res, next) {
    req.files.forEach(function(file){

      if (file.size < (3*1024*1024) && file.mimetype == 'image/png') {
        console.log(file);
        
        fs.rename(file.path, 'public/images/' + file.originalname)
      }
      else {
        res.send('problème durant le déplacement'); 
      }
     });
     res.send("bob"); 
});*/

//router.get('/session-in ', (req, res) => {
    // Initialisation de la variable de sessions "maVariable" avec TRUE
    //req.session.maVariable = true; 
// });

//router.get('/session-out', (req, res) => {
    // Initialisation de la variable de sessions "maVariable" avec TRUE
    //req.session.maVariable = true; 
 //});
// Création de la méthode de transport de l'email 
// var smtpTransport = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//      user: 	bc905091ebaa28
//      Password:ad8382c2bd9cb4
//     }
// });

// router.get('/askForCookiesRecipe', function (req, res, next) {

// ({
//     from: "Jean Marc<jm@yopmail.com>", // Expediteur
//     to: "supergrandma@yopmail.com", // Destinataires
//     subject: "Coucou !", // Sujet
//     text: "Coucou grandma, ça fait lontemps! J'aimerais bien avoir ta recette de cookie.C'est vrai que je prends peu de tes nouvelles en ce moment mais je t'aime. des bisous " // plaintext body
//     html: "<b>Coucou grandma, ça fait lontemps! J'aimerais bien avoir ta recette de cookie.C'est vrai que je prends peu de tes nouvelles en ce moment mais je t'aime. des bisous</b>" // html body
// }, (error, response) => {
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Message sent: " + response.message);
//     }
// });


// Création de la méthode de transport de l'email 


