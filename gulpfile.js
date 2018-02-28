const gulp = require('gulp');
const babel = require('gulp-babel');
const gulpif = require('gulp-if');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const minify = require('gulp-html-minify');
const cheerio = require('gulp-cheerio');

var condition = function(f){
  if (f.path.match('common.js')){
    return true;
  } else if (f.path.match('muiJs')){
    return false
  }
  return true;
};

var conditionCss = function(f){
  if (f.path.match('common.css')){
    return true;
  } else if (f.path.match('muiCss')||f.path.match('fonts')){
    return false
  }
  return true;
};


// 压缩css
gulp.task('convertCSS', function(){
  return gulp.src(['devHtml/css/**/*.css'])
    .pipe(gulpif(conditionCss,cssnano({zindex:false})))
    .pipe(gulp.dest('html/css'))
});

// 编译并压缩js
gulp.task('convertJS', function(){
  return gulp.src(['devHtml/js/**/*.js'])
    .pipe(gulpif(condition,babel({
      presets: ['es2015']
    })))
    .pipe(gulpif(condition,uglify()))
    .pipe(gulp.dest('html/js'))
});
// 压缩html
gulp.task('convertHTML', function(){
  return gulp.src('devHtml/*.html')
    .pipe(cheerio(function ($) {
      $('script').each(function () {
        const script = $(this);
        const src = script.attr('src');
        if(script.attr('src') === 'js/muiJs/vue.js'){
          $(this).attr('src','js/muiJs/vue.min.js?timestamp='+new Date().getTime())
        }else{
          $(this).attr('src',src+'?timestamp='+new Date().getTime())
        }
      })
    }))
    .pipe(minify())
    .pipe(gulp.dest('html'))
});
// 监视文件变化，自动执行任务
gulp.task('watch', function(){
  gulp.watch('devHtml/*.html', ['convertHTML']);
  gulp.watch('devHtml/css/**/*.css', ['convertCSS']);
  gulp.watch('devHtml/js/**/*.js', ['convertJS']);
});
gulp.task('start', ['convertHTML','convertJS','convertCSS', 'watch']);