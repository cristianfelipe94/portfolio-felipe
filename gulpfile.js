/**
 * Basic gulp file for static site development.
 *
 */
/* eslint-env node */

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const connect = require('gulp-connect');
const open = require('gulp-open');
const concat = require('gulp-concat');

//
// Javascript linting.
//
gulp.task('lint', () => (
  gulp.src('src/js/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
));

//
// Dev server.
//
gulp.task('connect', () => {
  connect.server({
    port: 3000,
    livereload: true,
    root: 'src',
  });
});

gulp.task('open', () => {
  gulp.src(__filename)
    .pipe(open({ uri: 'http://localhost:3000/' }));
});

gulp.task('reload', () => {
  gulp.src(__filename)
    .pipe(connect.reload());
});

//
// Watch task.
//
gulp.task('watch', () => {
  gulp.watch('src/**/*.{html,css,js}', ['reload']);
  gulp.watch('src/js/**/*.js', ['lint']);
});


gulp.task('scripts', function() {
	return gulp.src([
		'src/js/getterElements.js',
		'src/js/libraries.js',
		'src/js/apiGithub.js',
		'src/js/closeOpen.js',
		'src/js/setBackground.js',
		'src/js/setTabs.js',
		'src/js/setPortfolio.js',
		'src/js/setDiploma.js',
	])
	.pipe(concat('concat.js'))
	.pipe(gulp.dest('./src/concat-js'));
});

gulp.task('start', ['connect', 'open', 'lint', 'watch', 'scripts']);
