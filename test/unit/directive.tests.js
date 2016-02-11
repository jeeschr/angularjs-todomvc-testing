/*
 * Unit tests for app/js/directives/todoFocus.js
 */


describe('todomvc - todoFocus ->', function() {

	beforeEach(module('todoFocus'));

	var $rootScope, $compile, $scope, elem, $timeout;

	beforeEach(inject(function(_$compile_, _$rootScope_, _$timeout_){
		$rootScope = _$rootScope_;
		$timeout = _$timeout_;
		$scope = $rootScope.$new();
		$compile = _$compile_;
		elem = angular.element('<input todo-focus="focus">');
		$compile(elem)($scope);
		$scope.focus=true;
		$scope.$digest();
	}));

	it('should focus on true expression evaluation', function(){
		spyOn(elem[0], 'focus');
		$timeout.flush();
		// console.log('!elem: ', elem);
		expect(elem[0].focus).toHaveBeenCalled();
	});

});




