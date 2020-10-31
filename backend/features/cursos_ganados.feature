Feature: cursos_ganados
  Para poder registrar los cursos que ha ganado

Scenario: El usuario el o los cursos que ha aprobado
    Given El usuario selecciona los cursos aprobados 
    When Hace clic en el boton guardar cursos aprobados
    Then Se retorna el mensaje "cursos aprobados" 
