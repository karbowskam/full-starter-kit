// Imports
const gulp =          require('gulp');
const eslint =        require('gulp-eslint');
const cssValidator =  require('gulp-w3c-css');
const htmlValidator = require('gulp-w3c-html-validator');
const htmllint =      require('gulp-htmllint');
const fancyLog =      require('fancy-log');
const colors =        require('ansi-colors');
var map =             require('map-stream');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
const autoprefixer = require('gulp-autoprefixer');

const srcPathCSS =    "src/scss/*.scss";
const srcPathHTML =   "src/**/*.html";

// Tasks
const task = {
   validateJSLint() {
      return gulp.src(['src/js/*.js'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError()); 
   },
   validateCSS(){
      return gulp.src(srcPathCSS)
         .pipe(sass().on('error', sass.logError))
         .pipe( autoprefixer({} ) );
         
   },
   validateHtml() {
      return gulp.src(srcPathHTML)
         .pipe(htmlValidator())
         .pipe(htmlValidator.reporter());
   },
   validateHtmlLint(){
      return gulp.src(srcPathHTML)
         .pipe(htmllint({}, htmllintReporter));
   }
};

function fancy(module, msg, filepath, line, column, code){
   fancyLog(colors.cyan('[' + module + '] ') + colors.white(filepath + ' [' + line + ',' + column + ']: ') + colors.red('(' + code + ') ' + msg));
}

function htmllintReporter(filepath, issues) {
   if (issues.length > 0) {
       issues.forEach(function (issue) {
         fancy("gulp-htmllint", issue.msg, filepath, issue.line, issue.column, issue.code)
       });

       process.exitCode = 1;
   }
}

// Gulp
gulp.task('validate-js-lint', task.validateJSLint);
gulp.task('validate-html', task.validateHtml);
gulp.task('validate-html-lint', task.validateHtmlLint);
gulp.task('validate-css', task.validateCSS);