# Intro to CSS
# CSS Fundamentals

## Objectives

* Discuss what CSS does and why it's important
* Differentiate between inline, internal, and external stylesheets
* Understand how to use class, id, and element selectors, and selector order of importance
* Understand the progression of positioning using the box model, floats, clear, Flexbox, and CSS grid in page layout
* Introduce CSS Framework Bootstrap and demonstrate how to implement it with Rails

## Navigating the application
* Pets show is plain CSS
* Owners index is CSS Grid
* Owners show is Bootstrap

## CSS Basics

What is CSS? -Cascading stylesheets
* Css garden website: http://www.csszengarden.com/
* dev tools/ view source

## Stylesheets and Selectors

How do we add CSS to our HTML page?
* Inline
* Internal
* External

Types of CSS selectors
* HTML tags
* Classes
* Ids
- Practicing with selectors- Css diner- https://flukeout.github.io/
```
HTML Tags:
p {
  font-size: 20px;
}

Class Selector:
.navbar {
  margin-bottom: 0px;
}

ID Selector:
#main-page-title {
  font-family: sans-serif;
}

```
## Colors
* websafe
* rgb
* hexcodes

## The Box Model

4 Elements of the box model:
* Content
* Padding
* Border
* Margin

(Use Chrome Web Developer to explore!)

## CSS Best Practices
  - !important
	- no inline
	- precedence
	- external stylesheets


## Layouts & Positioning - Floats & Clear
Floats - take our elements outside of the standard flow of the webpage
```
.grand-canyon-image {
  width: 400px;
  float: left;
}
```
Use clear to make your elements 'clear' any floats and sit inline with the regular flow of the page
```
.park-info {
  clear: both;
}
```
## Small Fixes for CSS
* Normalize files- solves compatibility issues across different browsers
* Flexbox - flexbox froggy- https://flexboxfroggy.com/
* CSS Grid - Grid-based layout system

## CSS Frameworks

Does a lot of the CSS work for us
[Semantic UI](https://semantic-ui.com/)
[Bootstrap](https://getbootstrap.com/)

JS adding CSS Libraries
* linking in a library
* script tags

Common Theme Libraries:
* Bootstrap/ semantic/ materialize/ bulma

Rails bootstrap gem: https://github.com/twbs/bootstrap-rubygem
* for bootstrap 4

## Bootstrap
Grid system
* Always put a column inside your row
* 12 units long
* don’t mix and match your small, medium, large

Components
* Classes and associated CSS ex. container
* implementing navbar partial
```
  /views/layouts/application.html.erb
  <%= render 'shared/navbar'%>
```
* Ruby Button Syntax with Bootstrap
```
<div class="btn btn-primary">
  <%= link_to "Edit Owner", edit_owner_path, :class => "btn"%>
</div>
```
* https://www.creative-tim.com/bootstrap-cheat-sheet

Responsive Design
* mobile first
* media queries and breakpoints

$grid-breakpoints: ( <br>
  xs: 0,  <br>
  sm: 480px,  <br>
  md: 768px,  <br>
  lg: 1024px  <br>
);  <br>

$container-max-widths: (  <br>
  sm: 420px, <br>
  md: 720px, <br>
  lg: 960px <br>
); <br>

## Resources

[Awwwards](https://www.awwwards.com/)
[codrops](https://tympanus.net/codrops/css_reference/)
[CSS Tricks](https://css-tricks.com/)
[CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
