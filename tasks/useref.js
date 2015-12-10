var gulp = require('gulp'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    pxtorem = require('gulp-pxtorem'),
    revReplace = require('gulp-rev-replace'),
    rev=require('gulp-rev');


var pxtoremOptions = {
  root_value: 32,
  unit_precision: 5,
  prop_white_list: ['font', 'font-size', 'line-height', 'letter-spacing', 'background','background-position', 'background-size', 'border', 'width', 'height', 'margin', 'margin-top', 'margin-left', 'margin-right', 'margin-bottom', 'padding', 'padding-left', 'padding-right', 'padding-top', 'padding-bottom', 'border', 'border-left', 'border-right', 'border-top', 'border-bottom', 'box-shadow', '-webkit-box-shadow', 'top', 'left', 'right', 'bottom','text-indent','transform','-webkit-transform','border-radius'],
  replace: true,
  media_query: false
};
var postcssOptions = {
  map: false
};

gulp.task('useref', function () {
    var assets = useref.assets();
    return gulp.src(process.cwd()+'/*.html')
        .pipe(assets)
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulpif('*.css',autoprefixer({
          browsers: [
              'last 10 versions',
              'chrome 30',
              'safari 5',
              'ie 7',
              'opera 10',
          ]})))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('release'));
});
gulp.task('useref-rem',function(){

    var assets = useref.assets();
    return gulp.src(process.cwd()+'/*.html')
        .pipe(assets)
        .pipe(rev())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulpif('*.css',autoprefixer({
          browsers: [
              'last 10 versions',
              'chrome 30',
              'safari 5',
              'ie 7',
              'opera 10',
          ]})))
        .pipe(gulpif('*.css',pxtorem(pxtoremOptions, postcssOptions)))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(revReplace())
        .pipe(gulp.dest('release'));
});
