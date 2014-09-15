module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-bump');

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
    },
    'bump': {
      options: {
        files: ['bower.json'],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['bower.json'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: '%VERSION%',
        push: true
      }
    }
  });

  grunt.registerTask('serve', ['connect']);
  grunt.registerTask('deploy', ['bump', 'gh-pages']);
};
