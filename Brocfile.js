/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');

var app = new EmberApp({
  modals: {
    layout: true,
    style: true,
    animation: 'scale'
  }
  //,
  //select2: {
  //  includeAssets: false
  //}
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

var html5shiv = pickFiles('bower_components/html5shiv/dist', {
  srcDir: '/',files: ['**/html5shiv.min.js'], destDir: '/assets'
});
var respond = pickFiles('bower_components/respond/dest', {
  srcDir: '/',files: ['**/respond.min.js'],destDir: '/assets'
});
//bootstrap
var bootstrap = pickFiles('bower_components/bootstrap/dist/css/', {
  srcDir: '/',files: ['**/bootstrap.min.css'],destDir: '/assets'
});
app.import('bower_components/Modernizr/modernizr.js');

app.import('bower_components/bootstrap/dist/js/bootstrap.js');
app.import('bower_components/select2-bootstrap-css/select2-bootstrap.css');

if (app.env === 'development') {
  app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', { destDir: 'assets' });
}

app.import('bower_components/parallax.js/parallax.js');

app.import('bower_components/slider-pro/dist/css/slider-pro.css');
app.import('bower_components/slider-pro/dist/js/jquery.sliderPro.js');
var sliderPro = pickFiles('bower_components/slider-pro/dist/css/images', {
  srcDir: '/',
  files: ['**/*.*'],
  destDir: '/images/sliderPro'
});


//fontello
app.import('vendor/fontello/css/icon_set_1.css');
app.import('vendor/fontello/css/fontello.css');
var extraAssets = pickFiles('vendor/fontello/font', {
  srcDir: '/',
  files: ['**/*.*'],
  destDir: '/font'
});

app.import('bower_components/ember-uploader/dist/ember-uploader.js');

//owl-carousel
app.import('bower_components/owl-carousel/owl-carousel/owl.carousel.css');
app.import('bower_components/owl-carousel/owl-carousel/owl.theme.css');
app.import('bower_components/owl-carousel/owl-carousel/owl.carousel.js');

//jquery-auto-complete
app.import('bower_components/jquery-auto-complete/jquery.auto-complete.js');

//full-calendar
app.import('bower_components/fullcalendar/dist/fullcalendar.css');
app.import('bower_components/fullcalendar/dist/fullcalendar.js');

module.exports = app.toTree([bootstrap,html5shiv,respond,sliderPro,extraAssets]);
