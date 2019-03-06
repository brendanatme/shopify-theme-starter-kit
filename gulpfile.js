const { src, dest, series, watch } = require('gulp');
const scss = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');

const isDev = false;
const SRC_DIR = 'src';
const DEST_DIR = 'theme/assets';
const CSS_GLOB = `${SRC_DIR}/scss/**/*.scss`;
const JS_GLOB = `${SRC_DIR}/js/**/*.js`;

function css() {
  return src(CSS_GLOB)
    .pipe(scss())
    .pipe(autoprefixer({
      browsers: [
        '> 1%',
        'last 2 versions',
        'ie >= 9'
      ],
      cascade: false
    }))
    .pipe(minifyCSS())
    .pipe(dest(DEST_DIR))
}

function js() {
  return src(JS_GLOB, { sourcemaps: isDev })
    .pipe(concat('custom.js'))
    .pipe(uglify())
    .pipe(dest(DEST_DIR, { sourcemaps: isDev }))
}

function watchAll() {
  watch(CSS_GLOB, series(css)); 
  watch(JS_GLOB, series(js)); 
}

exports.default = watchAll;
