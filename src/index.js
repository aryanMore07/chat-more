import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { makeServer } from "./server";
import { BrowserRouter as Router } from 'react-router-dom';
import { UserContext, UserProvider } from './contexts/userContext';
import { PostContext, PostProvider } from './contexts/postContext';
import { FilteredPostContext, FilteredPostProvider } from './contexts/filterPostContext';
export { UserContext }
export { PostContext }
export { FilteredPostContext }
// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <PostProvider>
          <FilteredPostProvider>
            <App />
          </FilteredPostProvider>
        </PostProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>
);