module.exports = function(grunt) {

  'use strict';

  // Order of the source files that we want to concat
  var srcFiles = [
    'lib/Framework.js'
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: srcFiles,
        dest: 'dist/mast.js'
      }
    },

    uglify: {
      options: {
        report: 'min',
        preserveComments: false
      },
      files: {
        src: 'dist/mast.js',
        dest: 'dist/mast.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', [
    'build:dev',
    'build:production'
  ]);

  grunt.registerTask('build:dev', ['concat']);
  grunt.registerTask('build:production', ['concat', 'uglify']);
};
