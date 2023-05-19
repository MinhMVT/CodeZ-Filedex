angular.module('registrationApp', [])
      .controller('registrationCtrl', function($scope) {
        $scope.user = {};

        $scope.submitForm = function() {
          if ($scope.registrationForm.$valid) {
            // Form is valid, process the submission logic here

            // Clear input fields and reset form state
            $scope.user = {};
            $scope.registrationForm.$setPristine();
            $scope.registrationForm.$setUntouched();
          }
        };

        $scope.resetForm = function() {
          $scope.user = {};
          $scope.registrationForm.$setPristine();
          $scope.registrationForm.$setUntouched();
        };
      });
