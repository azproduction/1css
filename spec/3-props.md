## Свойства

Поддерживаются все CSS свойства и любые миксины из других препроцессоров. Для каждого из свойств 1CSS есть однозначно одно свойство CSS. Таблицы соответствий преведены ниже.

###Animation Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
@ключевыекадры | @keyframes | Specifies the animation
анимация | animation | A shorthand property for all the animation properties below, except the animation-play-state property
имя-анимации | animation-name | Specifies a name for the @keyframes animation
длительность-анимации | animation-duration | Specifies how many seconds or milliseconds an animation takes to complete one cycle
функция-времени-анимации | animation-timing-function | Specifies the speed curve of the animation
задержка-анимации | animation-delay | Specifies when the animation will start
число-повторов-анимации | animation-iteration-count | Specifies the number of times an animation should be played
направление-анимации | animation-direction | Specifies whether or not the animation should play in reverse on alternate cycles
статус-проигрывания-анимации | animation-play-state | Specifies whether the animation is running or paused

###Background Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
фон | background | Sets all the background properties in one declaration
положение-фона | background-attachment | Sets whether a background image is fixed or scrolls with the rest of the page
цвет-фона | background-color | Sets the background color of an element
изображение-фона | background-image | Sets the background image for an element
позиция-фона | background-position | Sets the starting position of a background image
повтор-фона | background-repeat | Sets how a background image will be repeated
обрезка-фона | background-clip | Specifies the painting area of the background
начало-фона | background-origin | Specifies the positioning area of the background images
размер-фона | background-size | Specifies the size of the background images

###Border and Outline Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
граница | border | Sets all the border properties in one declaration
нижняя-граница | border-bottom | Sets all the bottom border properties in one declaration
цвет-нижней-границы | border-bottom-color | Sets the color of the bottom border
стиль-нижней-границы | border-bottom-style | Sets the style of the bottom border
толщина-нижней-границы | border-bottom-width | Sets the width of the bottom border
цвет-границы | border-color | Sets the color of the four borders
левая-граница | border-left | Sets all the left border properties in one declaration
цвет-левой-границы | border-left-color | Sets the color of the left border
стиль-левой-границы | border-left-style | Sets the style of the left border
толщина-левой-границы | border-left-width | Sets the width of the left border
правая-граница | border-right | Sets all the right border properties in one declaration
цвет-правой-границы | border-right-color | Sets the color of the right border
стиль-правой-границы | border-right-style | Sets the style of the right border
толщина-правой-границы | border-right-width | Sets the width of the right border
стиль-границы | border-style | Sets the style of the four borders
верхняя-граница | border-top | Sets all the top border properties in one declaration
цвет-верхней-границы | border-top-color | Sets the color of the top border
стиль-верхней-границы | border-top-style | Sets the style of the top border
толщина-верхней-границы | border-top-width | Sets the width of the top border
толщина-границы | border-width | Sets the width of the four borders
контур | outline | Sets all the outline properties in one declaration
цвет-контура | outline-color | Sets the color of an outline
стиль-контура | outline-style | Sets the style of an outline
толщина-контура | outline-width | Sets the width of an outline
радиус-нижней-левой-рамки | border-bottom-left-radius | Defines the shape of the border of the bottom-left corner
радиус-нижней-правой-рамки | border-bottom-right-radius | Defines the shape of the border of the bottom-right corner
изображение-рамки | border-image | A shorthand property for setting all the border-image-* properties
начало-изображения-рамки | border-image-outset | Specifies the amount by which the border image area extends beyond the border box
повтор-изображения-рамки | border-image-repeat | Specifies whether the image-border should be repeated, rounded or stretched
смещение-изображения-рамки | border-image-slice | Specifies the inward offsets of the image-border
источник-изображения-рамки | border-image-source | Specifies an image to be used as a border
толщина-изображения-рамки | border-image-width | Specifies the widths of the image-border
радиус-рамки | border-radius | A shorthand property for setting all the four border-*-radius properties
радиус-верхней-левой-рамки | border-top-left-radius | Defines the shape of the border of the top-left corner
радиус-верхней-правой-рамки | border-top-right-radius | Defines the shape of the border of the top-right corner
разрыв-оформления-блока | box-decoration-break |
тень-блока | box-shadow | Attaches one or more drop-shadows to the box

