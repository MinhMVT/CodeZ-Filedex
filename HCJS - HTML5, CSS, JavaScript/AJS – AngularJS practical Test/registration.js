// Define AngularJS app
var app = angular.module('registrationFormApp', []);

// Define controller
app.controller('registrationFormCtrl', function($scope) {
  // Initialize registration data object with default values
  $scope.registrationData = {
    username: '',
    password: '',
    repeatPassword: '',
    email: ''
  };

  // Function to validate registration form
  $scope.validateRegistrationForm = function() {
    // Check if username is not blank
    if($scope.registrationData.username === '') {
      alert('Please enter a valid username');
      return false;
    }
    // Check if password and repeat password match and are not blank
    if($scope.registrationData.password === '' || $scope.registrationData.repeatPassword === '' || 
      $scope.registrationData.password !== $scope.registrationData.repeatPassword) {
      alert('Please enter matching password and repeat password');
      return false;
    }
    // Check if email is correct
    var emailRegEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(!emailRegEx.test($scope.registrationData.email)) {
      alert('Please enter a valid email');
      return false;
    }
    // If all validations pass, return true
    return true;
  };

  // Function to submit registration form
  $scope.submitRegistrationForm = function() {
    if($scope.validateRegistrationForm()) {
      // Process form submission
      console.log('Form submitted successfully');
      // Reset registration data object
      $scope.registrationData = {
        username: '',
        password: '',
        repeatPassword: '',
        email: ''
      };
    }
  };

  // Function to cancel registration form
  $scope.cancelRegistrationForm = function() {
    // Reset registration data object
    $scope.registrationData = {
      username: '',
      password: '',
      repeatPassword: '',
      email: ''
    };
  };
});
