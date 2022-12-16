# [Bookstore E-commerce ](https://effervescent-muffin-f405f0.netlify.app/)

An e-commerce website with React, React Redux, and Firebase


## Features

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


### Page

<table>
  <tr>
    <td><p align="center"><b>Home Page</b></p></td>
    <td><p align="center"><b>Shop Page</b></p></td>
  </tr>
  <tr>
    <td><img src="https://github.com/jssffl/bookstore-app/blob/main/bookstore-app-homepage.png" width="100%" /></td>
    <td> <img src="https://github.com/jssffl/bookstore-app/blob/main/bookstore-app-shoppage.png" width="100%" /> </td>
  </tr>
   <tr>
    <td><p align="center"><b>Book Page</b></p></td>
    <td><p align="center"><b>Login Page</b></p></td>
  </tr>
  <tr>
    <td><img src="https://github.com/jssffl/bookstore-app/blob/main/bookstore-app-bookpage.png" width="100%" /></td>
    <td><img src="https://github.com/jssffl/bookstore-app/blob/main/bookstore-app-authpage.png" width="100%" /> </td>
  </tr>
    <tr>
    <td><p align="center"><b>Cart Page</b></p></td>
    <td><p align="center"><b>Checkout Page</b></p></td>
  </tr>
  <tr>
    <td><img src="https://github.com/jssffl/bookstore-app/blob/main/bookstore-app-cartpage.png" width="100%" /></td>
    <td><img src="https://github.com/jssffl/bookstore-app/blob/main/bookstore-app-checkoutpage.png" width="100%" /> </td>
  </tr>
 </table>
 