###Box Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
переполнение-икс | overflow-x | Specifies whether or not to clip the left/right edges of the content, if it overflows the element's content area
переполнение-игрек | overflow-y | Specifies whether or not to clip the top/bottom edges of the content, if it overflows the element's content area
стиль-переполнения | overflow-style | Specifies the preferred scrolling method for elements that overflow
поворот | rotation | Rotates an element around a given point defined by the rotation-point property
точка-поворота | rotation-point | Defines a point as an offset from the top left border edge

###Color Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
цветовой-профиль | color-profile | Permits the specification of a source color profile other than the default
непрозрачность | opacity | Sets the opacity level for an element
намерение-отрисовки | rendering-intent | Permits the specification of a color profile rendering intent other than the default

###Content for Paged Media Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
метка-зякладки | bookmark-label | Specifies the label of the bookmark
уровень-закладки | bookmark-level | Specifies the level of the bookmark
цель-закладки | bookmark-target | Specifies the target of the bookmark link
плавающий-сдвиг | float-offset | Pushes floated elements in the opposite direction of the where they have been floated with float
дефисный-после | hyphenate-after | Specifies the minimum number of characters in a hyphenated word after the hyphenation character
дефисный-до | hyphenate-before | Specifies the minimum number of characters in a hyphenated word before the hyphenation character
дефисный-символ | hyphenate-character | Specifies a string that is shown when a hyphenate-break occurs
дефисный-стрики | hyphenate-lines | Indicates the maximum number of successive hyphenated lines in an element
дифисный-ресурс | hyphenate-resource | Specifies a comma-separated list of external resources that can help the browser determine hyphenation points
дифисы | hyphens | Sets how to split words to improve the layout of paragraphs
разрешение-изображения | image-resolution | Specifies the correct resolution of images
маркировка | marks | Adds crop and/or cross marks to the document
набор-строк | string-set |

###Dimension Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
высота | height | Sets the height of an element
макс-высота | max-height | Sets the maximum height of an element
макс-ширина | max-width | Sets the maximum width of an element
мин-высота | min-height | Sets the minimum height of an element
мин-ширина | min-width | Sets the minimum width of an element
ширина | width | Sets the width of an element

###Flexible Box Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
выравнивание-блока | box-align | Specifies how to align the child elements of a box
направление-блока | box-direction | Specifies in which direction the children of a box are displayed
флекс-блок | box-flex | Specifies whether the children of a box is flexible or inflexible in size
группа-флекс-блока | box-flex-group | Assigns flexible elements to flex groups
линии0блока | box-lines | Specifies whether columns will go onto a new line whenever it runs out of space in the parent box
порядок-группы-бокса | box-ordinal-group | Specifies the display order of the child elements of a box
ориентация-бокса | box-orient | Specifies whether the children of a box should be laid out horizontally or vertically
пак-бокса | box-pack | Specifies the horizontal position in horizontal boxes and the vertical position in vertical boxes

###Font Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
шрифт | font | Sets all the font properties in one declaration
семейство-шрифта | font-family | Specifies the font family for text
размер-шрифта | font-size | Specifies the font size of text
стиль-шрифта | font-style | Specifies the font style for text
вид-шрифта | font-variant | Specifies whether or not a text should be displayed in a small-caps font
вес-шрифта | font-weight | Specifies the weight of a font
@определение-шрифта | @font-face | A rule that allows websites to download and use fonts other than the "web-safe" fonts
подгонка-размера-шрифта | font-size-adjust | Preserves the readability of text when font fallback occurs
разрядка-шрифта | font-stretch | Selects a normal, condensed, or expanded face from a font family

