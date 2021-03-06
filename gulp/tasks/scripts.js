import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import paths from '../paths';

const $ = gulpLoadPlugins();

// Bundle javascripts
gulp.task('scripts', () => {
  return gulp.src('')
    .pipe($.shell(`jspm bundle-sfx ${paths.scriptMain} ${paths.scriptMainOutput} --minify --source-map-contents`))
    .pipe($.size({title: 'scripts'}));
});

