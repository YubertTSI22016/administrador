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
            redirectTo 	: '/error'
        });

		// ruta de recursos
//		$routeProvider.when("/recurso", {
//		    templateUrl : "app/views/recurso/list.html",
//		    controller  : 'recursoCtrl'
//		}).when("/recurso/add", {
//		    templateUrl : "app/views/recurso/add.html",
//		    controller  : 'recursoCtrl'
//		}).when("/recurso/edit/:id", {
//		    templateUrl : "app/views/recurso/edit.html",
//		    controller  : 'recursoCtrl'
//		});

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
    }

})();