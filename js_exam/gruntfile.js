module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
files: [
        {src: ['js/src/*.js'],
        dest: 'js/dist/script.main.js'},
	{src: ['css/src/reset.scss','css/src/variables.scss','css/src/styles_ie8_ie9.scss'],
        dest: 'css/dist/main_ie8_ie9.scss'},
	{src: ['css/src/reset.scss','css/src/variables.scss','css/src/style.scss'],
        dest: 'css/dist/main.scss'}
]	
      }
    },
		uglify: {
			dist: {
				src: ['js/dist/script.main.js'],
				dest: 'js/dist/script.main.min.js'
			}
		},
  

/*concat: {
      dist: {
	src: ['css/src/reset.scss','css/src/variables.scss','css/src/styles_ie8_ie9.scss'],
        dest: 'css/dist/main_ie8_ie9.scss'

      } 
    },
concat: {
      dist: {
        src: ['css/src/reset.scss','css/src/variables.scss','css/src/style.scss'],
        dest: 'css/dist/main.scss'
      } 
    },*/
		sass: {
				dist: {
					files: [{
						expand: true,
						cwd: 'css',
						src: ['dist/main_ie8_ie9.scss'],
					        dest: 'css',
						ext: '.css'
					},{
						expand: true,
						cwd: 'css',
						src: ['dist/main.scss'],
					        dest: 'css',
						ext: '.css'
					}


						]
				}
			},       
	/*	sass: {
				dist: {
					files: [{
						expand: true,
						cwd: 'css',
						src: ['dist/main.scss'],
					        dest: 'css',
						ext: '.css'
					}

						]
				}
			},*/

cssmin: {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'css/dist/styles.min.css': ["css/dist/main.css"],
      'css/dist/styles_ie8_ie9.min.css': ["css/dist/main_ie8_ie9.css"]
    }
  }
}

});

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
	
  grunt.registerTask('default', ['concat', 'uglify','sass','cssmin']);
	
};