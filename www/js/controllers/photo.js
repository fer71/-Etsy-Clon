'use strict';

app.controller('PhotoCtrl', function($scope) {

  $scope.takePhoto = function() {
    console.log('takePhoto was clicked');
  }
  
  $scope.choosePhoto = function() {
    console.log('will link up to photolibrary');
  }

});