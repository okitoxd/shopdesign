'use strict'

const gulp = require('gulp')
const connect = require('gulp-connect')
const stylus = require('gulp-stylus')
const nib = require('nib')

gulp.task('serverDev', function () {
	connect.server({
		root: './build',
		livereload: true
	})
})

gulp.task('css', function (){
	gulp.src('./src/styles/main.styl')
		.pipe(stylus({
			use : nib(),
			'include css': true
		}))
		.pipe(gulp.dest('./build/css'))
		.pipe(connect.reload())
})

gulp.task('javascript', function (){
	gulp.src('./src/scripts/*.js')
		.pipe(gulp.dest('./build/js'))
		.pipe(connect.reload())
})

gulp.task('html', function () {
	gulp.src('./src/views/**/*.html')
		.pipe(gulp.dest('./build'))
		.pipe(connect.reload())
})

gulp.task('extra', function () {
	gulp.src('./src/extras/*.*')
		.pipe(gulp.dest('./build'))
		.pipe(connect.reload())
})

gulp.task('assets', function () {
	gulp.src('./src/assets/**/*.*')
		.pipe(gulp.dest('./build/assets'))
})

gulp.task('watch', function () {
	gulp.watch(['./src/views/**/*.html'], ['html']);
	gulp.watch(['./src/extras/**/*.*'], ['extra']);
	gulp.watch(['./src/styles/**/*.styl'], ['css']);
	gulp.watch(['./src/scripts/**/*.js'], ['javascript']);
})

gulp.task('build', ['css', 'javascript', 'html', 'assets', 'extra'])

gulp.task('default', ['serverDev', 'build', 'watch'])
