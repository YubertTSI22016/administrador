(function () {
    'use strict';
    angular.module('yuberAdmin').controller('configuracionCtrl', ['$scope', '$routeParams', 'configuracionService', configuracionCtrl]);

    function configuracionCtrl($scope, $routeParams, configuracionService) {
        $scope.configuracioness = [];
        $scope.showAlert = false;
        
        var initialize = function(){
            var id = $routeParams && $routeParams['id'] ? $routeParams['id'] : null;
            
        }


        $scope.edit = function(){
        	console.log('edit')
        }

        
        initialize();
    }

})();