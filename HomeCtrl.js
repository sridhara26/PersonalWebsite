(function(){

  angular
    .module('mainApp')
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['$scope'];
  function HomeCtrl($scope){
    console.log("home");
  }
}());
