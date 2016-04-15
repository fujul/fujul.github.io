module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.main.js'
      }
    },
		uglify: {
			dist: {
				src: ['js/dist/script.main.js'],
				dest: 'js/dist/script.main.min.js'
			}
		},
  

/*  concat_css: {
    options: { },
    all: {
      src: ["css/src/*.css"],
      dest: "css/dist/styles.css"
    }
  },
cssmin: {
  target: {
    files: [{
      expand: true,
      cwd: 'css/dist',
      src: ['*.css', '!*.min.css'],
      dest: 'css/dist',
      ext: '.min.css'
    }]
  }
}
  */
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
}

});


  grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
/*grunt.loadNpmTasks('grunt-concat-css');*/
grunt.loadNpmTasks('grunt-contrib-cssmin');
	
  grunt.registerTask('default', ['concat', 'uglify','cssmin']);
	
};