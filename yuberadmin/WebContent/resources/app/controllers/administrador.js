(function () {
    'use strict';
    angular.module('yuberAdmin').controller('administradorCtrl', ['$scope', '$routeParams', 'administradorService', administradorCtrl]);

    function administradorCtrl($scope, $routeParams, administradorService) {
        $scope.administradores = [];
        $scope.showAlert = false;

        administradorService.getAll().then(function (data) {
            $scope.administradores = data;
        });

        $scope.agregar = function() {
        
            $scope.administradores.push(this.adinistrador);   
        };

        $scope.add = function(){
        	console.log(administrador.nombre)
        }

        $scope.edit = function(){
        	console.log('edit')
        }

        

    }

})();