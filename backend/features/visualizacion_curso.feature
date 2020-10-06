Feature: Visualizacion Curso
  Everybody wants to know when it's Friday

Scenario: El usuario desea ver que el pensum mostrado sea acorde a la carrera
    Given El usuario provee la carrera a la que pertenece
    When Se verifica que la carrera del usuario y la del pensum sean iguales
    Then El usuario obtiene el pemsum "El Pensum couincide"

Scenario: El usuario debe poder visualizar el pensum completo
    Given A traves del la carrera del usuario el sistema provisiona la cantidad correcta de cursos del pensum
    When El usuario visualiza su pensum de su carrera
    Then El usuario no obtiene todos los cursos de esa carrera "El Pensum esta incompleto"

Scenario: El usuario tiene la certeza de que el pensum que se le muestra es el mas actualizado
    Given El usuario visualiza un pensum actualizado
    When El usuario obtiene el pensum de su carrera
    Then El usuario puede estar seguro que dicho pensum esta actualizado "Coinciden los cursos"

Scenario: El usuario desea ver detalles del curso
    Given El usuario selecciona el curso deseado
    When Hace clic en el boton desplegar
    Then El usuario obtiene la descripcion del curso "Satisfactorio"


