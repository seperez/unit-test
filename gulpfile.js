var gulp = require('gulp'),
    karma = require('karma').server,
    open = require('gulp-open');

/**
 * Run test once and exit
 */
gulp.task('test', function(done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function(done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js'
    }, done);
});

/**
 * Open the coverage report in a browser
 */
gulp.task('coverage', function(){
    gulp.src('./coverage/Chrome 43.0.2357 (Mac OS X 10.10.0)/index.html')
        .pipe(open());
});

gulp.task('default', ['tdd']);
