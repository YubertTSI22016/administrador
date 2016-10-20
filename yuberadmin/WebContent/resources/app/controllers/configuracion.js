(function () {
    'use strict';
    angular.module('yuberAdmin').controller('configuracionCtrl', ['$scope', '$routeParams', 'configuracionService', '$localStorage', '$location', configuracionCtrl]);

    function configuracionCtrl($scope, $routeParams, configuracionService, $localStorage, $location) {
    	if(!$localStorage.empleadoLogueado){
			$location.url('/login');
		}
    	
        $scope.configuracioness = [];
        $scope.showAlert = false;
        
        var initialize = function(){
            var id = $routeParams && $routeParams['id'] ? $routeParams['id'] : null;
            
        


            configuracionService.getInfo().then(function (data) {
                    $scope.configuracion = data;
                    if(data.id == null){
                        var nuevoTenant = {
                            nombre : "Nombre Empresa",
                            transporte : true,
                            habilitado : true,
                            tarifaBase : 0,
                            precioPorKm : 0,
                            precioPorHora : 0
                        }
                        configuracionService.createTenant(nuevoTenant).then(function (data){
                            $scope.configuracion = data;
                            
                        });
                    }
                    console.log(data);
            });
        }

        $scope.guardarConf = function() {
            var guardarTenant = {
                            id : this.configuracion.id,
                            nombre : this.configuracion.nombre,
                            transporte : true,
                            habilitado : true,
                            tarifaBase : this.configuracion.tarifaBase,
                            precioPorKm : this.configuracion.precioPorKm,
                            precioPorHora : this.configuracion.precioPorHora
                        }

           
            console.log(guardarTenant);
            configuracionService.save(guardarTenant).then(function (data) {
                    
                    console.log(data);
                });
            
        }

        
        initialize();
    }

})();