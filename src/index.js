import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContext, UserProvider } from "./contexts/userContext";
import { PostContext, PostProvider } from "./contexts/postContext";
import {
  FilteredPostContext,
  FilteredPostProvider,
} from "./contexts/filterPostContext";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";
export { UserContext };
export { PostContext };
export { FilteredPostContext };
// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <UserProvider>
          <PostProvider>
            <FilteredPostProvider>
              <App />
            </FilteredPostProvider>
          </PostProvider>
        </UserProvider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