###Generated Content Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
содержимое | content | Used with the :before and :after pseudo-elements, to insert generated content
инкремент-счетчика | counter-increment | Increments one or more counters
сброс-счетчика | counter-reset | Creates or resets one or more counters
кавычки | quotes | Sets the type of quotation marks for embedded quotations
обрезка | crop | Allows a replaced element to be just a rectangular area of an object, instead of the whole object
сдвинуть-на | move-to | Causes an element to be removed from the flow and reinserted at a later point in the document
политика-страницы | page-policy | Determines which page-based occurance of a given element is applied to a counter or string value

###Grid Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
колонки-сетки | grid-columns | Specifies the width of each column in a grid
ряды-сетки | grid-rows | Specifies the height of each column in a grid

###Hyperlink Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
цель | target | A shorthand property for setting the target-name, target-new, and target-position properties
имя-цели | target-name | Specifies where to open links (target destination)
новая-цель | target-new | Specifies whether new destination links should open in a new window or in a new tab of an existing window
позиция-цели | target-position | Specifies where new destination links should be placed

###Linebox Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
подгонка-выравнивания | alignment-adjust | Allows more precise alignment of elements
выравнивание-базовой  | alignment-baseline | Specifies how an inline-level element is aligned with respect to its parent
сдвиг-базовой | baseline-shift | Allows repositioning of the dominant-baseline relative to the dominant-baseline
домининация-базовой | dominant-baseline | Specifies a scaled-baseline-table
??? | drop-initial-after-adjust | Sets the alignment point of the drop initial for the primary connection point
??? | drop-initial-after-align | Sets which alignment line within the initial line box is used at the primary connection point with the initial letter box
??? | drop-initial-before-adjust | Sets the alignment point of the drop initial for the secondary connection point
??? | drop-initial-before-align | Sets which alignment line within the initial line box is used at the secondary connection point with the initial letter box
??? | drop-initial-size | Controls the partial sinking of the initial letter
??? | drop-initial-value | Activates a drop-initial effect
выравнивание-встроенного-блока | inline-box-align | Sets which line of a multi-line inline block align with the previous and next inline elements within a line
??? | line-stacking | A shorthand property for setting the line-stacking-strategy, line-stacking-ruby, and line-stacking-shift properties
??? | line-stacking-ruby | Sets the line stacking method for block elements containing ruby annotation elements
??? | line-stacking-shift | Sets the line stacking method for block elements containing elements with base-shift
??? | line-stacking-strategy | Sets the line stacking strategy for stacked line boxes within a containing block element
высота-текста | text-height | Sets the block-progression dimension of the text content area of an inline box

###List Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
стиль-списка | list-style | Sets all the properties for a list in one declaration
изображение-стиля-списка | list-style-image | Specifies an image as the list-item marker
позиция-стиля-списка | list-style-position | Specifies if the list-item markers should appear inside or outside the content flow
тип-стиля-списка | list-style-type | Specifies the type of list-item marker

###Margin Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
поле | margin | Sets all the margin properties in one declaration
поле-снизу | margin-bottom | Sets the bottom margin of an element
поле-слева | margin-left | Sets the left margin of an element
поле-справа | margin-right | Sets the right margin of an element
поле-сверху | margin-top | Sets the top margin of an element

###Marquee Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
направление-шатра | marquee-direction | Sets the direction of the moving content
количество-повторов-шатра | marquee-play-count | Sets how many times the content move
скорость-шатра | marquee-speed | Sets how fast the content scrolls
стиль-шатра | marquee-style | Sets the style of the moving content

