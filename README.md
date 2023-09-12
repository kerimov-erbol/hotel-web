# hotel-web
# Основные возможности и используемые технологии

* Система сборки [Gulp](https://gulpjs.com/)

* CSS-препроцессор [SCSS](http://sass-lang.com/) и [Autoprefixer](https://autoprefixer.github.io/ru/).

* Оптимизация изображений.

* Генерация PNG- и SVG-спрайтов.

* Встроенное определение устройства, браузера и операционной системы пользователя.

* Проверка кода линтерами [stylelint](https://stylelint.io/), [ESLint](http://eslint.org/)).

* [Browsersync](https://www.browsersync.io/), автоматическое обновление страницы при разработке.

* Возможность быстро создать архив проекта.

* Множество дополнительных параметров сборки.


# Подготовка среды  

## Git
    * Clone repsoitory 
        [git clone https://github.com/kerimov-erbol/hotel-web.git]
    * create .gitignore file

## npm
    * Initialize npm (node package manager)  and create package.json file
        [npm init]

    * Install gulp (a toolkit to automate & enhance your workflow) 
        *   Install gulp globaly 
            [npm install --global gulp-cli]    
        *   Install the gulp package in your devDependencies                              
            [npm install --save-dev gulp]
    
### Gulp 

#### Scss
    *   gulp-plumber +
    *   sourcemap+
    *   gulp-sass+
    *   psotscc
        *   autoprefixer <!--   -->  
        *   csso     - <!--   -->       <!-- Оптимизаци/Минимизация css  -->
        *   rename  -                           <!-- Переименоавеие минифицированного кода  -->

#### Проверка кода линтерами (stylelint, ESLint).
    *   slylelint 
    
#### Browsersync, автоматическое обновление страницы при разработке.
    *   browser-sync

#### Оптимизация изображений.
    *   gulp-imagemin

#### Создание webp
    *   gulp-webp 

#### Собираем svg спрайт
    *   gulp-store





