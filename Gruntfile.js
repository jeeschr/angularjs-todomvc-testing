module.exports = function(grunt) {

  grunt.initConfig({

  	karma: {
      options: {
        configFile: 'test/karma.conf.js',
        browsers: ['PhantomJS']
      },
      unit: {
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

  grunt.registerTask('test', ['karma:unit:start']);

	grunt.registerTask('default', ['browserSync']);

};

