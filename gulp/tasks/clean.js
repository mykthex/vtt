var gulp = require('gulp');
var del = require('del');
var config = require('../config.js');

gulp.task('clean', function(callback) {
    return del([config.build], callback);
});

gulp.task('clean:js', function(callback) {
    return del([config.build+'js'], callback);
});

gulp.task('clean:img', function(callback) {
    return del([config.build+'img'], callback);
});

gulp.task('clean:sass', function(callback) {
    return del([config.build+'css'], callback);
});

gulp.task('clean:twig', function(callback) {
    return del([config.build+'*.html'], callback);
});

gulp.task('clean:svg', function(callback) {
    return del([config.build+'svg'], callback);
});

gulp.task('clean:twig', function(callback) {
    return del([config.build+'*.html'], callback);
});
