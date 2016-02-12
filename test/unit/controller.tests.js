/*
 * Unit tests for app/js/controllers/todoCtrl.js
 */


describe('todomvc - TodoCtrl -> ', function() {

	beforeEach(module('todoCtrl'));

	var $scope, $rootScope, $location, $controller;

	var todoStorageMock = {
		storage: [],
		get: function () {
			return this.storage;
		},
		put: function (value) {
			this.storage = value;
		}
	};

	beforeEach(inject(function(_$rootScope_, _$controller_, _$location_){
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		$location = _$location_;
		$controller = _$controller_;
		$controller('TodoCtrl as TC', {
			$scope: $scope,
			$location: $location,
			todoStorage: todoStorageMock
		});
	}));

	it('should be defined', function(){
		// console.log('$scope.TC: ', $scope.TC);
		expect($scope.TC).toBeDefined();
	});

	it('should start with empty todos storage', function(){
		// console.log('$scope.TC.todos: ', $scope.TC.todos);
		expect($scope.TC.todos.length).toBe(0);
	});	

	it('should not start with any editedTodo', function(){
		// console.log('$scope.TC.editedTodo: ', $scope.TC.editedTodo);
		expect($scope.TC.editedTodo).toEqual({});
	});

	describe('adding todos', function(){

		afterEach(function(){
			todoStorageMock.storage = [];
		});
		
		it('should not add blank todos', function(){
			$scope.TC.newTodo.title = '';
			$scope.TC.addTodo();
			expect($scope.TC.newTodo.title.length).toBe(0);
		});

		it('should trim whitespace from both ends of new todos', function(){
			$scope.TC.newTodo.title = ' Go to the store   ';
			$scope.TC.addTodo();
			expect($scope.TC.todos.length).toBe(1);
			// console.log('$scope.TC.todos[0].title: ',$scope.TC.todos[0].title.trim());
			expect($scope.TC.todos[0].title).toBe('Go to the store');
		});

	});

	describe('editing todos', function(){

		beforeEach(function(){
			var todo = {
				title: 'Finish report',
				completed: false
			};
			$scope.TC.newTodo = todo;
			$scope.TC.addTodo();
		});

		afterEach(function() {
			todoStorageMock.storage = [];
		});

		it('should clone the original todo', function(){
			$scope.TC.editTodo($scope.TC.todos[0]);
			expect($scope.TC.originalTodo).toEqual($scope.TC.editedTodo);
		});

		it('should remove blank todos', function(){
			var todo = {
				title: ' ',
				completed: false
			};
			// console.log('$scope.TC.todos: ', $scope.TC.todos);
			$scope.TC.doneEditing(todo, 0);
			// console.log('$scope.TC.todos: ', $scope.TC.todos);
			expect($scope.TC.todos.length).toBe(0);
		});

		it('should revert editing', function(){
			$scope.TC.revertEditing(0);
			expect($scope.TC.todos[0]).toBe($scope.TC.originalTodo);
		});

	});

	describe('removing todos', function(){
		beforeEach(function(){
			// etc.
		});
	});

});




