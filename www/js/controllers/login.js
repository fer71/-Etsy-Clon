'use strict';

app.controller('LoginCtrl', function($scope, $state, $ionicPopup){
	$scope.emailLogin = function(){
		console.log('button was clicked on login');
  			$scope.user = {};
  			console.log('showing popup');

  		// An elaborate, custom popup
  			var myPopup = $ionicPopup.show({
   			 templateUrl: 'templates/partials/login.html',
			 title: 'Signin',
			 scope: $scope,
			 buttons: [
			   { text: '<b>Login</b>',
			     type: 'button-energized',
			     onTap: function(user) {
			       user = $scope.user;
			        console.log('the user is ', user);
			        //log user in
			        $state.go('tab.dash');
			        //send to the dashboard
			      } },
			   {
			     text: '<b>Register</b>',
			     type: 'button-calm',
			     onTap: function(user) {
			       user = $scope.user;
			        console.log('the user is ', user);
			        //register the user
			        //send them to the dashboard
			       }
        		}
            ]
        });
	};
});
