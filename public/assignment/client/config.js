(function()
{
  angular
    .module("FormBuilderApp")
    .config(Config);
    
  function Config($routeProvider)
  {
    $routeProvider
      .when("/home",
      {
        templateUrl: 'views/home/home.view.html'
      })
      .when("/login",
      {
        templateUrl: "views/login/login.view.html",
        controller: "LoginController"
      })
      .when("/register",
      {
        templateUrl: "views/register/register.view.html",
        controller: "RegisterController"
      })
      .when("/profile",
      {
        templateUrl: "views/profile/profile.view.html",
        controller: "ProfileController"
      })
     .when("/forms",
      {
        templateUrl: "views/form/form.view.html",
        controller: "FormController"
      })
      .otherwise({
        redirectTo: "views/home"
      })
  }
})();