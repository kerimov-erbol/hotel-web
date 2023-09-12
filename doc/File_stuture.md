
# File struture
## Primay file structure

source/
    |
    |-index.html            # Primary html file
    |
    |-js/
    |   |
    |   |-script.js
    |
    |-fonts/
    |   |
    |   |fonts
    |
    |-img/
    |   |
    |   |-script.js
    |
    |-css/
    |   |
    |   |-style.css         # Primary css file
    |
    |-scss/
    |   |
    |   |-base/
    |   |-bolck/
    |   |-layout/
    |   |-pages/
    |   |-sass-utils/
    |   |-vendors/
    |   |-style.scss        # Primary Sass file
          @import "reset.scss"
          @import "buttons.scss "
          @import "variables.scss"
<!--
1.Import all scss files to prime scss then compile it to one css prite flie.
2.In build style should be one solid file without imports-->



# sass file structure
   sass/
    |
    |– base/
    |   |– _reset.scss       # Reset/normalize
    |   |– _typography.scss  # Typography rules
    |   ...                  # Etc…
    |
    |– components/
    |   |– _buttons.scss     # Buttons
    |   |– _carousel.scss    # Carousel
    |   |– _cover.scss       # Cover
    |   |– _dropdown.scss    # Dropdown
    |   ...                  # Etc…
    |
    |– layout/
    |   |– _navigation.scss  # Navigation
    |   |– _grid.scss        # Grid system
    |   |– _header.scss      # Header
    |   |– _footer.scss      # Footer
    |   |– _sidebar.scss     # Sidebar
    |   |– _forms.scss       # Forms
    |   ...                  # Etc…
    |
    |– pages/
    |   |– _home.scss        # Home specific styles
    |   |– _contact.scss     # Contact specific styles
    |   ...                  # Etc…
    |
    |– sass-utils/
    |   |– _variables.scss   # Sass Variables
    |   |– _functions.scss   # Sass Functions
    |   |– _mixins.scss      # Sass Mixins
    |   |– _helpers.scss     # Class & placeholders helpers
    |
    |– vendors/
    |   |– _bootstrap.scss   # Bootstrap
    |   |– _jquery-ui.scss   # jQuery UI
    |   ...                  # Etc…
    |
    |
    `– style.scss            # Primary Sass file
        @import "reset.scss"
        @import "buttons.scss "
        @import "variables.scss"
<!-- import all scss files to prime scss then compile it to one css prite flie -->




## bem file structure example
source\
      index.html
      style.css
      img\
              image.jpeg
              icons\
                  icon1.i
              prouct\
                      product.jpeg
      fonts\
      block\
              style.css
              noramlayse.css
              mixin.scss
              variables.scss
              fonts.scss
              common_block\
                          heardr\
                                  header.scss                                          //header block
                                  header_modification.scss
                                  header.js
                                  hearder__search\                                     //header__search element of header block
                                                  header__search.scss
                                                  header__search_modification.csss
                                                  header__search.js
                                  header__logo\                                        //header__logo element of header block
                                              header__logo.scss
                                              header__logo_modification.csss
                                              header__logo.js

                          search\                                                      //search block
                                  search.scss
                                  search_modifiatior.scss
                                  search.js
                                  search__icon\                                         //search icon element of search block
                                              search__icon.scss
                                              search__icon_modificator.scss
                                              search__icon.js
                          logo\
                              logo.scss
                              logo_modificatiot.scss
                              logo.sj


## example
ninelines-template
├── src
│   ├── img
│   │   └── sprites
│   │       ├── png
│   │       │   └── .keep
│   │       └── svg
│   │           └── .keep
│   ├── js
│   │   ├── vendor
│   │   │   └── .keep
│   │   ├── main.js
│   │   └── vendor.js
│   ├── style
│   │   ├─ mixins
│   │   │   └── svg.pug
│   │   ├── base.pug
│   │   └── mixins.pug
│   ├── resources
│   │   └── fonts
│   │       └── .keep
│   ├── scss
│   │   ├── functions
│   │   │   └── _sprites.scss
│   │   ├── mixins
│   │   │   ├── _clearfix.scss
│   │   │   ├── _retina.scss
│   │   │   ├── _sprites.scss
│   │   │   ├── _triangle.scss
│   │   │   └── _visually-hidden.scss
│   │   ├── vendor
│   │   │   └── .keep
│   │   ├── _base.scss
│   │   ├── _fonts.scss
│   │   ├── _functions.scss
│   │   ├── _mixins.scss
│   │   ├── _sprites.hbs
│   │   ├── _sprites.scss
│   │   ├── _variables.scss
│   │   ├── _vendor.scss
│   │   └── main.scss
│   └── index.pug
├── .babelrc
├── .editorconfig
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .npmrc
├── .pug-lintrc.json
├── .stylelintignore
├── .stylelintrc
├── gulpfile.js
├── package.json
├── README.md




