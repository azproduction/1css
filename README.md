# 1css
[![NPM Version](https://badge.fury.io/js/1css.png)]
(https://npmjs.org/package/1css)

[![Build Status](https://travis-ci.org/azproduction/1css.png?branch=master)]
(https://travis-ci.org/azproduction/1css)

[![Coverage Status](https://coveralls.io/repos/azproduction/1css/badge.png?branch=master)]
(https://coveralls.io/r/azproduction/1css)

[![Dependency Status](https://gemnasium.com/azproduction/1css.png)]
(https://gemnasium.com/azproduction/1css)

Название читается как «один, эс-как-русская-эс, эс-как-доллар, эс-как-доллар».

1CSS это революционно новый язык, который компилируется в CSS, Stylus, SASS, LESS и любые другие форматы препроцессоров CSS.
В отличии от всех существующих препроцессоров CSS для его написания используется кириллица и слова русского языка.

Планируется поддержка склонения слов в значениях свойств(синий, синяя, синее) и правильный порядок слов и склонение в свойствах (тень-текста вместо текст-тень).

## Example

### Чистый CSS с 1CSS синтаксисом

```
@медия печать {
    * {
        цвет: черный !важно;
        текст-тень: нету !важно;
        фон: прозрачный !важно;
        коробка-тень: нету !важно;
    }

    я,
    я:посещен {
        текст-украшение: подчеркнут;
    }

    я[href]:после {
        содержимое: " (" аттр(href) ")";
    }

    аббр[title]:после {
        содержимое: " (" аттр(title) ")";
    }
}

.alert-dismissable .close {
  позиция: относительный;
  верх: -2тч;
  право: -21тч;
  цвет: наследовать;
}

.progress.active .progress-bar {
   анимация: progress-bar-stripes 2сек линейный бесконечный;
   цвет: №000;
}

@ключевыекадры progress-bar-stripes {
    от {
        фон-позиция: 40тч 0;
    }
    до {
        фон-позиция: 0 0;
    }
}
```

### Stylus с 1CSS синтаксисом

```
тело
  шрифт 12тч Helvetica, Arial, без-засечек

я.button
  рамка-радиус 5тч
```

## Authors

  * @azproduction
  * @axlerk
  * @outring
  * @olmokhov_ru