###Multi-column Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
количество-колонок | column-count | Specifies the number of columns an element should be divided into
заполнение-колонок | column-fill | Specifies how to fill columns
зазор-колонок | column-gap | Specifies the gap between the columns
направляющая-колонок | column-rule | A shorthand property for setting all the column-rule-* properties
цвет-направляющей-колонок | column-rule-color | Specifies the color of the rule between columns
стиль-направляющей-колонок | column-rule-style | Specifies the style of the rule between columns
ширина-направляющей-колонок | column-rule-width | Specifies the width of the rule between columns
охват-колонок | column-span | Specifies how many columns an element should span across
ширина-колонок | column-width | Specifies the width of the columns
колонки | columns | A shorthand property for setting column-width and column-count

###Padding Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
отбивка | padding | Sets all the padding properties in one declaration
отбивка-снизу | padding-bottom | Sets the bottom padding of an element
отбивка-слева | padding-left | Sets the left padding of an element
отбивка-справа | padding-right | Sets the right padding of an element
отбивка-сверху | padding-top | Sets the top padding of an element

###Paged Media Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
??? | fit | Gives a hint for how to scale a replaced element if neither its width nor its height property is auto
??? | fit-position | Determines the alignment of the object inside the box
ориентация-изображения | image-orientation | Specifies a rotation in the right or clockwise direction that a user agent applies to an image
страница | page | Specifies a particular type of page where an element SHOULD be displayed
размер | size | Specifies the size and orientation of the containing box for page content

###Positioning Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
снизу | bottom | Specifies the bottom position of a positioned element
очистить | clear | Specifies which sides of an element where other floating elements are not allowed
обрезать | clip | Clips an absolutely positioned element
курсор | cursor | Specifies the type of cursor to be displayed
отображение | display | Specifies how a certain HTML element should be displayed
обтекание | float | Specifies whether or not a box should float
слева | left | Specifies the left position of a positioned element
переполнение | overflow | Specifies what happens if content overflows an element's box
положение | position | Specifies the type of positioning method used for an element (static, relative, absolute or fixed)
справа | right | Specifies the right position of a positioned element
сверху | top | Specifies the top position of a positioned element
видимость | visibility | Specifies whether or not an element is visible
зед-индекс | z-index | Sets the stack order of a positioned element

###Print Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
сироты | orphans | Sets the minimum number of lines that must be left at the bottom of a page when a page break occurs inside an element
разрыв-страницы-после | page-break-after | Sets the page-breaking behavior after an element
разрыв-страницы-до | page-break-before | Sets the page-breaking behavior before an element
разрыв-страницы-внутри | page-break-inside | Sets the page-breaking behavior inside an element
вдовы | widows | Sets the minimum number of lines that must be left at the top of a page when a page break occurs inside an element

###Ruby Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
??? | ruby-align | Controls the text alignment of the ruby text and ruby base contents relative to each other
??? | ruby-overhang | Determines whether, and on which side, ruby text is allowed to partially overhang any adjacent text in addition to its own base, when the ruby text is wider than the ruby base
??? | ruby-position | Controls the position of the ruby text with respect to its base
??? | ruby-span | Controls the spanning behavior of annotation elements

###Speech Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
??? | mark | A shorthand property for setting the mark-before and mark-after properties
??? | mark-after | Allows named markers to be attached to the audio stream
??? | mark-before | Allows named markers to be attached to the audio stream
??? | phonemes | Specifies a phonetic pronunciation for the text contained by the corresponding element
??? | rest | A shorthand property for setting the rest-before and rest-after properties
??? | rest-after | Specifies a rest or prosodic boundary to be observed after speaking an element's content
??? | rest-before | Specifies a rest or prosodic boundary to be observed before speaking an element's content
??? | voice-balance | Specifies the balance between left and right channels
??? | voice-duration | Specifies how long it should take to render the selected element's content
??? | voice-pitch | Specifies the average pitch (a frequency) of the speaking voice
??? | voice-pitch-range | Specifies variation in average pitch
??? | voice-rate | Controls the speaking rate
??? | voice-stress | Indicates the strength of emphasis to be applied
??? | voice-volume | Refers to the amplitude of the waveform output by the speech synthesises

