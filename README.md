This application lets you look for movies from the API at: https://www.omdbapi.com

You can search for movie titles and add movies from the search results to the checkout page.
If there is no match, you will be asked to enter something else. 
If a movie is already added, dupicate movies will not be added.
You can remove movies from the checkout page and confirm the movies in the checkout page.

The code I worked on is under /src.

The /src/Header.js is the navigation bar that contains Search and Checkout. (The Search page will be the home page.) 

The /src/Search.js and /src/Checkout.js are for the two pages on the navigation bar.
- Search is where you can find and add Movies to the Checkout.
- Checkout is where you can confirm the Movies you added.

The /src/Movie.js and /src/Favorite.js are the components for each individual movie result.
- Movie is for the results from the Search page.
- Favorite is for the movies added to the Checkout page.

The page can be accessed here: https://dhjwang.github.io/Movies/


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
