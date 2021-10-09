import "../styles/globals.css";
import Layout from "../Components/Layout";
import { useEffect } from "react";

import { onAuthStateChanged } from "@firebase/auth";

//setup redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";

//import function to fetch user details from BE
import { currentUser } from "../Functions/user";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";

const store = createStore(rootReducer, composeWithDevTools());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
