import gulp from 'gulp';
import browserSync, {init, reload} from 'browser-sync';
//import chokidarEvEmitter from 'chokidar-socket-emitter';
import paths from '../paths';

//chokidarEvEmitter({port: 9080})
// Watch files for changes & reload
gulp.task('serve', ['styles', 'styleguide', 'templates', 'esdoc'], () => {
  init({
    notify: false,
    // Customize the BrowserSync console logging prefix
    logPrefix: 'PF',
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    //server: ['.tmp', 'app']
    server: {
      baseDir: [paths.tmp, paths.root],
      routes: paths.serveAltPaths
    }
  });

  gulp.watch([paths.templates], ['templates', reload]);
  //gulp.watch([paths.templatesNunjucks], ['nunjucks', reload]);
  //gulp.watch(['./app/**/*.md'], ['styleguide', reload]);
  gulp.watch(paths.styles, ['styles', 'styleguide']);
  gulp.watch([paths.scripts], ['eslint', 'esdoc']);
  gulp.watch(paths.images, reload);
  console.log(
        '\nDeveloper mode!\n\nSC5 Styleguide available at http://localhost:3000/\n'
    );
});

// Build and serve the output from the dist build
gulp.task('serve:dist', ['default'], () => {
  init({
    notify: false,
    logPrefix: 'PF',
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: paths.output,
    baseDir: paths.output
  });
});
