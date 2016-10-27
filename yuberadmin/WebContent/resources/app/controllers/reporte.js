(function () {
    'use strict';
    angular.module('yuberAdmin').controller('reporteCtrl', ['$scope', '$routeParams', 'reporteService', '$localStorage', '$location', reporteCtrl]);

    function reporteCtrl($scope, $routeParams, reporteService, $localStorage, $location) {
        if(!$localStorage.empleadoLogueado){
            $location.url('/login');
        }
        
        var proveedor = {email:null};
        var proveedores = [];
        $scope.showAlert = false;

        var initialize = function(){
            var id = $routeParams && $routeParams['id'] ? $routeParams['id'] : null;
            var type = $routeParams && $routeParams['type'] ? $routeParams['type'] : null;
            


            reporteService.reporteRatingProv().then(function (data) {
                console.log('reporteRatingProv')
                $scope.proveedores = data;
            });
            
        }

        var mostrarNotificacion = function (tipo, text) {
            var title = '';

            if (tipo == 'success') {
                var title = 'Exito!';
                text || (text = 'Acción realizada con exito.');
            } else if (tipo == 'error') {
                var title = 'Oh No!';
                text || (text = 'Ha ocurrido un error.');
            }

            new PNotify({
                title: title,
                text: text,
                type: tipo,
                nonblock: {
                    nonblock: true
                }
            });
        }
        
        initialize();
    }

})();