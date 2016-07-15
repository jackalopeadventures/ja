var gulp = require('gulp'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    runSequence = require('run-sequence').use(gulp),
    templateCache = require('gulp-angular-templatecache'),
    flatten = require('gulp-flatten'),
    clean = require('gulp-clean'),
    chug = require( 'gulp-chug' ),
    sass = require('gulp-sass'),
    foreach = require('gulp-foreach'),
    webserver = require('gulp-webserver');

var paths = {
  componentsCss:  '../components/**/dist/component.css',
  componentsJs:   '../components/**/dist/component.js',
  componentsImg:  '../components/**/dist/img/*.*',
  componentDist:  '../components/**/dist',
  componentSrc:   '../components/**/src',
  componentsGulp: '../components/**/gulpfile.js',
  index:          './index.html',
  web:            '../web',
  sass:           './scss/**/*.scss',
  appjs:          './app/**/*.js',
  templates:      './app/**/*.html',
  img:            './img/**/*.*',
  lib:            './lib/**/*.*'
};


/************************************
* Common Tasks
************************************/
//  Runs all the tasks once
//    Useful to do after doing a git pull
gulp.task('default', function() {
  return runSequence( 'full-components-build', 'full-components-bundle', 'websrc-build');
});

//  Compile, Watch, Launch Server
//    While editing files in websrc this command will live reload those changes
gulp.task('serve', function () {
  runSequence('websrc-build', 'watch', 'startServer');
});


/************************************
* Combo Commands
************************************/
// websrc build
gulp.task('websrc-build', function(){
  runSequence('templates', 'appjs', 'sass', 'move-lib', 'move-img', 'move-index');
});

// Full Compenents Bundle
gulp.task('full-components-bundle', function(){
  runSequence('bundle-components-css', 'bundle-components-js', 'bundle-components-img');
})


/************************************
* Single Commands
************************************/
// Bundle all compents into one file
gulp.task('bundle-components-js', function() {
  return gulp.src(paths.componentsJs)
    .pipe(concat('components.js'))
    .pipe(gulp.dest(paths.web));
});

// Bundle css files into one file
gulp.task('bundle-components-css', function() {
  return gulp.src(paths.componentsCss)
    .pipe(concat('components.css'))
    .pipe(gulp.dest(paths.web));
});

// Pull all images into the img folder
gulp.task('bundle-components-img', function() {
  return gulp.src(paths.componentsImg)
    .pipe(flatten())
    .pipe(gulp.dest(paths.web + '/img'));
});

// Move index.html
gulp.task('move-index', function(){
  return gulp.src(paths.index)
  .pipe(gulp.dest(paths.web));
});

// Compile SASS
gulp.task('sass', function(done) {
  gulp.src(paths.sass)
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest(paths.web))
    .on('end', done);
});

// Compile JS
gulp.task('appjs', function() {
  return gulp.src(paths.appjs)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(paths.web))
});

// Compile Templates
gulp.task('templates', function () {
  return gulp.src(paths.templates)
   .pipe(templateCache({standalone: true}))
   .pipe(concat('templates.js'))
   .pipe(gulp.dest(paths.web));
});

// Move Lib
gulp.task('move-lib', function(){
  return gulp.src(paths.lib)
  .pipe(gulp.dest(paths.web + '/lib'));
});

// Move Img
gulp.task('move-img', function(){
  return gulp.src(paths.img)
  .pipe(gulp.dest(paths.web + '/img'));
});


// Full Clear
//    CAUTION, this will remove all dist folders and web folder.
gulp.task('full-clean', function () {
  gulp.src(paths.web, {read: false})
		.pipe(clean({force: true}));

  return gulp.src(paths.componentDist, {read: false})
		.pipe(clean({force: true}));
});


// Full Components Build
//    This will run all compents gulp default file
gulp.task('full-components-build', function () {
  return gulp.src( paths.componentsGulp )
    .pipe(foreach(function(stream, file){
      return stream
        .pipe(chug())
    }))
});

// Watches for any changes and runs the given task
gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.appjs, ['appjs']);
  gulp.watch(paths.templates, ['templates']);
  gulp.watch(paths.lib, ['move-lib']);
  gulp.watch(paths.img, ['move-img']);
  gulp.watch(paths.index, ['move-index']);
  gulp.watch(paths.componentsCss, ['bundle-components-css']);
  gulp.watch(paths.componentsJs, ['bundle-components-js']);
  gulp.watch(paths.componentsImg, ['bundle-components-img']);
});


// Web Server
gulp.task('startServer', function(){
  return gulp.src(paths.web)
    .pipe(webserver({
      port: 8001,
      livereload: {
        enable: true
      },
      directoryListing: false,
      open: true
    }));
});
