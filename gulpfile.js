var gulp = require('gulp'),
    sass = require('gulp-sass');

var srcDir = './src',
    srcScss = srcDir + '/scss',
    srcJs = srcDir + '/js',
    distDirectory = './dist',
    distScss = distDirectory + '/css'
    distJs = distDirectory + '/js';
/**
 * Build the sass
  */
function buildSass(){
    return gulp.src(srcScss + '/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(distScss));
}

function buildJavascript(){
    // For now just copy the file
    return gulp.src(srcJs + '/style.js')
        .pipe(gulp.dest(distJs));
}

gulp.task('sass', buildSass);
gulp.task('javascript', buildJavascript);
gulp.task('default',['sass', 'javascript']);

gulp.task('watch',function(){
    gulp.watch(srcScss + '/**/*.scss', ['sass']);
    gulp.watch(srcJs + '/**/*.js', ['javascript']);
});
