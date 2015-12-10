var gulp = require('gulp');
var gulp_sprite = require('sprity');
var dir = require('./directory.js');
var gulpif = require('gulp-if');

var currentDirectory = dir.currentDirectory;
gulp.task('sprite', function() {
    return gulp_sprite.src({
            src: process.cwd() + '/sprite/**/*.{png,jpg}',
            orientation: 'binary',
            split: true,
            name: "icon",
            process: 'scss',
            margin:10,
            cssPath:'../img/',
            style: 'icon.scss'
        })
        .pipe(gulpif('*.png', gulp.dest(process.cwd() + '/img/'), gulp.dest(process.cwd() + '/sass/')));
});
