(function () {
    'use strict';
    angular.module('yuberAdmin').controller('recursoCtrl', ['$scope', '$routeParams', 'recursoService', recursoCtrl]);

    function recursoCtrl($scope, $routeParams, recursoService) {
        $scope.recursos     = [];
        $scope.showAlert    = false;

        recursoService.getAll().then(function (data) {
        	console.log(data);
            $scope.recursos = data;
        });

        $scope.add = function(){
        	console.log('aaaddd')
        }

        $scope.edit = function(){
        	console.log('edit')
        }

    }

})();