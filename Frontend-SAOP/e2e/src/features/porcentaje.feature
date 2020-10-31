Feature: BDD PARA VER EL PORCENTAJE DE CREDITOS
  Como usuario deseo ver el porcentaje de creditos

  Scenario: Mostrar Porcentaje de Creditos
    Given El usuario desea ver el porcentaje de creditos
    When Ingreso a la pagina inicio
    Then Veo el porcentaje de creditos


    Scenario: No Mostrar porcentaje de creditos
    Given El usuario desea ver el porcentaje de creditos
    When Ingreso a la pagina inicio
    Then Muestra un error