(function () {

    angular.module('yuberAdmin', ['ngRoute']);

    angular.module('yuberAdmin').config(['$routeProvider', configFunction]);

    /*@ngInject*/
    function configFunction($routeProvider) {
        // Routes
        $routeProvider.when("/", {
		    templateUrl : "app/views/home.html",
		    controller  : 'homeCtrl'
		}).otherwise({
            redirectTo 	: '/'
        });
        
        console.log("saasa")

		// ruta de recursos
		$routeProvider.when("/recurso", {
		    templateUrl : "app/views/recurso/list.html",
		    controller  : 'recursoCtrl'
		}).when("/recurso/add", {
		    templateUrl : "app/views/recurso/add.html",
		    controller  : 'recursoCtrl'
		}).when("/recurso/edit/:id", {
		    templateUrl : "app/views/recurso/edit.html",
		    controller  : 'recursoCtrl'
		});

		// ruta de empleado
		$routeProvider.when("/empleado", {
		    templateUrl : "app/views/empleado/list.html",
		    controller  : 'empleadoCtrl'
		}).when("/empleado/add", {
		    templateUrl : "app/views/empleado/add.html",
		    controller  : 'empleadoCtrl'
		}).when("/empleado/edit/:id", {
		    templateUrl : "app/views/empleado/edit.html",
		    controller  : 'empleadoCtrl'
		});
    }

})();