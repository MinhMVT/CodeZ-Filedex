//Create angular app
var validationApp = angular.module('validationApp',[]);

//Creative angular controller
validationApp.controller('mainController',function ($scope){
    $scope.submitForm=function(isValid){
        if(isValid){
            alert('form is Valid');
        }
    };
});