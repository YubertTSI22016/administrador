﻿(function () {
	

    angular.module('yuberAdmin', ['ngRoute']);

    angular.module('yuberAdmin').config(['$routeProvider', configFunction]);

    angular.module('yuberAdmin').constant('CONFIG', {
		 'URL' : 'http://localhost:8080/yuberapi/rest'
	});

    /*@ngInject*/
    function configFunction($routeProvider) {
        // Routes
        $routeProvider.when("/", {
		    templateUrl : "app/views/home.html",
		    controller  : 'homeCtrl'
		}).otherwise({
            redirectTo 	: '/error'
        });


		// ruta de administrador
		$routeProvider.when("/administrador", {
		    templateUrl : "app/views/administrador/list.html",
		    controller  : 'administradorCtrl'
		}).when("/administrador/:type", {
		    templateUrl : "app/views/administrador/add.html",
		    controller  : 'administradorCtrl'
		}).when("/administrador/:type/:id", {
		    templateUrl : "app/views/administrador/edit.html",
		    controller  : 'administradorCtrl'
		});

		// ruta de configuracion
		$routeProvider.when("/configuracion", {
		    templateUrl : "app/views/configuracion/edit.html",
		    controller  : 'configuracionCtrl'
		});

		// ruta de Clientes
		$routeProvider.when("/cliente", {
		    templateUrl : "app/views/cliente/list.html",
		    controller  : 'clienteCtrl'
		});

		// ruta de Proveedores
		$routeProvider.when("/proveedor", {
		    templateUrl : "app/views/proveedor/list.html",
		    controller  : 'proveedorCtrl'
		});

		// ruta de Reportes
		$routeProvider.when("/reporte", {
		    templateUrl : "app/views/reporte/list.html",
		    controller  : 'reporteCtrl'
		});
    }

})();