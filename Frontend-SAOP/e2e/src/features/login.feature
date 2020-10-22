Feature: BDD PARA PAGINA DE LOGIN
  Como usuario deseo iniciar sesion y luego revisar mis datos en el perfil 

  Scenario: Login Exitoso
    Given Abro la pagina de Login 
    When Veo el titulo de login
    And Completo el campo carnet con 201503986
    And Completo el campo password con 123
    And Se da click en el boton de ingreso
    And me dirige a pagina principal
    And Abro la pagina de Perfil
    And Veo el titulo de Perfil
    And Veo que mi carnet coincida
    And Veo que mi nombre coincida
    And Ingreso a pagina de pensum
    And Veo el pensum y busco el curso de Tecnicas de estudio e investigacion
    And Abro la pagina de asignacion de cursos
    Then Cierro Sesion 

    Scenario: Login Erroneo
  
    Given Abro la pagina de Login
    When Veo el titulo de login
    And No completo el campo carnet
    And No completo el campo password
    And Se da click en el boton de ingreso
    Then Muestra una alerta