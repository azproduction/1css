# 1CSS
[![NPM Version](https://badge.fury.io/js/1css.png)]
(https://npmjs.org/package/1css)
[![Build Status](https://travis-ci.org/azproduction/1css.png?branch=master)]
(https://travis-ci.org/azproduction/1css)
[![Coverage Status](https://coveralls.io/repos/azproduction/1css/badge.png?branch=master)]
(https://coveralls.io/r/azproduction/1css)
[![Dependency Status](https://gemnasium.com/azproduction/1css.png)]
(https://gemnasium.com/azproduction/1css)

[Live example](http://azproduction.ru/1css/)

Название читается как «один, эс-как-русская-эс, эс-как-доллар, эс-как-доллар».

1CSS это революционно новый язык, который компилируется в CSS, Stylus, SASS, LESS и любые другие форматы препроцессоров CSS.
В отличие от всех существующих препроцессоров CSS для его написания используется кириллица и слова русского языка.

Планируется поддержка склонения слов в значениях свойств (синий, синяя, синее) и правильный порядок слов и склонение в свойствах (тень-текста вместо текст-тень).

## Install

`npm i 1css` for node.js and `<script src="dist/1css.min.js"></script>` for browser

## Usage

Node
```js
var oneCss = require('1css');

oneCss.decode(oneCss.encode('div{font: Arial 1px red;}'));
```

Browser
```js
window['1css'].decode(window['1css'].encode('div{font: Arial 1px red;}'));
```

## Authors

  * @azproduction
  * @axlerk
  * @outring
  * @olmokhov_ru
