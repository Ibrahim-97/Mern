let mix = require('laravel-mix');



mix.react('./src/index.jsx', './public/js/main.js')
    .postCss('./src/main.css', 'public/css', [
        require('tailwindcss'),
    ])