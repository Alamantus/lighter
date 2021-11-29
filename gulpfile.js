var gulp = require('gulp');

gulp.task('default', fromCss);
gulp.task('from-scss', fromScss);

function fromCss(done) {
    var postcss = require('gulp-postcss');
    var cleanCSS = require('gulp-clean-css');
    var cssnano = require('cssnano');
    var csso = require('postcss-csso');
    var postcss = require('gulp-postcss');
    var cssvariables = require('postcss-css-variables');
    var size = require('gulp-size');
    var gzip = require('gulp-gzip');
    return gulp.src('src/*.css')
        .pipe(postcss([cssvariables()]))
        .pipe(cleanCSS({ level: 2 }))
        .pipe(postcss([cssnano({ preset: 'advanced' }), csso]))
        .pipe(size({ showFiles: true }))
        .pipe(gulp.dest('dist/'))
        .pipe(gzip())
        .pipe(size({ showFiles: true }))
        .pipe(gulp.dest('dist/'));
    done();
}
function fromScss(done) {
    var sass = require('gulp-sass')(require('node-sass'));
    var cleanCSS = require('gulp-clean-css');
    var cssnano = require('cssnano');
    var csso = require('postcss-csso');
    var postcss = require('gulp-postcss');
    var size = require('gulp-size');
    var gzip = require('gulp-gzip');
    return gulp.src('src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({ level: 2 }))
        .pipe(postcss([cssnano({ preset: 'advanced' }), csso]))
        .pipe(size({ showFiles: true }))
        .pipe(gulp.dest('dist/'))
        .pipe(gzip())
        .pipe(size({ showFiles: true }))
        .pipe(gulp.dest('dist/'));
    done();
}

gulp.task('watch', function(){
    gulp.series(['default', 'from-scss']);
    gulp.watch('src/**/*.scss').on('change', gulp.series('from-scss'));
    gulp.watch('src/*.css').on('change', gulp.series('default'));
})