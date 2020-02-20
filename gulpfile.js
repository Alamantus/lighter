var gulp = require('gulp');

gulp.task('default', css);

function css(done) {
    var sass = require('gulp-sass');
    sass.compiler = require('node-sass');
    var postcss = require('gulp-postcss');
    var cleanCSS = require('gulp-clean-css');
    var cssvariables = require('postcss-css-variables');
    var gzip = require('gulp-gzip');
    return gulp.src('src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([cssvariables()]))
        .pipe(cleanCSS({ level: 2 }))
        .pipe(gulp.dest('dist/'))
        .pipe(gzip())
        .pipe(gulp.dest('dist/'));
    done();
}
gulp.task('minify', minify);

function minify(done) {
    var postcss = require('gulp-postcss');
    var cleanCSS = require('gulp-clean-css');
    var cssvariables = require('postcss-css-variables');
    return gulp.src('src/*.css')
        .pipe(postcss([cssvariables()]))
        .pipe(cleanCSS({ level: 2 }))
        .pipe(gulp.dest('dist/'))
    done();
}
gulp.task('watch', function(){
    gulp.series('minify')
    gulp.watch("src/*.css").on('change', gulp.series('minify'));
})