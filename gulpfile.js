var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require("gulp-autoprefixer"),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify');
	imagemin = require('gulp-imagemin');
	cleanCSS = require('gulp-clean-css');
gulp.task('styles',function(){
	gulp.src('./src/components/*.scss')		
	.pipe(sass())		
	.pipe(autoprefixer('last 2 version'))
	.pipe(concat('main.css'))
	.pipe(gulp.dest('./dist/css'))
	.pipe(rename({suffix: '.min'}))
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest('./dist/css'))
	.pipe(notify('Css  style task complete'))
})