var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var browserSync = require('browser-sync');
var del = require('del');
var wiredep = require('wiredep').stream;

var browserify = require('browserify');
var source = require('vinyl-source-stream');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('styles', () => {
  return gulp.src('app/styles/*.css')
    .pipe($.sourcemaps.init())
    .pipe($.autoprefixer({browsers: ['last 1 version']}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({stream: true}));
});

function lint(files, options) {
  return () => {
    return gulp.src(files)
      .pipe(reload({stream: true, once: true}))
      .pipe($.eslint(options))
      .pipe($.eslint.format())
      .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
  };
}

const testLintOptions = {
  env: {
    mocha: true
  }
};

gulp.task('lint', lint('app/scripts/**/*.js'));
gulp.task('lint:test', lint('test/spec/**/*.js', testLintOptions));

gulp.task('browserify', function() {
  return browserify('app/scripts/app.js')
    .bundle()
    .pipe(source('scripts/app.js'))
    .pipe(gulp.dest('.tmp'))
    .pipe(gulp.dest('dist/issuetracker'));
});

gulp.task('html', ['styles', 'browserify'], () => {
  const assets = $.useref.assets({searchPath: ['.tmp', 'app', '.']});
  return gulp.src('app/*.html')
    .pipe(assets)
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.minifyCss({compatibility: '*'})))
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true})))
    .pipe(gulp.dest('dist/issuetracker'));
});

gulp.task('images', () => {
  return gulp.src('app/images/**/*')
    .pipe($.if($.if.isFile, $.cache($.imagemin({
        progressive: true,
        interlaced: true,
        // don't remove IDs from SVGs, they are often used
        // as hooks for embedding and styling
        svgoPlugins: [{cleanupIDs: false}]
      }))
      .on('error', function (err) {
        console.log(err);
        this.end();
      })))
    .pipe(gulp.dest('dist/issuetracker/images'));
});

gulp.task('fonts', () => {
  return gulp.src(require('main-bower-files')({
      filter: '**/*.{eot,svg,ttf,woff,woff2}'
    }).concat('app/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/issuetracker/fonts'));
});

gulp.task('extras', () => {
  return gulp.src([
    'app/*.*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist/issuetracker'));
});

gulp.task('mustache', () => {
  return gulp.src('app/templates/**/*.mustache')
    .pipe($.hoganPrecompile())
    .pipe($.declare({
        namespace: 'templates',
        noRedeclare: true
      })
    )
    .pipe($.concat('templates.js'))
    .pipe(gulp.dest('.tmp/templates'))
    .pipe(gulp.dest('dist/issuetracker/templates'));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist/issuetracker/fonts', 'dist/issuetracker/scripts', 'dist/issuetracker/styles', 'dist/issuetracker/templates']));

gulp.task('serve', ['browserify', 'styles', 'fonts', 'mustache'], () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch([
    'app/*.html',
    'app/scripts/**/*.js',
    'app/images/**/*',
    '.tmp/templates/templates.js',
    '.tmp/fonts/**/*'
  ]).on('change', reload);

  gulp.watch('app/scripts/**/*.js', ['browserify']);
  gulp.watch('app/styles/**/*.css', ['styles']);
  gulp.watch('app/fonts/**/*', ['fonts']);
  gulp.watch('app/templates/**/*.mustache', ['mustache']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
});

gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist/issuetracker']
    }
  });
});

gulp.task('serve:test', () => {
  browserSync({
    notify: false,
    port: 9000,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('test/spec/**/*.js').on('change', reload);
  gulp.watch('test/spec/**/*.js', ['lint:test']);
});

// inject bower components
gulp.task('wiredep', () => {
  gulp.src('app/*.html')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('build', ['html', 'images', 'fonts', 'mustache', 'extras'], () => {
  return gulp.src('dist/issuetracker/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
