/*
 * E2E tests for app/js/app.js
 */

describe('todomvc', function() {

  var todoList;

  beforeEach(function(){
    browser.get('/');
    todoList = element.all(by.repeater('todo in TC.todos'));
  });
  
  
  it('should display the correct page title"', function() {
  	expect(browser.getTitle()).toBe('AngularJS • TodoMVC');
  });

  it('should start with an empty todo list', function(){
    expect(todoList.count()).toEqual(0);
  });

  it('should not have a footer', function(){
    expect(element(by.id('footer')).isDisplayed()).toBeFalsy();
  });

  describe('add a todo', function(){
    it('should add a single todo', function(){
      element(by.model('TC.newTodo.title')).sendKeys('New task today');
      browser.actions().sendKeys(protractor.Key.ENTER).perform();
      expect(todoList.count()).toEqual(1);
    });

    it('should display the footer', function(){
      expect(element(by.id('footer')).isDisplayed()).toBeTruthy();
    });
  });

  describe('completing a todo', function() {

    beforeEach(function(){
      element(by.model('todo.completed')).click();
    });

  	it('should decrease the items left count', function() {
	  	expect(element(by.id('todo-count')).getText()).toEqual('0 items left');
  	});

  });


});


