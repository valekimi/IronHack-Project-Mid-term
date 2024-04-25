# IRONHACK - FRONT END

### Welcome to "Valekimi first deploy"!

## OVERVIEW

Website for a fictional web design company (The design has been provided by Ironhack).
This includes a few pages:
- a home page
- a project page
- a contact page with a form
- a 404 error page

## Technical Specifications
- HTML, CSS
- Programming Language: [JavaScript]

## Live website
https://valekimifirstdeploy.netlify.app

## Repository
[GitHub](https://github.com/valekimi/IronHack-Project-Mid-term)

## Credits
- Jarko Garrido - Prof. Bootcamp Front End
- Ironhack Barcelona


====================================

## Main Features

### with CSS

- All pages are composed by a menu, where the active pages are highlighted in compare to the inactive ones.

![alt text](/readme/Full%20Nav%20image.png)


- Home Partners Logos are in grayscale but when hovering get the real color

![alt text](/readme/Logos%20image.png)


- All the cards, projects and services, have a shadow and they increase their size when on hover

![alt text](/readme/Card%20over%20image.png)

- When in Project or Contact page, if we click in the menu in pages we did not implemented, we get to a page 404




### with JavaScript

- in Project Page, the informations of the different projects are taken from a given endpoint url, which i fetched with JavaScript to be able to retrieve the data in the order i needed. First project has been taken has a position [3], the other 3 in the card has been taken in a reverse order starting from position [1].

- Contact form has been validated in Javascript with a function to give an error message if the user leaves the imput empty.

![alt text](/readme/Form%20image.png)

- Extra: implemented a Successful snackbar (in HTML, CSS and Javascript) for when the user submit correctly the form.

![alt text](/readme/Snackbar%20image.png)


====================================

## Responsiveness

I created 2 Media Queries:
- width 780px, more adapt for tablets
- width 390px, more adapt for mobile

The main differences from the full width are the following:

- ### (Home) - Hero
 the positioning of the image change to the top of the text and all together is more central aligned.

- ### (Home) - Quote section
 the emoji are no longer visible

- ### (Home+Project) - Subscription
 input and button go vertically

- ### (Home+Project) - Project and Service Cards
 the orientation change, from horizontal to vertical

- ### (Contact) - Form inputs
 all the inputs are one below the other taking the full width

- ### (All Pages) - Nav
 the menu disappears and gives visibility to a burger menu instead


====================================

## Backlog

I was pretty surprised to be able to accomplished even half of what i did! So I am quite satisfied about the result.
However, if I would have had more time, i would have:

- connected the burger menu when in responsive screen
- adjusted those sections in home which are larger than the other saction (testimonials and subscribe)
- made the footer responsive
- make sure that all the body stays in the center of the page
- made everything pixel perfect
- checked alternatives of the used functions in Javascript

====================================

## The End

I can tell i really enjoyed developing my first website, was a fulfilling challenge.
If you have any questions or suggestions, feel free to reach out to me.
Thanks for reading,
Valekimi 🙆🏻‍♀️