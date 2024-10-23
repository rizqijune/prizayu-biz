let mix = require('laravel-mix');

mix
  .js('src/js/app.js', 'js')
  .js('src/js/app-defer.js', 'js')
  .postCss('src/css/styles.css', 'css/app.css', [
    require("tailwindcss")
  ])
  .postCss('src/css/fonts.css','css/fonts.css')
  .options({
    processCssUrls: false
  })
  .extract()
  .setPublicPath('')
  .browserSync({
    proxy: '127.0.0.1',
    open: false,
    reloadDelay: 3000,
    files: [
      'templates/**/*.html.twig',
      'src/**/*.js',
      'src/**/*.css'    ]
});
