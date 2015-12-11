
var gulp = require('gulp');
var sass = require('gulp-sass');
var pxtorem = require('gulp-pxtorem');
var gulpif= require('gulp-if');

var pxtoremOptions = {
  root_value: 32,
  unit_precision: 5,
  prop_white_list: ['font', 'font-size', 'line-height', 'letter-spacing','background', 'background-position', 'background-size', 'border', 'width', 'height', 'margin', 'margin-top', 'margin-left', 'margin-right', 'margin-bottom', 'padding', 'padding-left', 'padding-right', 'padding-top', 'padding-bottom', 'border', 'border-left', 'border-right', 'border-top', 'border-bottom', 'box-shadow', '-webkit-box-shadow', 'top', 'left', 'right', 'bottom','text-indent','transform','-webkit-transform','border-radius'],
  replace: true,
  media_query: false
};
var postcssOptions = {
  map: false
};
var setPxtorem=false;
gulp.task('sass', function() {
  gulp.src(process.cwd()+ '/scss/*')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(setPxtorem, pxtorem(pxtoremOptions, postcssOptions)))
    .pipe(gulp.dest(process.cwd()+ '/css/'))
});
