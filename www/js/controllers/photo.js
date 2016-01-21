'use strict';

app.controller('PhotoCtrl', function($scope, $cordovaCamera, $rootScope, $state) {

  $scope.takePhoto = function() {
    console.log('takePhoto was clicked');
      //Camera Plugin

      var options = {
        quality: 75,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.encodingType.JPEG,
        popoverOptions: CameraPopoverOptions,
        targerWidth: 500,
        targetHeight: 500,
        saveToPhotoAlbum: false
      };

      $cordovaCamera.getPicture(options).then(function(photo){
        $rootScope.imgURI = "data:image/jpeg;base64," +photo;
        $state.go('tab.photo-detail');
      })
  }

  $scope.choosePhoto = function() {
    console.log('will link up to photolibrary');
  }

});
