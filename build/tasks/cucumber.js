var gulp = require('gulp');
var paths = require('../paths');
var exec = require('child_process').exec;

// outputs changes to files to the console
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

function execProtractor() {
  exec('./node_modules/.bin/protractor', function(err, stdout, stderr) {
    console.log(stdout);
  });
}

gulp.task('cucumber', function() {
  execProtractor();
  gulp.watch(paths.e2eSpecsSrc, execProtractor).on('change', reportChange);
  gulp.watch(paths.source, ['build-system', execProtractor]).on('change', reportChange);
  gulp.watch(paths.html, ['build-html', execProtractor]).on('change', reportChange);
  gulp.watch(paths.css, ['build-css', execProtractor]).on('change', reportChange);
});
