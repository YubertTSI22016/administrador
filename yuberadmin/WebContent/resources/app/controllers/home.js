(function () {
    'use strict';
    angular.module('yuberAdmin').controller("homeCtrl", ["$scope", homeCtrl]);

    function homeCtrl($scope) {
        $scope.hole = "Hola Mathi, probando Scope Hole"
    }

})();