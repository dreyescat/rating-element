module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-connect');

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
    }
  });

  grunt.registerTask('serve', ['connect']);
};
