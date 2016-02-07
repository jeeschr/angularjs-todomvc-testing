module.exports = function(grunt) {
  grunt.initConfig({

	watch: {
      options: {
      	livereload: true
      },
      karma: {
        files: ['app/js/**/*.js', 'test/unit/*.js']
      }
  	},


    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'app/*.html',
            'app/js/**/*.js'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "app"
          }
        }
      } 
    }



  });

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('default', ['browserSync','watch']);


};