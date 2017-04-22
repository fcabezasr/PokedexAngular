var app = angular.module('pokedex', []);

app.controller('buscador', function($scope, $http){

	$scope.boton = "Ver datos";
	$scope.mensaje = false;
		
	$scope.buscar = function(){

		// El texto del boton cambia : estamos simulando un BeforeSend
		$scope.boton = "Buscando...";

		// $http.get('http://pokeapi.co/api/v2/pokemon/pikachu/').then(
		$http.get('http://pokeapi.co/api/v2/pokemon/'+$scope.nombre).then(
			function(respuesta) { // Esta función anónima se ejecuta cuando el resultado fue Exitoso
				// data o respuesta o el nombre que quieras
				console.log("Todo ok", respuesta);

				// El boton cambia a su estado normal
				$scope.boton = "Ver datos";

				// El mensaje vuelve a ser false
				$scope.mensaje = false;

				// Definimos los datos en el SCOPE
				$scope.pokemon = respuesta.data.name;
				$scope.numero = respuesta.data.id;
				$scope.imagen = respuesta.data.sprites.front_default;
			},
			function(){	// Esta función se ejecuta cuando el resultado no es Exitoso
				
				// El boton cambia a su estado normal
				$scope.boton = "Ver datos";
				console.log("El pokemon ingresado no fue encontrado");

				// Muestra un mensaje
				$scope.mensaje = 'El pokemon ingresado no fue encontrado';
			}
		);

	};

});