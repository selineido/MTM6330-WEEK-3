const gulp = require('gulp')

const gulp = require('gulp-sass')

gulp.task('sass', function() {
  return gulp

    .src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))

})
