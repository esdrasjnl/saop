Feature: BDD PARA VER EL NUMERO DE CREDITOS
  Como usuario deseo ver el numero de creditos obtenidos

  Scenario: Mostrar Creditos
    Given El usuario desea ver el numero de creditos
    When Ingreso a la pagina principal
    Then Veo el numero de creditos


    Scenario: No Mostrar creditos
    Given El usuario desea ver el numero de creditos
    When Ingreso a la pagina principal
    Then Muestra una alerta de error