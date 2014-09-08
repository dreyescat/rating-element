module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.initConfig({
    'connect': {
      demo: {
        options: {
          open: {
            target: 'http://localhost:8000/rating-element'
          },
          keepalive: true
        }
      }
    },
    'gh-pages': {
      src: [
        'index.html',
        'bower_components/**/*',
        'dist/**/*',
        'rating-element/*'
      ]
    }
  });

  grunt.registerTask('serve', ['connect']);
  grunt.registerTask('deploy', ['gh-pages']);
};
