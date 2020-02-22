var gulp = require('gulp');

gulp.task('default', css);

function css(done) {
    var sass = require('gulp-sass');
    sass.compiler = require('node-sass');
    var cssnano = require('cssnano');
    var csso = require('postcss-csso');
    var postcss = require('gulp-postcss');
    var size = require('gulp-size');
    var gzip = require('gulp-gzip');
    return gulp.src('src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([cssnano({ preset: "advanced" }), csso]))
        .pipe(size({ showFiles: true }))
        .pipe(gulp.dest('dist/'))
        .pipe(gzip())
        .pipe(size({ showFiles: true }))
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