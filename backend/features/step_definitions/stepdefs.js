const assert = require('assert');
const { Given, When, Then } = require('cucumber');

//------------------------- Para el Domingo o Viernes -------------------------

function isItFriday(today) {
    if (today === "Friday") {
        return "TGIF";
    } else {
        return "Nope";
    }
}

Given('today is Sunday', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'Nope';
  });

Given('today is Friday', function () {
    this.today = 'Friday';
});

When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer);
});

//------------------------- Para el Domingo o Viernes -------------------------

//------------------------- Para el Registro de usuario -------------------------
function registroExitoso(retorno) {
    if (retorno === "Registrado") {
        return "Satisfactorio";
    } else {
        return "No Satisfactorio";
    }
}

Given('El invitado esta en el formulario de registro', function () {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    this.retorno = "Registrado"
  });

When('Hace clic en el boton guardar', function () {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    this.estadoActualRegistro = registroExitoso(this.retorno);
});

Then('El usuario obtiene el mensaje {string}', function (retornoEsperado) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(this.estadoActualRegistro, retornoEsperado);
  });

  //------------------------- Para el Registro de usuario -------------------------