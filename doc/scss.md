Import and dependencies management
@use, @forward @import
The @forward rule loads a Sass stylesheet and makes its mixins, functions, and variables) available when your stylesheet is loaded with the @use rule.



Styles generating
@mixin, @include @function @extend
Mixins are a set of CSS rules that can reuse throughout the stylesheet. It helps to keep the code very dry.


The @mixin directive lets you create CSS code that is to be reused throughout the website.

The @include directive is created to let you use (include) the mixin.
use case in current project:
   Adaptivnes:
      @mixin desktop {
         @media (min-width: ($desktop * 1px)) {
            @content;
         }
      }
   font:
      @mixin desktop-heading-5{
         font-weight: 400;
         font-size: 16px;
         line-height: 27px;
      letter-spacing: 10;
      }  
   Hiding an element utility SCSS mixin:
   

@at-root

Service messages 
(error @debug @warning

Flow control
@if. @each @for, @while
• CSS at rules
@media, @supports,


