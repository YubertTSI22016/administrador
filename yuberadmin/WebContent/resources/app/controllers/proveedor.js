(function () {
    'use strict';
    angular.module('yuberAdmin').controller('proveedorCtrl', ['$scope', '$routeParams', 'proveedorService', '$localStorage', '$location', proveedorCtrl]);

    function proveedorCtrl($scope, $routeParams, proveedorService, $localStorage, $location) {
        if(!$localStorage.empleadoLogueado){
            $location.url('/login');
        }
        
        var proveedor = {email:null};
        var proveedores = [];
        $scope.showAlert = false;

        var initialize = function(){
            var id = $routeParams && $routeParams['id'] ? $routeParams['id'] : null;
            var type = $routeParams && $routeParams['type'] ? $routeParams['type'] : null;
            


            proveedorService.getAll().then(function (data) {
                console.log('getAll')
                $scope.proveedores = data;
            });
            
        }



        $scope.remove = function (index) {

            var eliminadoProveedor = this.proveedor;
            eliminadoProveedor.eliminado = true;
            var re = confirm("Seguro que quiere borrar?");
            if (re == true) {
                proveedorService.remove(eliminadoProveedor).then(
                    function () {
                        $scope.proveedores.splice(index, 1);
                        mostrarNotificacion('success', 'Se ha heliminado el Proveedor');
                    }, function () {
                        mostrarNotificacion('error', 'No se pudo eliminar el Proveedor');
                    }
                );
            }
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