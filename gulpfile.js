var gulp = require('gulp'),
    sass = require('gulp-sass');

var srcDir = './src',
    srcScss = srcDir + '/scss',
    srcJs = srcDir + '/js',
	srcImg = srcDir + '/images',
    distDirectory = './dist',
    distScss = distDirectory + '/css'
    distJs = distDirectory + '/js'
    distImg = distScss + '/images';
/**
 * Build the sass
  */
function buildSass(){
    return gulp.src(srcScss + '/theme.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(distScss));
}

function buildJavascript(){
    // For now just copy the file
    return gulp.src(srcJs + '/theme.js')
        .pipe(gulp.dest(distJs));
}

function copyImages(){
	// For now just copy the file
    return gulp.src(srcImg + '/*.png')
        .pipe(gulp.dest(distImg));
}

gulp.task('sass', buildSass);
gulp.task('images', copyImages);
gulp.task('javascript', buildJavascript);
gulp.task('default',['sass', 'javascript', 'images']);

gulp.task('watch',function(){
    gulp.watch(srcScss + '/**/*.scss', ['sass']);
    gulp.watch(srcJs + '/**/*.js', ['javascript']);
});
