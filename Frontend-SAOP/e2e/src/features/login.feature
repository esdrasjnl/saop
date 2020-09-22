Feature: Go to the Login

  Scenario: Login
    Given Abro la pagina de Login 
    When Veo el titulo 
    Then ingresar el carnet e ingresar la contrasena
    Then click en el boton de ingreso
    Then me dirige a pagina principal