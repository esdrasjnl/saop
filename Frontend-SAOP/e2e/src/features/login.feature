Feature: BDD PARA PAGINA DE LOGIN
  Como usuario deseo iniciar sesion y luego revisar mis datos en el perfil 

  Scenario: Login Exitoso
    Given El usuario desea utilizar la aplicación  
    When Ingreso a la pagina de login
    And Completo el campo carnet con 201503986
    And Completo el campo password con 123
    And Doy click en el boton de ingreso
    Then Me dirige a pagina principal
    And Abro la pagina de Perfil
    And Veo el titulo de Perfil
    Then Veo que mi carnet coincida
    And Cierro Sesion 

    Scenario: Login Erroneo
  
    Given El usuario desea utilizar la aplicación
    When Ingreso a la pagina de login
    And No completo el campo carnet
    And No completo el campo password
    And Doy click en el boton de ingreso
    Then Muestra una alerta