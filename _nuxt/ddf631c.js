(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{479:function(t,e,o){"use strict";o(45),o(56);var n={name:"MicroMarkupArticle",props:{dateModified:{type:String},datePublished:{type:String},imageArticle:{type:String}}},c=o(24),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("meta",{attrs:{itemprop:"image",content:t.imageArticle}}),t._v(" "),e("meta",{attrs:{itemprop:"dateModified",content:t.dateModified}}),t._v(" "),e("meta",{attrs:{itemscope:"",itemprop:"mainEntityOfPage",itemid:"".concat(t.$config.SITE_URL,"/").concat(t.$route.name)}}),t._v(" "),e("meta",{attrs:{itemprop:"datePublished",content:t.datePublished}}),t._v(" "),e("div",{attrs:{itemprop:"author",itemscope:"",itemtype:"http://schema.org/Person"}},[e("meta",{attrs:{itemprop:"name",content:t.$config.SITE_NAME_EN}})]),t._v(" "),e("div",{attrs:{itemprop:"publisher",itemscope:"",itemtype:"https://schema.org/Organization"}},[e("div",{attrs:{itemprop:"logo",itemscope:"",itemtype:"https://schema.org/ImageObject"}},[e("img",{staticStyle:{display:"none"},attrs:{itemprop:"url",src:t.$config.LOGO_URL,alt:"Logo ".concat(t.$config.SITE_NAME_EN)}}),t._v(" "),e("meta",{attrs:{itemprop:"width",content:t.$config.LOGO_WIDTH}}),t._v(" "),e("meta",{attrs:{itemprop:"height",content:t.$config.LOGO_HEIGHT}}),t._v(" "),e("meta",{attrs:{itemprop:"name",content:t.$config.SITE_NAME_EN}})]),t._v(" "),e("meta",{attrs:{itemprop:"name",content:t.$config.SITE_NAME_EN}}),t._v(" "),e("meta",{attrs:{itemprop:"telephone",content:t.$config.TELEPHONE}}),t._v(" "),e("meta",{attrs:{itemprop:"address",content:t.$config.ADDRESS}}),t._v(" "),e("meta",{attrs:{itemprop:"url",content:t.$config.SITE_URL}})])])}),[],!1,null,null,null);e.a=component.exports},547:function(t,e,o){"use strict";o.r(e);o(15),o(64),o(45),o(56);var n={components:{MicroMarkupArticle:o(479).a},layout:"page",data:function(){return{title:"Программа дегустаций | Откройте для себя мир вина с Casino Wine",description:"Наши опытные сомелье проведут вас через уникальное путешествие, где вы сможете узнать об истории, процессе производства и характеристиках различных типов вин. Забронируйте винное казино прямо сейчас и насладитесь незабываемым опытом.",dateModified:"2023-02-21T06:08:18+03:00",datePublished:"2023-02-21T06:08:18+03:00",imageArticle:"/img/modern-format-800.jpeg"}},head:function(){return{htmlAttrs:{lang:"ru"},title:"".concat(this.title),meta:[{hid:"description",name:"description",content:"".concat(this.description)},{hid:"publish_date",name:"publish_date",content:"".concat(this.datePublished)},{hid:"og:type",name:"og:type",content:"article"},{hid:"og:title",name:"og:title",content:"".concat(this.title)},{hid:"og:description",property:"og:description",content:"".concat(this.description)},{hid:"og:image",property:"og:image",content:"".concat(this.imageArticle)},{hid:"og:url",property:"og:url",content:"".concat(this.$config.SITE_URL)},{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"},{hid:"twitter:title",name:"twitter:title",content:"".concat(this.title)},{hid:"twitter:description",property:"twitter:description",content:"".concat(this.description)},{hid:"twitter:image",property:"twitter:image",content:"".concat(this.imageArticle)}],link:[{rel:"canonical",href:"".concat(this.$config.SITE_URL,"/").concat(this.$route.name)}]}}},c=o(24),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("article",{attrs:{itemscope:"",itemprop:"mainEntity",itemtype:"http://schema.org/Article"}},[e("MicroMarkupArticle",{attrs:{"date-modified":t.dateModified,"date-published":t.datePublished,"image-article":t.imageArticle}}),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"inform-article",attrs:{itemprop:"articleBody"}},[e("br"),e("br"),t._v(" "),e("section",[e("div",{staticClass:"container"},[e("h2",[t._v("Cтруктура cемантической верстки")]),t._v(" "),e("p",[e("strong",[t._v("Визуальная верстка")]),t._v(" — любые видимые нам изменения\n          текста. Практически всем фразовым тегам по умолчанию в браузерах\n          заданы стили. Так что напрямую за визуальное форматирование отвечает\n          CSS.\n        ")]),t._v(" "),e("p",[e("strong",[t._v("Семантическая верстка")]),t._v(" — это верстка на уровне\n          смысла и содержания. Оно нужно браузерам, вспомогательным и\n          голосовым технологиям. Это особенно важно для программ чтения с\n          экранов — скринридеров.\n        ")]),t._v(" "),e("p",[t._v("\n          Главная составляющая веба — тексты. Тексты состоят из параграфов,\n          строк и слов с разным форматированием. Какие-то слова выделены\n          курсивом или подчёркнуты, у параграфов есть отступы, а у строк\n          разрывы.\n        ")]),t._v(" "),e("p",[t._v("\n          Как уже сказала выше, форматирование делится на визуальное и\n          семантическое. За визуальное форматирование отвечают теги\n          визуального форматирования, за семантическое — теги семантическое\n          форматирования.\n        ")]),t._v(" "),e("h2",[t._v("HTML теги в визуальной верстке")]),t._v(" "),e("ul",{},[e("li",[e("code",[t._v("<span>")]),t._v(";")]),t._v(" "),e("li",[e("code",[t._v("<mark>")]),t._v(";")]),t._v(" "),e("li",[e("code",[t._v("<br>")]),t._v(" и "),e("code",[t._v("<wbr>")]),t._v(";")]),t._v(" "),e("li",[e("code",[t._v("<i>")]),t._v(";")]),t._v(" "),e("li",[e("code",[t._v("<b>")]),t._v(";")]),t._v(" "),e("li",[e("code",[t._v("<sup>")]),t._v(" и "),e("code",[t._v("<sub>")]),t._v(";")]),t._v(" "),e("li",[e("code",[t._v("<ruby>")]),t._v(";")]),t._v(" "),e("li",[e("code",[t._v("<u>")]),t._v(";")]),t._v(" "),e("li",[e("code",[t._v("<s>")]),t._v(".")])]),t._v(" "),e("h2",[t._v("HTML теги в семантической верстке")]),t._v(" "),e("ul",{},[e("li",[e("code",[t._v("<a>")]),t._v(";")]),t._v(" "),e("li",[e("code",[t._v("<em>")]),t._v(";")]),t._v(" "),e("li",[e("code",[t._v("<strong>")]),t._v(";")]),t._v(" "),e("li",[e("code",[t._v("<cite>")]),t._v(";")]),t._v(" "),e("li",[e("code",[t._v("<code>")]),t._v(";")]),t._v(" "),e("li",[e("code",[t._v("<abbr>")]),t._v(";")]),t._v(" "),e("li",[e("code",[t._v("<dfn>")]),t._v(";")]),t._v(" "),e("li",[e("code",[t._v("<ins>")]),t._v(";")]),t._v(" "),e("li",[e("code",[t._v("<del>")]),t._v(";")]),t._v(" "),e("li",[e("code",[t._v("<q>")]),t._v(";")]),t._v(" "),e("li",[e("code",[t._v("<kbd>")]),t._v(";")]),t._v(" "),e("li",[e("code",[t._v("<samp>")]),t._v(";")]),t._v(" "),e("li",[e("code",[t._v("<var>")]),t._v(";")]),t._v(" "),e("li",[e("code",[t._v("<time>")]),t._v(";")]),t._v(" "),e("li",[e("code",[t._v("<small>")]),t._v(";")]),t._v(" "),e("li",[e("code",[t._v("<bdi>")]),t._v(" и "),e("code",[t._v("<bdo>")]),t._v(".")])]),t._v(" "),e("h3",[t._v("<span>...</span>")]),t._v(" "),e("p",[e("code",[t._v("span")]),t._v(" — это контейнер для текста.")]),t._v(" "),e("p",[e("code",[t._v("span")]),t._v(" используют, если нужно выделить другим цветом\n          отдельные слова, словосочетания и предложения, изменить размер\n          шрифта, добавить другой фон, обвести рамкой участок текста.\n        ")])])])])}],!1,null,null,null);e.default=component.exports}}]);