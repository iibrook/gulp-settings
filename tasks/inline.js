var gulp=require('gulp'),
 inline = require('gulp-inline');
gulp.task('inline', function() {
    gulp.src(process.cwd() + '/release/*.html')
        .pipe(inline({
            base:process.cwd()+'/release/css/',
            disabledTypes: ['img']
        }))
        .pipe(gulp.dest(process.cwd()+'/release'));
});
