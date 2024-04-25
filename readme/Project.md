
WHAT I DID - Day by Day

====================================
DAY 1

In Visual Studio Code: set up the pages in HTML, CSS, JS.
Stored all the images in the Assets folder.

## HOME - PAGE
Built the HTML and CSS.

Reflections and things i found important or hard to achieve:

- understand structure and element of the page to start the files and the code structures.
- setting styles from the beginning helps in working faster, also is it possible to the assign styles directly in html (ex. text and button styles)
- display flex is basically applied in every section
- floating images are tough to manage, still need to understand what is the best rule.
Using postition:relative in the parent and position:absolute to the child and then set coordinates (top, left, ...)
- if you dont set a background color for a button, it gives a gray by default
- Headers always come with a own margin or padding, not always visible from inspect, how to avoid this?!
- in inspect, showing layouts helps visually to adjust elements
- I am still fighting with the width of the sections, maybe i set it incorrectly


====================================
DAY 2

## CONTACT - PAGE
Built the HTML and CSS

Reflections and things i found important or hard to achieve:

- the inputs have a placeholder text that by default is or "monospace" or another one, so I had to apply again the font family in the CSS tag
- Input type can be declared also in CSS directly in this format: ex .email input[type="email"]


## PROJECT 1 - PAGE
Built the HTML and CSS

Reflections and things i found important or hard to achieve:

- To do a blur effect of the main image, it is necessary to create 2 divs containing the same image, one will be position relative and the other absolute, with filter: blur and also opacity if needed. Also, div with the effect needs to be placed in the HTML before than the main image, otherwise the effect will be applied on top. 
- fetch API.... help!
- ok i manage to fetch the first part, here i discovered that you can already give sizes to the image and remove it from css. This steps given me headache as i couldn't understand why the image was not adapting to the size i pre-set in css.
- i am having some issue in adapting the blur background to the size i need as seems not working in the same way of the main image


## FETCH - Project 1
Connected the DOM

Reflections and things i found important or hard to achieve:

- fetched the provided endpoint URL for the project 1
- Here i directly asked to load the project data in position [3]
- and load every object propriety using the Id
- here i could apply the correct shadow to the project cover, Jarko helped me out and made me realize i was applying the css to the parent and not to the child.


## FETCH - Other Projects
Connected the DOM

Reflections and things i found important or hard to achieve:

- fetched the provided endpoint URL
- with a query selector i asked to assign data in a revers order starting from position [1]


====================================
DAY 3

## VALIDATION - Contact Form
Created the function in Javascript

Reflections and things i found important or hard to achieve:

- To display a message "alert" below the input, it is necessary to add a div below the input
- i managed to assign the error alert if an input field has not been filled, however I didn't manage to set a red border of the input when the user gets the error message. - Issue solved thanks to the help of Jarko. I was trying to set in the borderColor and changing just the color, however since the original imputs do not have borders, i had to set border with size, color and style.


## MEDIA QUERY -  Home

- i was able to create the burger menu when the screen is smaller then 780px (tablet)
- Couldn't understand why the justify content(Space between) was not working - Prof. Jarko advice to do not use display:flex in body as this trigger mistakes in the FE.
- created additional media query for screens smaller then 390px (mobile), but the most is very simir to the tablet configuration.


====================================
DAY 4

## MEDIA QUERY -  Project / Contact

- applied the media query to all the other pages

## 404 Page

- created the HTML and CSS
- applied media query
- connected with the other pages - error page comes when user clicks on Services (in menu) when in the Open project page. Same happens when in Contact page, clicking in menu on "projects" and "services.

## Successful Snackbar

- implemented the html and css for when the user submit the form correctly.
- this will appear at the bottom of the page and will be visible for 3 seconds.

## Set Website live - DEPLOY with NETLIFY