###Table Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
схлапывание-границы | border-collapse | Specifies whether or not table borders should be collapsed
расстояние-границ | border-spacing | Specifies the distance between the borders of adjacent cells
сторона-подписи | caption-side | Specifies the placement of a table caption
пустые-ячейки | empty-cells | Specifies whether or not to display borders and background on empty cells in a table
макет-таблицы | table-layout | Sets the layout algorithm to be used for a table

###Text Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
цвет | color | Sets the color of text
направние | direction | Specifies the text direction/writing direction
мужбуквенный-пробел | letter-spacing | Increases or decreases the space between characters in a text
высота-линии | line-height | Sets the line height
выравнивание-текста | text-align | Specifies the horizontal alignment of text
оформление-текста | text-decoration | Specifies the decoration added to text
отступ-текста | text-indent | Specifies the indentation of the first line in a text-block
трансформация-текста | text-transform | Controls the capitalization of text
уникод-биди | unicode-bidi | Used together with the direction property to set or return whether the text should be overridden to support multiple languages in the same document
вертикальное-выравнивание | vertical-align | Sets the vertical alignment of an element
пробелы | white-space | Specifies how white-space inside an element is handled
межсловный-пробел | word-spacing | Increases or decreases the space between words in a text
висячая-пунктуация | hanging-punctuation | Specifies whether a punctuation character may be placed outside the line box
обрезка-пунктуации | punctuation-trim | Specifies whether a punctuation character should be trimmed
выравнивание-последней-строки | text-align-last | Describes how the last line of a block or a line right before a forced line break is aligned when text-align is "justify"
выключка-текста | text-justify | Specifies the justification method used when text-align is "justify"
контур-текста | text-outline | Specifies a text outline
переполнение-текста | text-overflow | Specifies what should happen when text overflows the containing element
тень-текста | text-shadow | Adds shadow to text
подгонка-размера-текста | text-size-adjust | ???
обертка-текста | text-wrap | Specifies line breaking rules for text
разрыв-слова | word-break | Specifies line breaking rules for non-CJK scripts
обертка-слова | word-wrap | Allows long, unbreakable words to be broken and wrap to the next line

###2D/3D Transform Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
трансформация | transform | Applies a 2D or 3D transformation to an element
точка-трансформации | transform-origin | Allows you to change the position on transformed elements
стиль-трансформации | transform-style | Specifies how nested elements are rendered in 3D space
перспектива | perspective | Specifies the perspective on how 3D elements are viewed
точка-перспективы | perspective-origin | Specifies the bottom position of 3D elements
видимость-задника | backface-visibility | Defines whether or not an element should be visible when not facing the screen

###Transition Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
переход | transition | A shorthand property for setting the four transition properties
свойство-перехода | transition-property | Specifies the name of the CSS property the transition effect is for
длительность-перехода | transition-duration | Specifies how many seconds or milliseconds a transition effect takes to complete
функция-вренеми-перехода | transition-timing-function | Specifies the speed curve of the transition effect
задержка-перехода | transition-delay | Specifies when the transition effect will start

###User-interface Properties
Свойство | Свойство в CSS | Описание
--- | --- | ---
представление | appearance | Allows you to make an element look like a standard user interface element
калибровка-блока | box-sizing | Allows you to define certain elements to fit an area in a certain way
иконка | icon | Provides the author the ability to style an element with an iconic equivalent
нав-вниз | nav-down | Specifies where to navigate when using the arrow-down navigation key
нав-индекс | nav-index | Specifies the tabbing order for an element
нав-влево | nav-left | Specifies where to navigate when using the arrow-left navigation key
нав-вправо | nav-right | Specifies where to navigate when using the arrow-right navigation key
нав-вверх | nav-up | Specifies where to navigate when using the arrow-up navigation key
смещение-контура | outline-offset | Offsets an outline, and draws it beyond the border edge
ресайз | resize | Specifies whether or not an element is resizable by the user
