var gulp = require('gulp');
var dir = require('./directory.js');
var del = require('del');
var releaseDirectory = dir.release;
gulp.task('clean', function() {
  del([releaseDirectory + '*'], function(err, paths) {})
});
