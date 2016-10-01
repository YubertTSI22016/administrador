(function () {
    'use strict';
    angular.module('atlas2').controller("homeCtrl", ["$scope", homeCtrl]);

    function homeCtrl($scope) {
        $scope.hole = "hola mathi"
    }

})();