angular.module('mainApp',['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
        url: '/home',
		    templateUrl: '/Home.html',
        controller: 'HomeCtrl'
      })
      .state('skills', {
        url: '/skills',
        templateUrl: '/Skills.html',
        controller: 'SkillsCtrl'
      })
      .state('projects', {
        url: "/projects",
        templateUrl: '/Projects.html',
        controller: 'ProjectsCtrl'
      })
      .state('resume', {
        url: "/resume",
        templateUrl: '/Resume.html',
        controller: 'ResumeCtrl'
      })
      .state('contact', {
        url: "/contact",
        templateUrl: '/Contact.html',
        controller: 'ContactCtrl'
      });
  });
