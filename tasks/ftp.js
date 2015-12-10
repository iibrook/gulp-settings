var gulp = require('gulp');
var gutil = require('gulp-util');
var ftp = require('vinyl-ftp');
var dir=require('./directory.js');
var argv = require('minimist')(process.argv.slice(2));
var qrcode = require('qrcode-terminal');
var imgName=dir.imgName;

gulp.task('ftp', function() {
    var ftpConfig=require('../ftpConfig.js');
    var ftpServer=ftpConfig.remoteServer;
    var serverUrl=ftpConfig.remoteServerUrl;
    qrcode.generate(ftpConfig.onlineUrl);
    console.log(ftpConfig.onlineUrl);
    var conn = ftp.create(ftpServer);
    var globs = [
        'release/'+imgName+'/**',
        'release/css/**',
        'release/js/**',
        'release/fonts/**',
        'release/*.html'
    ];
    return gulp.src(globs, {
            base: 'release/',
            buffer: true})
        .pipe(conn.newer(serverUrl))
        .pipe(conn.dest(serverUrl));
});
