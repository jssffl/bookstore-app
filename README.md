## [Bookstore E-commerce ](https://effervescent-muffin-f405f0.netlify.app/)

An e-commerce website with React, React Redux,  Firebase and Stripe


### Features
- [React](https://zh-hant.reactjs.org/): Function component and React Hooks
- [Redux Toolkit](https://redux-toolkit.js.org/): State management for book products and cart
  - Sync logic: Add books to cart  and remove books from cart
  - Async logic: Use createAsyncThunk to fetch book data from firebase
  - Selector: Use createSelector ([Reselect](https://www.npmjs.com/package/reselect)) to calculate derived Data from state and create memoized selector to optimize performance
  - Storage: Use [Redux-persist](https://www.npmjs.com/package/redux-persist) and [Reduxjs-toolkit-persist](https://www.npmjs.com/package/reduxjs-toolkit-persist) to store cart data in user's session storage
- [React Router v6](https://reactrouter.com/en/main): build SPA 
- [Firebase](https://firebase.google.com/) : Database for book products & authentication for signin/signup and google singin
- [Stripe API](https://www.npmjs.com/package/stripe) : Handle online payments by stripe
- [Goodreads API](https://www.goodreads.com/api): Fetch book rating data from Goodreads(the largest site for readers and book recommendations) via Netlify function
- [styled-components](https://styled-components.com/): CSS in JS


### Page

<table>
  <tr>
    <th align="center">Home Page</th>
    <th align="center">Shop Page</th>
  </tr>
  <tr>
    <td><img src="https://github.com/jssffl/bookstore-app/blob/main/bookstore-app-homepage.png" width="100%" /></td>
    <td><img src="https://github.com/jssffl/bookstore-app/blob/main/bookstore-app-shoppage.png" width="100%" /> </td>
  </tr>
   <tr>
    <th align="center">Book Page</th>
    <th align="center">Login Page</th>
  </tr>
  <tr>
    <td><img src="https://github.com/jssffl/bookstore-app/blob/main/bookstore-app-bookpage.png" width="100%" /></td>
    <td><img src="https://github.com/jssffl/bookstore-app/blob/main/bookstore-app-authpage.png" width="100%" /> </td>
  </tr>
    <tr>
    <th align="center">Cart Page</td>
    <th align="center">Checkout Page</td>
  </tr>
  <tr>
    <td><img src="https://github.com/jssffl/bookstore-app/blob/main/bookstore-app-cartpage.png" width="100%" /></td>
    <td><img src="https://github.com/jssffl/bookstore-app/blob/main/bookstore-app-checkoutpage.png" width="100%" /> </td>
  </tr>
 </table>
 

