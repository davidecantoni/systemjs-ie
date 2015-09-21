var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat');

gulp.task('connect', function() {
    connect.server({
        root: [
            'public'
        ],
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./public/*.html')
        .pipe(connect.reload());
});

gulp.task('scripts', function() {
    return gulp.src([
        './public/jspm_packages/system.js',
        './public/dist/main-bundle.js',
        './public/config.js',
        './public/init.js'
    ])
        .pipe(concat('concat.js'))
        .pipe(gulp.dest('./public/dist/'));
});

gulp.task('watch', function () {
    gulp.watch(['./public/*.html'], ['html']);
});

gulp.task('default', ['connect', 'scripts']);
