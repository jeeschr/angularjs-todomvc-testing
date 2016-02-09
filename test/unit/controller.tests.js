/*
 * Unit tests for app/js/controllers/todoCtrl.js
 */


describe('todomvc TodoCtrl', function() {

	beforeEach(module('todoCtrl'));

    var scope, todoCtrl, location;
    var todoStorageMock = {
      storage: [],
      get: function () {
        return this.storage;
      },
      put: function (value) {
        this.storage = value;
      }
    };

	beforeEach(inject(function($rootScope, $controller, $location){
		scope = $rootScope.$new();
		// location = $location;
		todoStorageMock.storage = [];
		todoCtrl = $controller('TodoCtrl', {
			$scope: scope,
			todoStorage: todoStorageMock
		});
	}));

	it('should be defined', function(){
		expect(todoCtrl).toBeDefined();
	});

	it('should not be defined', function(){
		expect(todoCtrl).not.toBeDefined();
	});

});

