module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      dist: {
        src: ['css/src/reset.scss','css/src/variables.scss','css/src/fonts.scss','css/src/style.scss'],
        dest: 'css/dist/main.scss'
      }
    },
		sass: {
				dist: {
					files: [{
						expand: true,
						cwd: 'css',
						src: ['dist/main.scss'],
		        dest: 'css',
						ext: '.css'
					}]
				}
			},
		watch: {
			sass: {
					files: ['css/src/*.scss'],
		       tasks: ['concat','sass']
				},
			}

/*
		uglify: {
			dist: {
				src: ['js/dist/script.main.js'],
				dest: 'js/dist/script.main.min.js'
			}
		},
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'css/dist/styles.min.css': ["css/src/*.css"]
				}
			}
		} */
});


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
/* 	grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');*/
	
  grunt.registerTask('default', ['concat','sass']);
	
};