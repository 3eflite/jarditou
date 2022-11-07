let formulaire = document.getElementById('formulaire');


formulaire.addEventListener('change', function() {
    validNom(this);
});

const validNom = function(inputNom) {
    let nomRgx = new RegExp('^[A-Za-z]+$');

    let testNom = nomRgx.test(inputNom.value);
}


formulaire.addEventListener('change', function() {
    validPrenom(this);
});

const validPrenom = function(inputPrenom) {
    let prenomRgx = new RegExp('^[A-Za-z]+$');

    let testPrenom = prenomRgx.test(inputPrenom.value)
}

formulaire.adresse.addEventListener('change', function() {
    validAdresse(this);
});

const validAdresse = function(inputAdresse) {
    let adresseRgx = new RegExp('^[a-zA-Z0-9.-_]$');

    let testAdresse = adresseRgx.test(inputAdresse.value);
    
}

formulaire.ville.addEventListener('change', function() {
    validVille(this);
});

const validVille = function(inputVille){
    let villeRgx = new RegExp ('^[A-Za-z]+$');

    let testVille = villeRgx.test(inputVille.value);
}

formulaire.email.addEventListener('change', function() {
    validEmail(this);
});

const validEmail = function (inputEmail) {
    let emailRgx = new RegExp ('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');

    let testEmail = emailRgx.test(inputEmail.value);
    
}

formulaire.question.addEventListener('change', function() {
    validQuestion(this);
});

const validQuestion = function(textareaQuestion) {
    let questionRegex = new RegExp('^[a-zA-Z0-9.-_]$');

    let testQuestion = questionRegex.test(textareaQuestion.value);
}
document.getElementById("envoie").addEventListener("click", function(e) {
    e.preventDefault();
})