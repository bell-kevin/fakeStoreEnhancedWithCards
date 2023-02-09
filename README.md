# Fake Store Enhanced with Cards

At the end of the video tutorial, the project had some button components and one for a search bar, which used an API to get data from Fake Store. You learned how to display products from that data that had any kind of match to the data in the search bar. In this project, you are going to enhance that app to display more data about each product. That requires loading the full object data for each product instead of a single field (title), and adding in code to allow better matches regardless of the case (uppercase vs lowercase) of the letters in the string.

If you open a browser window and go to the URL for that fake store in the "fetch" command, https://fakestoreapi.com/products, Links to an external site.you will see JSON data. It may look ugly, all run together -- if so, you can add a Chrome extension, JSONView, which will display any JSON file in a more readable version. Then, you can see that the objects in this Products file have data for "id", "title", "price", "description", "category", "image", and "rating" which has subfields for "rate" and "count". Here is an example of the JSON file:

![FakeStoreJSON.PNG](https://github.com/bell-kevin/fakeStoreEnhancedWithCards/blob/main/readMePictures/FakeStoreJSON.PNG)

In the tutorial project, the code extracted only the title; in this project, you will need "price", "description", and "image" as well.

The display of information in the tutorial project was in an unordered list. There are more pieces of data in this project, and a list doesn't work very well. Instead, this project will create one "card" for each product; each card will display the title, description, price, and image. The web page will display cards. Here is an example of the page when it launches. Notice that there is a placeholder for "Search Products" in the input box.

![FakeStoreResult.PNG](https://github.com/bell-kevin/fakeStoreEnhancedWithCards/blob/main/readMePictures/FakeStoreResult.PNG)

Here is an example of searching for text typed in lowercase that matches against a title with the text in different case. Notice that the Clear button appears, as coded in the video tutorial. 

![FakeStoreResult-2.PNG](https://github.com/bell-kevin/fakeStoreEnhancedWithCards/blob/main/readMePictures/FakeStoreResult-2.PNG)

Task A: Getting Started

Make a copy of the project from the video tutorial. Clean it up by removing the Button components. Remove any code in App.js and SearchBar.js files that refers to the Buttons. Remove any code that was commented out as the tutorial progressed. This will give you a clean starting point.

 

Task B: Some Changes

In the index.html file in the public folder, change the title tag's contents to "Fake Store Products".

In the App.js file, add an h1 tag for the title "Fake Store Products".

In the global.css file, delete everything. Add a selector for the body tag, and another for the h1 tag.

The body selector needs to set:

- the font-size to 1.2rem;

- the background color to tan;

- width to 70% with margin-right and margin-left set to auto, to center the contents on the browser window;

- the font family to the choice for "Segoe UI" -- type "font-family:" and the standard options will display in the auto-complete box, this is one of them. Don't just type "Segoe UI" -- select that choice in the auto-complete box, and it will include the alternate choices shown in that choice. 

The h1 selector needs to set font-size to 2.5rem, and text-align to center.

In the SearchBar.css file, add selectors for the input box and the clear button.

The input selector needs to set width to 20%, font-size to 1.2rem, and padding to 10px. The button selector needs to set font-size to 1.2rem, and padding to 4px.

 

Task C: Adding case-insensitivity to the Search function

In the video tutorial, any search string has to match exactly what is found in the title. If you want to find "laptop", which is in the first title (see above), you have to type "Laptop" with an initial uppercase letter, not "laptop". Make the search insensitive to the letter case, so that you can type "laptop" and get the same results as when you type "Laptop". The easiest way to do this is to convert both the title and the search term to all lowercase letters when filtering the array of products. Both terms need to include "toString().toLowerCase()". This doesn't change the stored data, just changes it temporarily for the filtering test.

Also, add a placeholder attribute to the input tag that says "Search Products". See the image above showing the page when it launches.

 

Task D: Retrieving More Data about Products

In the App.js file, the useEffect() method fetches data from the FakeStore API, and returns the product title only. In this project, you need to return the entire object for each product. Instead of mapping the JSON array to get only the title to return, simply set the products array to the data from the fetch. The useEffect hook should be this:

![FakeStoreFetch.PNG](https://github.com/bell-kevin/fakeStoreEnhancedWithCards/blob/main/readMePictures/FakeStoreFetch.PNG)

In the code from the video tutorial, in the second "then", it uses an arrow function to map the data from the fetch to get only the title. Here, the code in the second "then" uses the "setProductState" function to simply set the product array from the fetch to the product array of this app.

 

Task E: Adding Cards

Using cards for displaying discrete chunks of data is a common practice. In the Components folder, create a new folder "Card". In the Card folder, create a file "Card.js". Add in the standard beginning point -- if you have installed the extension "ES7 React/Redux/GraphGL/React-Native snippets", type "rafce" and enter to get that template. It will insert this code:

![FakeStoreTemplate.PNG](https://github.com/bell-kevin/fakeStoreEnhancedWithCards/blob/main/readMePictures/FakeStoreTemplate.PNG)

You should always start with this template, whether you use a snippet or type it yourself. As of Version 17 of React, you no longer need to import React to be able to use JSX, so the first line in that image is not required.

In the video tutorial project, in the SearchBar.js file, the return statement has the input box to get the search text, code to display the Clear button (or not), an unordered list tag, and a map statement to extract those products that include search text in a list item tag. In this version, the unordered list and list item tags will not be used. The same steps have to occur -- filter the products to create a new array, and map the results of that filtering so that -- one by one -- each product is displayed, but in a Card, not in an unordered list. Since the search text is retrieved and stored in a variable in the SearchBar.js file, that is a good place for the filtering of the products to create the new array of those items that include the search text. The work you just did in Task B will remain where it is. The output at the bottom of the return statement in SearchBar.js needs to change to call the Card component, and send a prop for the filtered list of products.

In the Card.js file, add the prop for the products. In the return, map that array and return the title, description, price, and image. Note that you need to add the text "Price: $" before the price value, and make that price value show 2 decimal places (add ".toFixed(2)" to the price field).

 

Task F: Adding Style

In the video tutorial, you used a "global.css" file in the "styles" folder. That's one way of storing the style information, putting css files in the styles folder. Another way is to create a folder for each component in the "components" folder, and store the JS file and the CSS file for that component in that folder. The component becomes more reusable and portable to other projects. Here, you will do that. Create a file in the Card folder named "Card.css". Import it into the "Card.js" file.

Look at the image above to see how the cards are displayed. Each one has a box shadow -- a black solid border with a box shadow of 5px both horizontally and vertically. The background color is white. Add a top margin of 20px, and padding of 10px on all sides. Include flex display, so that the text (title, description and price) are one item and the image is another one; the flex display will put these items on the same horizontal row. Here is an image of the layout of the card:

![FakeStoreCard.PNG](https://github.com/bell-kevin/fakeStoreEnhancedWithCards/blob/main/readMePictures/FakeStoreCard.PNG)

This will help you determine where divs, spans, classes and IDs need to appear to make it possible to add styling to the Card. Put one div around the 3 items on the left; with flex display, that div and the image tag will display side by side. Remember that a return statement must return only 1 JSX element, which is why the template for the component includes a div under the return statement. All of the various pieces of the card must be included in that single div that is returned.

 

When complete, the page should display all of the products in separate cards as shown above, and the user can type "laptop" or "Laptop" and get the same response. Take 2 screenshots: (1) the page when it launches; and (2), the page with some text in the search bar that results in a single card displayed and the Clear button visible below the search box. See the images above for examples.

 

Submission: Zip the 2 screenshots and the root folder for the project together, and submit the single zipped folder.

== We're Using GitHub Under Protest ==

This project is currently hosted on GitHub.  This is not ideal; GitHub is a
proprietary, trade-secret system that is not Free and Open Souce Software
(FOSS).  We are deeply concerned about using a proprietary system like GitHub
to develop our FOSS project. I have a [website](https://bellKevin.me) where the
project contributors are actively discussing how we can move away from GitHub
in the long term.  We urge you to read about the [Give up GitHub](https://GiveUpGitHub.org) campaign 
from [the Software Freedom Conservancy](https://sfconservancy.org) to understand some of the reasons why GitHub is not 
a good place to host FOSS projects.

If you are a contributor who personally has already quit using GitHub, please
email me at **bellKevin@pm.me** for how to send us contributions without
using GitHub directly.

Any use of this project's code by GitHub Copilot, past or present, is done
without our permission.  We do not consent to GitHub's use of this project's
code in Copilot.

![Logo of the GiveUpGitHub campaign](https://sfconservancy.org/img/GiveUpGitHub.png)
