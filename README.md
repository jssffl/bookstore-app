## [Bookstore E-commerce ](https://effervescent-muffin-f405f0.netlify.app/)

An e-commerce website with React, React Redux, and Firebase


### Features

- [Redux Toolkit](https://redux-toolkit.js.org/): state management for book products and cart
  - sync logic: Add/remove cart 
  - async logic: using createAsyncThunk to fetch book data from firebase
  - selector: using createSelector ([Reselect](https://www.npmjs.com/package/reselect)) to calculate derived Data from state and create memoized selector to optimize performance
  - storage: using [Redux-persist](https://www.npmjs.com/package/redux-persist) and [Reduxjs-toolkit-persist](https://www.npmjs.com/package/reduxjs-toolkit-persist) to keep cart data in session storage of user
- [React Router v6](https://reactrouter.com/en/main): build SPA 
- [Firebase](https://firebase.google.com/) : database for book products & authentication for signin/signup and google singin
- [Stripe API](https://www.npmjs.com/package/stripe) : handle online payments by stripe
- [Goodreads API](https://www.goodreads.com/api): fetch book rating data from Goodreads(the largest site for readers and book recommendations)
- [styled-components](https://styled-components.com/): CSS in JS


#### Home Page / Book Page
<p float="left">
  <img src="https://github.com/jssffl/bookstore-app/blob/main/bookstore-app-homepage.png" width="300" />
  <img src="https://github.com/jssffl/bookstore-app/blob/main/bookstore-app-bookpage.png" width="300" /> 
</p>


##### Login Page
![image](https://github.com/jssffl/bookstore-app/blob/main/bookstore-app-authpage.png)
