module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2,
        },
        files: {
          'css/index.css': 'less/index.less'
        },
      },
    },
    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true,
        },
      },
      livereload: {
        options: { livereload: true },
        files: ['css/**/*'],
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-less');
  grunt.loadNpmTasks('grunt-reload');
  grunt.registerTask('default', ['less', 'watch']);
};
