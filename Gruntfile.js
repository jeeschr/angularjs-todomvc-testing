module.exports = function(grunt) {

  grunt.initConfig({

    protractor: {
      options: {
        configFile: 'test/protractor.conf.js',
        keepAlive: true
      },
      e2e: {
        options: {
          keepAlive: false
        }
      },
      continuous: {
      }
    },

  	karma: {
      options: {
        configFile: 'test/karma.conf.js',
        browsers: ['PhantomJS']
      },
      unit: {
        singleRun: true
      },
      continuous: {
      }
    },

    browserSync: {
      bsFiles: {
        src : [
          'app/**/*.*'
        ]
      },
      options: {
        server: {
          baseDir: "app"
        }
      }
    },
    

  });

	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.registerTask('test', ['karma:unit:start']);
  grunt.registerTask('continuous-test', ['karma:continuous:start']);

  grunt.registerTask('e2e-test-continuous', ['protractor:continuous']);

	grunt.registerTask('default', ['browserSync']);

};

