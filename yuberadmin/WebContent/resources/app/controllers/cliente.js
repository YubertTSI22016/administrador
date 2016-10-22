(function () {
    'use strict';
    angular.module('yuberAdmin').controller('clienteCtrl', ['$scope', '$routeParams', 'clienteService', '$localStorage', '$location', clienteCtrl]);

    function clienteCtrl($scope, $routeParams, clienteService, $localStorage, $location) {
        if(!$localStorage.empleadoLogueado){
            $location.url('/login');
        }
        
        var cliente = {email:null};
        var clientes = [];
        $scope.showAlert = false;

        var initialize = function(){
            var id = $routeParams && $routeParams['id'] ? $routeParams['id'] : null;
            var type = $routeParams && $routeParams['type'] ? $routeParams['type'] : null;
            


            clienteService.getAll().then(function (data) {
                console.log('getAll')
                $scope.clientes = data;
            });
            
        }



        $scope.remove = function (index) {

            var eliminadoCliente = this.cliente;
            eliminadoCliente.eliminado = true;
            var re = confirm("Seguro que quiere borrar?");
            if (re == true) {
                clienteService.remove(eliminadoCliente).then(
                    function () {
                        $scope.clientes.splice(index, 1);
                        mostrarNotificacion('success', 'Se ha heliminado el Cliente');
                    }, function () {
                        mostrarNotificacion('error', 'No se pudo eliminar el Cliente');
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