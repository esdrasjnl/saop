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

Given('today is Sunday', function() {
    // Write code here that turns the phrase above into concrete actions
    return 'Nope';
});

Given('today is Friday', function() {
    this.today = 'Friday';
});

When('I ask whether it\'s Friday yet', function() {
    this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function(expectedAnswer) {
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

Given('El invitado esta en el formulario de registro', function() {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    this.retorno = "Registrado"
});

When('Hace clic en el boton guardar', function() {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    this.estadoActualRegistro = registroExitoso(this.retorno);
});

Then('El usuario obtiene el mensaje {string}', function(retornoEsperado) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(this.estadoActualRegistro, retornoEsperado);
});

//------------------------- Para el Registro de usuario -------------------------

//------------------------- Para la visualizacoin de curso -------------------------
function visualizacionDeCurso(retornovc) {
    if (retornovc === "Visualizado") {
        return "Satisfactorio";
    } else {
        return "No Satisfactorio";
    }
}

Given('El usuario selecciona el curso deseado', function() {
    // Write code here that turns the phrase above into concrete actions
    this.retorno = "Visualizado";
});

When('Hace clic en el boton desplegar', function() {
    // Write code here that turns the phrase above into concrete actions
    this.estadoVC = visualizacionDeCurso(this.retorno);
});

Then('El usuario obtiene la descripcion del curso {string}', function(retornoEsperado) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(this.estadoVC, retornoEsperado);
});

//------------------------- Para la verificacion de la carrera -------------------------
function verificacionCarrera(retornoverfcarr) {
    if (retornoverfcarr === 1) {
        return "El Pensum couincide";
    } else {
        return "El Pensum no couincide";
    }
}

Given('El usuario provee la carrera a la que pertenece', function() {
    // Write code here that turns the phrase above into concrete actions
    this.retorno = 1;
});

When('Se verifica que la carrera del usuario y la del pensum sean iguales', function() {
    // Write code here that turns the phrase above into concrete actions
    this.estadoVerfCarr = verificacionCarrera(this.retorno);
});

Then('El usuario obtiene el pemsum {string}', function(retornoEsperado) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(this.estadoVerfCarr, retornoEsperado);
});

//------------------------- Para la visualizacion completa del pensum -------------------------
function pensumcompleto(cantcursos) {
    if (cantcursos < 63) {
        return "El Pensum esta incompleto";
    } else {
        return "El Pensum esta completo";
    }
}

Given('A traves del la carrera del usuario el sistema provisiona la cantidad correcta de cursos del pensum', function() {
    // Write code here that turns the phrase above into concrete actions
    this.retorno = 60;
});

When('El usuario visualiza su pensum de su carrera', function() {
    // Write code here that turns the phrase above into concrete actions
    this.estadoVisCom = pensumcompleto(this.retorno);
});

Then('El usuario no obtiene todos los cursos de esa carrera {string}', function(retornoEsperado) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(this.estadoVisCom, retornoEsperado);
});

//------------------------- Para la visualizacion un pensum actualizado -------------------------
function pensumactualizado(corusorandom) {
    if (corusorandom === "Practicas Finales") {
        return "Coinciden los cursos";
    } else {
        return "No coinciden los cursos";
    }
}

Given('El usuario visualiza un pensum actualizado', function() {
    // Write code here that turns the phrase above into concrete actions
    this.retorno = "Practicas Finales";
});

When('El usuario obtiene el pensum de su carrera', function() {
    // Write code here that turns the phrase above into concrete actions
    this.estadoVisPem = pensumactualizado(this.retorno);
});

Then('El usuario puede estar seguro que dicho pensum esta actualizado {string}', function(retornoEsperado) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(this.estadoVisPem, retornoEsperado);
});

//------------------------- Para ingresar cursos ganados -------------------------
function regcursosganados(corusorandom) {
    if (corusorandom === "correcto") {
        return "cursos aprobados";
    } else {
        return "error al ingresar cursos";
    }
}

Given('El usuario selecciona los cursos aprobados', function() {
    // Write code here that turns the phrase above into concrete actions
    this.retorno = "correcto";
});

When('Hace clic en el boton guardar cursos aprobados', function() {
    // Write code here that turns the phrase above into concrete actions
    this.estadocursos_ganados = regcursosganados(this.retorno);
});

Then('Se retorna el mensaje {string}', function(retornoEsperado) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(this.estadocursos_ganados, retornoEsperado);
});