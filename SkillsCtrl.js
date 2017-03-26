(function(){

  angular
    .module('mainApp')
    .controller('SkillsCtrl', SkillsCtrl);

  SkillsCtrl.$inject = ['$scope'];
  function SkillsCtrl($scope){
      $scope.skills1 = ['HTML/CSS', 'Java', 'C++', 'AngularJS 2'];
      $scope.skills2 = ["JavaScript", "C", "Python", "SQLite"];
      $scope.skills3 = ["JQuery", "JSON", "MS Office", "Leadership"];
      


  }
}());
