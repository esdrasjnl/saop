Feature: calculo_creditos
  Para poder obtener un reporte del calculo de creditos

Scenario: El usuario obtiene la cantidad de creditos como un reporte detallado
    Given El usuario selecciona la seccion de reporte de calculo de creditos
    When Hace clic en el boton obtener detalle
    Then Se retorna reporte "calculo de creditos" 