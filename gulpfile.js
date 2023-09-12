const gulp = require('gulp');

// // Convertation of scss to css
// const plumber = require("gulp-plumber");
// const sass = require('gulp-sass')(require('sass'));
// const postcss = require('gulp-postcss');
// const autoprefixer = require('autoprefixer');
// const sourcemaps = require('gulp-sourcemaps');

// // Server
// const sync = require("browser-sync").create();

// //------------------------ Convertation of scss to css -------------------------

// const styles =() => {
//   return gulp.src("source/sass/style.scss")
//   .pipe(plumber())                                // Finding mistakes
//   .pipe(sourcemaps.init())
//   .pipe(sass())                                   // Convert scss to css
//   .pipe(postcss([
//     autoprefixer()                                // Add vendor prefixes to CSS
//   ]))
//   .pipe(sourcemaps.write("."))
//   .pipe(gulp.dest("source/css"))
// }

// exports.styles=styles


// //------------------------ Server -------------------------

// const server =(done)=>{
//   sync.init({
//     server: {
//       baseDir: 'source'
//     },
//     open: "true",
//     cors: true,
//     notify: false,
//     ui: false,
//   });
//   done()
// }

// exports.server=server

// const browsersyncReload=(done)=>{
//   sync.reload();
//   done()

// }



// //------------------------ Watcher -------------------------

// const watcher = () =>{
//   gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
//   gulp.watch("source/*.html",gulp.series(browsersyncReload))
//   gulp.watch("source/css/*.css",gulp.series(browsersyncReload))
// }

// exports.watcher=watcher





// exports.start=gulp.series(server,watcher)


