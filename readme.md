# AngularJS TodoMVC Testing

Automated testing setup with Karma, Jasmine

### How to

* Run the vagrant file with `vagrant up` command. This will install the Jenkins server to be accessed at http://localhost:8080.
* Install node_modules.
* Run `grunt test` to initiate the base mvc controller unit testing.

### Jenkins

* Create a new freestlye project.

An easy setup links the github project in the source code management. Jenkins can be set to build when a change is pushed to GitHub or poll periodically for changes. 

![Jenkins setup](https://raw.githubusercontent.com/jeeschr/angularjs-todomvc-testing/master/docs/final.jpg)

### Credits

Thanks to [AngularJS (Performance Optimized) TodoMVC Example](https://github.com/tastejs/todomvc/tree/gh-pages/examples/angularjs-perf) for todomvc code and [greyfairer's Vagrantfile](https://gist.github.com/greyfairer/ebd2206d319eb4a6728b) for Jenkins setup.